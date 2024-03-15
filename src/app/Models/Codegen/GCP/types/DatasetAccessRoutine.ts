export interface DatasetAccessRoutine {
  // The ID of the dataset containing this table.
  DatasetId?: string;

  // The ID of the project containing this table.
  ProjectId?: string;

  /*
The ID of the routine. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.
*/
  RoutineId?: string;
}
