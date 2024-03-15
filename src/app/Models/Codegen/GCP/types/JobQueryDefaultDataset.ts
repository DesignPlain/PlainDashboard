export interface JobQueryDefaultDataset {
  /*
The dataset. Can be specified `{{dataset_id}}` if `project_id` is also set,
or of the form `projects/{{project}}/datasets/{{dataset_id}}` if not.
*/
  DatasetId?: string;

  // The ID of the project containing this table.
  ProjectId?: string;
}
