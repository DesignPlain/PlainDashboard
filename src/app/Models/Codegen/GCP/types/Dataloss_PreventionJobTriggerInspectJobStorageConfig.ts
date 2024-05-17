import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig";

export interface Dataloss_PreventionJobTriggerInspectJobStorageConfig {
  /*
Options defining BigQuery table and row identifiers.
Structure is documented below.
*/
  BigQueryOptions?: Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions;

  /*
Options defining a file or a set of files within a Google Cloud Storage bucket.
Structure is documented below.
*/
  CloudStorageOptions?: Dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;

  /*
Options defining a data set within Google Cloud Datastore.
Structure is documented below.
*/
  DatastoreOptions?: Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions;

  /*
Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
Structure is documented below.
*/
  HybridOptions?: Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions;

  /*
Configuration of the timespan of the items to include in scanning
Structure is documented below.
*/
  TimespanConfig?: Dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig;
}

export function Dataloss_PreventionJobTriggerInspectJobStorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CloudStorageOptions",
      "Options defining a file or a set of files within a Google Cloud Storage bucket.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DatastoreOptions",
      "Options defining a data set within Google Cloud Datastore.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HybridOptions",
      "Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TimespanConfig",
      "Configuration of the timespan of the items to include in scanning\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BigQueryOptions",
      "Options defining BigQuery table and row identifiers.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
