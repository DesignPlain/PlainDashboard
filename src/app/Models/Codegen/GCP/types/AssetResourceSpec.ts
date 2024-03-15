export interface AssetResourceSpec {
  // Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets. Possible values: DIRECT, MANAGED
  ReadAccessMode?: string;

  /*
Required. Immutable. Type of resource. Possible values: STORAGE_BUCKET, BIGQUERY_DATASET

- - -
*/
  Type?: string;

  // Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: `projects/{project_number}/buckets/{bucket_id}` `projects/{project_number}/datasets/{dataset_id}`
  Name?: string;
}
