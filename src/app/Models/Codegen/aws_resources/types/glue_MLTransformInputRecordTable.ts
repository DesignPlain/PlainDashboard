import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_MLTransformInputRecordTable {
  // A table name in the AWS Glue Data Catalog.
  tableName?: string;

  // A unique identifier for the AWS Glue Data Catalog.
  catalogId?: string;

  // The name of the connection to the AWS Glue Data Catalog.
  connectionName?: string;

  // A database name in the AWS Glue Data Catalog.
  databaseName?: string;
}

export function glue_MLTransformInputRecordTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "A table name in the AWS Glue Data Catalog.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "A unique identifier for the AWS Glue Data Catalog.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectionName",
      "The name of the connection to the AWS Glue Data Catalog.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "A database name in the AWS Glue Data Catalog.",
      [],
      true,
      false,
    ),
  ];
}
