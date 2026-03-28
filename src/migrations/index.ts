import * as migration_20260328_165746_initial from './20260328_165746_initial';
import * as migration_20260328_173515 from './20260328_173515';
import * as migration_20260328_174121 from './20260328_174121';
import * as migration_20260328_220503_remove_year_from_projects from './20260328_220503_remove_year_from_projects';
import * as migration_20260328_225810 from './20260328_225810';
import * as migration_20260328_232435 from './20260328_232435';

export const migrations = [
  {
    up: migration_20260328_165746_initial.up,
    down: migration_20260328_165746_initial.down,
    name: '20260328_165746_initial',
  },
  {
    up: migration_20260328_173515.up,
    down: migration_20260328_173515.down,
    name: '20260328_173515',
  },
  {
    up: migration_20260328_174121.up,
    down: migration_20260328_174121.down,
    name: '20260328_174121',
  },
  {
    up: migration_20260328_220503_remove_year_from_projects.up,
    down: migration_20260328_220503_remove_year_from_projects.down,
    name: '20260328_220503_remove_year_from_projects',
  },
  {
    up: migration_20260328_225810.up,
    down: migration_20260328_225810.down,
    name: '20260328_225810',
  },
  {
    up: migration_20260328_232435.up,
    down: migration_20260328_232435.down,
    name: '20260328_232435'
  },
];
