export interface DatasetAccessView {
  // The ID of the dataset containing this table.
  DatasetId?: string;

  // The ID of the project containing this table.
  ProjectId?: string;

  /*
The ID of the table. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.
*/
  TableId?: string;
}
