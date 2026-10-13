/* Copyright (c) 2026 Neil Yuanting Li. MIT License; see LICENSE-CODE. */
'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const {percolation, segregation} = require('../models.js');

const populations = cells => [0, 1, 2].map(type => cells.filter(value => value === type).length);

// An independent graph oracle: form pairwise geometric adjacency, then take
// transitive closure. This does not use the model's flood-fill traversal.
function openGridReachability(cells, size) {
  const occupied = cells.flatMap((value, index) => value ? [index] : []);
  const paths = occupied.map(a => occupied.map(b => a === b ||
    Math.abs(a % size - b % size) + Math.abs(Math.floor(a / size) - Math.floor(b / size)) === 1));
  for (let k = 0; k < occupied.length; k++) {
    for (let i = 0; i < occupied.length; i++) {
      for (let j = 0; j < occupied.length; j++) {
        paths[i][j] ||= paths[i][k] && paths[k][j];
      }
    }
  }
  return {occupied, paths};
}

// Count unordered occupied pairs using toroidal distances. Each pair supplies
// one neighbor to each endpoint, independently of the simulation's site scan.
function pairStatistics(cells, size, threshold, periodic = true) {
  const neighbors = Array(cells.length).fill(0);
  const sameNeighbors = Array(cells.length).fill(0);
  let pairs = 0, samePairs = 0;
  for (let a = 0; a < cells.length; a++) {
    if (!cells[a]) continue;
    for (let b = a + 1; b < cells.length; b++) {
      if (!cells[b]) continue;
      let dx = Math.abs(a % size - b % size);
      let dy = Math.abs(Math.floor(a / size) - Math.floor(b / size));
      if (periodic) {
        dx = Math.min(dx, size - dx);
        dy = Math.min(dy, size - dy);
      }
      if (Math.max(dx, dy) !== 1) continue;
      pairs++;
      neighbors[a]++;
      neighbors[b]++;
      if (cells[a] === cells[b]) {
        samePairs++;
        sameNeighbors[a]++;
        sameNeighbors[b]++;
      }
    }
  }
  return {
    sameNeighborFraction: pairs ? samePairs / pairs : 0,
    unhappy: cells.filter((type, i) => type && neighbors[i] &&
      sameNeighbors[i] / neighbors[i] < threshold).length
  };
}

test('percolation has exact empty and fully occupied limits', () => {
  for (const size of [2, 7, 32]) {
    const empty = percolation({size, occupation: 0, seed: 17});
    assert.equal(empty.occupied, 0);
    assert.equal(empty.largest, 0);
    assert.equal(empty.spanning, false);
    assert.deepEqual(empty.clusters, []);
    assert.ok(empty.labels.every(label => label === -1));

    const full = percolation({size, occupation: 1, seed: 17});
    assert.equal(full.occupied, size * size);
    assert.equal(full.largest, size * size);
    assert.equal(full.spanning, true);
    assert.deepEqual(full.clusters, [{size: size * size, spans: true}]);
    assert.ok(full.labels.every(label => label === full.labels[0]));
  }
});

test('increasing occupation with a fixed seed preserves every existing path', () => {
  for (const seed of [0, 1, 17, 4294967295]) {
    let previous = percolation({occupation: 0, size: 12, seed});
    for (const occupation of [.15, .3, .45, .59, .7, .85, 1]) {
      const current = percolation({occupation, size: 12, seed});
      previous.cells.forEach((occupied, i) => {
        if (occupied) assert.equal(current.cells[i], 1, `lost occupied site ${i}, seed ${seed}`);
      });
      assert.ok(current.occupied >= previous.occupied);
      assert.ok(current.largest >= previous.largest);
      if (previous.spanning) assert.equal(current.spanning, true);
      previous = current;
    }
  }
});

