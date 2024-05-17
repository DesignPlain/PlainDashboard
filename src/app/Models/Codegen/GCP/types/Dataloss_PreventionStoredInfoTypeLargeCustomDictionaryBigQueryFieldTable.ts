import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable {
  // The dataset ID of the table.
  DatasetId?: string;

  // The Google Cloud Platform project ID of the project containing the table.
  ProjectId?: string;

  // The name of the table.
  TableId?: string;
}

export function Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TableId",
      "The name of the table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DatasetId",
      "The dataset ID of the table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The Google Cloud Platform project ID of the project containing the table.",
      [],
      true,
      false,
    ),
  ];
}
