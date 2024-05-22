import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_DataQualityRulesetTargetTable {
  // The catalog id where the AWS Glue table exists.
  catalogId?: string;

  // Name of the database where the AWS Glue table exists.
  databaseName?: string;

  // Name of the AWS Glue table.
  tableName?: string;
}

export function glue_DataQualityRulesetTargetTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "The catalog id where the AWS Glue table exists.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "Name of the database where the AWS Glue table exists.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "Name of the AWS Glue table.",
      [],
      true,
      true,
    ),
  ];
}