// These seeds select small, directly inspectable drawings. Their assertions
// specify topology rather than depending on arbitrary cluster label numbers.
const disconnectedMotifs = [
  {name: 'diagonal contacts are not edges', size: 2, occupation: .5, seed: 18,
    cells: [1, 0, 0, 1]},
  {name: 'the end of one row does not touch the next row start', size: 3, occupation: .3, seed: 36,
    cells: [0, 0, 1, 1, 0, 0, 0, 0, 0]},
  {name: 'top and bottom do not wrap', size: 3, occupation: .3, seed: 45,
    cells: [1, 0, 0, 0, 0, 0, 1, 0, 0]},
  {name: 'left and right do not wrap', size: 3, occupation: .3, seed: 526,
    cells: [1, 0, 1, 0, 0, 0, 0, 0, 0]}
];
for (const motif of disconnectedMotifs) {
  test(`percolation: ${motif.name}`, () => {
    const result = percolation(motif);
    assert.deepEqual(result.cells, motif.cells, 'the fixture must retain its intended geometry');
    assert.equal(result.occupied, 2);
    assert.equal(result.largest, 1);
    assert.equal(result.spanning, false);
    assert.equal(result.clusters.length, 2);
    const occupiedLabels = result.labels.filter(label => label >= 0);
    assert.notEqual(occupiedLabels[0], occupiedLabels[1]);
  });
}

test('an edge-connected vertical column spans the open grid', () => {
  const result = percolation({size: 3, occupation: .3, seed: 91});
  assert.deepEqual(result.cells, [0, 1, 0, 0, 1, 0, 0, 1, 0]);
  assert.equal(result.spanning, true);
  assert.equal(result.largest, 3);
  assert.deepEqual(result.clusters, [{size: 3, spans: true}]);
});

test('cluster membership and spanning agree with independent geometric connectivity', () => {
  for (const size of [2, 3, 5]) {
    for (const seed of [0, 7, 17, 83]) {
      for (const occupation of [.25, .59, .8]) {
        const result = percolation({size, seed, occupation});
        const {occupied, paths} = openGridReachability(result.cells, size);
        occupied.forEach((a, i) => occupied.forEach((b, j) => {
          assert.equal(result.labels[a] === result.labels[b], paths[i][j]);
        }));
        result.cells.forEach((value, i) => {
          if (!value) assert.equal(result.labels[i], -1);
        });
        const sizes = paths.map(row => row.filter(Boolean).length);
        assert.equal(result.largest, sizes.length ? Math.max(...sizes) : 0);
        const spans = occupied.some((a, i) => a < size && occupied.some((b, j) =>
          b >= size * (size - 1) && paths[i][j]));
        assert.equal(result.spanning, spans);
        assert.equal(result.clusters.reduce((sum, cluster) => sum + cluster.size, 0), occupied.length);
      }
    }
  }
});

test('percolation seeds reproduce a sample and different seeds change disorder', () => {
  const args = {size: 16, occupation: .59, seed: 17};
  assert.deepEqual(percolation(args), percolation(args));
  assert.notDeepEqual(percolation(args).cells, percolation({...args, seed: 18}).cells);
});

test('relocation conserves each group and the vacancy count on odd and even grids', () => {
  for (const size of [4, 5, 12, 17]) {
    for (const threshold of [0, .3, .6, 1]) {
      const result = segregation({size, threshold, seed: 17, sweeps: 8});
      const before = populations(result.initial);
      assert.deepEqual(populations(result.cells), before);
      assert.equal(before[0], Math.floor(size * size * .2));
      assert.ok(Math.abs(before[1] - before[2]) <= 1);
      assert.equal(before.reduce((a, b) => a + b), size * size);
      assert.ok(result.cells.every(type => [0, 1, 2].includes(type)));
      assert.ok(result.totalMoves <= (before[1] + before[2]) * result.final.sweep,
        'a member can move at most once per sweep');
    }
  }
});

test('zero threshold never relocates a member', () => {
  for (const seed of [0, 17, 4294967295]) {
    const result = segregation({size: 12, threshold: 0, seed, sweeps: 60});
    assert.equal(result.totalMoves, 0);
    assert.deepEqual(result.cells, result.initial);
    assert.equal(result.final.unhappy, 0);
  }
});

test('an initially satisfied population stops at sweep zero', () => {
  const result = segregation({size: 4, threshold: 0, seed: 17, sweeps: 20});
  assert.equal(result.history[0].unhappy, 0);
  assert.equal(result.final.sweep, 0);
  assert.equal(result.history.length, 1);
});

