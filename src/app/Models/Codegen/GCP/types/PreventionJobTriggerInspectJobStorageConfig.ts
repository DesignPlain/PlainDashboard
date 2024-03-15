import { PreventionJobTriggerInspectJobStorageConfigBigQueryOptions } from "./PreventionJobTriggerInspectJobStorageConfigBigQueryOptions";
import { PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions } from "./PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions";
import { PreventionJobTriggerInspectJobStorageConfigDatastoreOptions } from "./PreventionJobTriggerInspectJobStorageConfigDatastoreOptions";
import { PreventionJobTriggerInspectJobStorageConfigHybridOptions } from "./PreventionJobTriggerInspectJobStorageConfigHybridOptions";
import { PreventionJobTriggerInspectJobStorageConfigTimespanConfig } from "./PreventionJobTriggerInspectJobStorageConfigTimespanConfig";

export interface PreventionJobTriggerInspectJobStorageConfig {
  /*
Options defining BigQuery table and row identifiers.
Structure is documented below.
*/
  BigQueryOptions?: PreventionJobTriggerInspectJobStorageConfigBigQueryOptions;

  /*
Options defining a file or a set of files within a Google Cloud Storage bucket.
Structure is documented below.
*/
  CloudStorageOptions?: PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;

  /*
Options defining a data set within Google Cloud Datastore.
Structure is documented below.
*/
  DatastoreOptions?: PreventionJobTriggerInspectJobStorageConfigDatastoreOptions;

  /*
Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
Structure is documented below.
*/
  HybridOptions?: PreventionJobTriggerInspectJobStorageConfigHybridOptions;

  /*
Configuration of the timespan of the items to include in scanning
Structure is documented below.
*/
  TimespanConfig?: PreventionJobTriggerInspectJobStorageConfigTimespanConfig;
}
