import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_FlowMetadataCatalogConfigGlueDataCatalog {
  // A naming prefix for each Data Catalog table that Amazon AppFlow creates
  tablePrefix?: string;

  // The name of an existing Glue database to store the metadata tables that Amazon AppFlow creates.
  databaseName?: string;

  // The ARN of an IAM role that grants AppFlow the permissions it needs to create Data Catalog tables, databases, and partitions.
  roleArn?: string;
}

export function appflow_FlowMetadataCatalogConfigGlueDataCatalog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tablePrefix",
      "A naming prefix for each Data Catalog table that Amazon AppFlow creates",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "The name of an existing Glue database to store the metadata tables that Amazon AppFlow creates.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of an IAM role that grants AppFlow the permissions it needs to create Data Catalog tables, databases, and partitions.",
      () => [],
      true,
      false,
    ),
  ];
}
