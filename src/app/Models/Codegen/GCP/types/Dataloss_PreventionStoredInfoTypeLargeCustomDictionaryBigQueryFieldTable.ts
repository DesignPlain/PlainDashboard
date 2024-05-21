import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable {
  // The dataset ID of the table.
  datasetId?: string;

  // The Google Cloud Platform project ID of the project containing the table.
  projectId?: string;

  // The name of the table.
  tableId?: string;
}

export function dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The dataset ID of the table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The Google Cloud Platform project ID of the project containing the table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableId",
      "The name of the table.",
      [],
      true,
      false,
    ),
  ];
}
