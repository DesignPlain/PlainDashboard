import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions,
  dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions,
  dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions,
  dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions,
  dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig,
  dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig";

export interface dataloss_PreventionJobTriggerInspectJobStorageConfig {
  /*
Options defining BigQuery table and row identifiers.
Structure is documented below.
*/
  bigQueryOptions?: dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions;

  /*
Options defining a file or a set of files within a Google Cloud Storage bucket.
Structure is documented below.
*/
  cloudStorageOptions?: dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;

  /*
Options defining a data set within Google Cloud Datastore.
Structure is documented below.
*/
  datastoreOptions?: dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions;

  /*
Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
Structure is documented below.
*/
  hybridOptions?: dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions;

  /*
Configuration of the timespan of the items to include in scanning
Structure is documented below.
*/
  timespanConfig?: dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "bigQueryOptions",
      "Options defining BigQuery table and row identifiers.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudStorageOptions",
      "Options defining a file or a set of files within a Google Cloud Storage bucket.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "datastoreOptions",
      "Options defining a data set within Google Cloud Datastore.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hybridOptions",
      "Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timespanConfig",
      "Configuration of the timespan of the items to include in scanning\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigTimespanConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
