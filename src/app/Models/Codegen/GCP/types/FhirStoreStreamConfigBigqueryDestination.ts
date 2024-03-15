import { FhirStoreStreamConfigBigqueryDestinationSchemaConfig } from "./FhirStoreStreamConfigBigqueryDestinationSchemaConfig";

export interface FhirStoreStreamConfigBigqueryDestination {
  // BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId
  DatasetUri?: string;

  /*
The configuration for the exported BigQuery schema.
Structure is documented below.
*/
  SchemaConfig?: FhirStoreStreamConfigBigqueryDestinationSchemaConfig;
}
