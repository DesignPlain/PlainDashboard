export interface JobExtractSourceModel {
  // The ID of the dataset containing this model.
  DatasetId?: string;

  /*
The ID of the model.

- - -
*/
  ModelId?: string;

  // The ID of the project containing this model.
  ProjectId?: string;
}
