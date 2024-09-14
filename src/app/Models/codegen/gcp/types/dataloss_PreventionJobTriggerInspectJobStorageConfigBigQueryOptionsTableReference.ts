import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference {
  // The Google Cloud Platform project ID of the project containing the table.
  projectId?: string;

  // The name of the table.
  tableId?: string;

  // The dataset ID of the table.
  datasetId?: string;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The Google Cloud Platform project ID of the project containing the table.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableId",
      "The name of the table.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The dataset ID of the table.",
      () => [],
      true,
      false,
    ),
  ];
}