test('zero sweep budget returns the initial state even when members are unhappy', () => {
  const result = segregation({size: 12, threshold: 1, seed: 17, sweeps: 0});
  assert.ok(result.final.unhappy > 0);
  assert.equal(result.final.sweep, 0);
  assert.equal(result.history.length, 1);
  assert.equal(result.totalMoves, 0);
  assert.deepEqual(result.cells, result.initial);
});

test('satisfaction ends a run early and extra budget does not change a settled state', () => {
  const args = {size: 12, threshold: .3, seed: 17};
  const result = segregation({...args, sweeps: 60});
  assert.equal(result.final.unhappy, 0);
  assert.ok(result.final.sweep > 0 && result.final.sweep < 60);
  assert.equal(result.history.findIndex(state => state.unhappy === 0), result.history.length - 1);
  const atStop = segregation({...args, sweeps: result.final.sweep});
  assert.deepEqual(atStop.cells, result.cells);
  assert.deepEqual(atStop.history, result.history);
  assert.equal(atStop.totalMoves, result.totalMoves);
});

test('an unsettled run reports the full sweep budget without claiming satisfaction', () => {
  const result = segregation({size: 4, threshold: 1, seed: 17, sweeps: 3});
  assert.ok(result.final.unhappy > 0);
  assert.equal(result.final.sweep, 3);
  assert.deepEqual(result.history.map(state => state.sweep), [0, 1, 2, 3]);
  assert.ok(result.history.every(state => state.unhappy > 0));
});

test('segregation seeds reproduce complete histories and budgets have consistent prefixes', () => {
  const args = {size: 12, threshold: .6, seed: 17, sweeps: 8};
  const full = segregation(args);
  assert.deepEqual(full, segregation(args));
  assert.notDeepEqual(full.initial, segregation({...args, seed: 18}).initial);
  const short = segregation({...args, sweeps: 3});
  assert.deepEqual(short.initial, full.initial);
  assert.deepEqual(short.history, full.history.slice(0, short.history.length));
  assert.ok(full.totalMoves >= short.totalMoves);
  assert.deepEqual(full.initial, segregation({...args, threshold: 0, sweeps: 0}).initial);
});

test('segregation statistics use eight periodic neighbors and count occupied pairs', () => {
  for (const size of [4, 7, 12]) {
    const threshold = .6;
    const result = segregation({size, threshold, seed: 17, sweeps: 5});
    for (const [cells, state] of [[result.initial, result.history[0]], [result.cells, result.final]]) {
      const expected = pairStatistics(cells, size, threshold);
      assert.equal(state.sameNeighborFraction, expected.sameNeighborFraction);
      assert.equal(state.unhappy, expected.unhappy);
    }
  }
  const staticResult = segregation({size: 4, threshold: .6, seed: 17, sweeps: 0});
  assert.equal(staticResult.final.sameNeighborFraction, 23 / 42);
  assert.notEqual(staticResult.final.sameNeighborFraction,
    pairStatistics(staticResult.cells, 4, .6, false).sameNeighborFraction,
    'this fixture distinguishes periodic from open boundaries');
});

test('social and connectivity parameters reject invalid domains', () => {
  for (const occupation of [-.01, 1.01, NaN, Infinity]) {
    assert.throws(() => percolation({occupation}), RangeError);
  }
  for (const threshold of [-.01, 1.01, NaN, Infinity]) {
    assert.throws(() => segregation({threshold}), RangeError);
  }
  for (const seed of [-1, .5, 4294967296, NaN]) {
    assert.throws(() => percolation({seed}), RangeError);
    assert.throws(() => segregation({seed}), RangeError);
  }
  for (const sweeps of [-1, 1.5, 101]) {
    assert.throws(() => segregation({sweeps}), RangeError);
  }
  assert.throws(() => percolation({size: 1}), RangeError);
  assert.throws(() => percolation({size: 4.5}), RangeError);
  assert.throws(() => segregation({size: 3}), RangeError);
  assert.throws(() => segregation({size: 4.5}), RangeError);
});
