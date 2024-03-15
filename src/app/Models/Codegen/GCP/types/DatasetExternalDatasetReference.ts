export interface DatasetExternalDatasetReference {
  /*
The connection id that is used to access the externalSource.
Format: projects/{projectId}/locations/{locationId}/connections/{connectionId}
*/
  Connection?: string;

  // External source that backs this dataset.
  ExternalSource?: string;
}
