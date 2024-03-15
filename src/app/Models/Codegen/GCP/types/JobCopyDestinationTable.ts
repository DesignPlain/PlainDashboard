export interface JobCopyDestinationTable {
  // The ID of the dataset containing this table.
  DatasetId?: string;

  // The ID of the project containing this table.
  ProjectId?: string;

  /*
The table. Can be specified `{{table_id}}` if `project_id` and `dataset_id` are also set,
or of the form `projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}` if not.
*/
  TableId?: string;
}
