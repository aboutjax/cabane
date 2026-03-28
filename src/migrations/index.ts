import * as migration_20260328_165746_initial from './20260328_165746_initial';

export const migrations = [
  {
    up: migration_20260328_165746_initial.up,
    down: migration_20260328_165746_initial.down,
    name: '20260328_165746_initial'
  },
];
