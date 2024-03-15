export interface LinkedDatasetBigqueryDataset {
  /*
(Output)
Output only. The full resource name of the BigQuery dataset. The DATASET_ID will match the ID
of the link, so the link must match the naming restrictions of BigQuery datasets
(alphanumeric characters and underscores only). The dataset will have a resource path of
"bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET_ID]"
*/
  DatasetId?: string;
}
