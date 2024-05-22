import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_EndpointKinesisSettings {
  // Prefixes schema and table names to partition values, when the partition type is primary-key-type. Default is `false`.
  partitionIncludeSchemaTable?: boolean;

  // Include NULL and empty columns in the target. Default is `false`.
  includeNullAndEmpty?: boolean;

  // Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. Default is `false`.
  includePartitionValue?: boolean;

  // Includes any data definition language (DDL) operations that change the table in the control data. Default is `false`.
  includeTableAlterOperations?: boolean;

  // Provides detailed transaction information from the source database. Default is `false`.
  includeTransactionDetails?: boolean;

  // Output format for the records created. Default is `json`. Valid values are `json` and `json-unformatted` (a single line with no tab).
  messageFormat?: string;

  // ARN of the IAM Role with permissions to write to the Kinesis data stream.
  serviceAccessRoleArn?: string;

  // ARN of the Kinesis data stream.
  streamArn?: string;

  // Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. Default is `false`.
  includeControlDetails?: boolean;
}

export function dms_EndpointKinesisSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "partitionIncludeSchemaTable",
      "Prefixes schema and table names to partition values, when the partition type is primary-key-type. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includePartitionValue",
      "Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccessRoleArn",
      "ARN of the IAM Role with permissions to write to the Kinesis data stream.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeControlDetails",
      "Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeNullAndEmpty",
      "Include NULL and empty columns in the target. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeTableAlterOperations",
      "Includes any data definition language (DDL) operations that change the table in the control data. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeTransactionDetails",
      "Provides detailed transaction information from the source database. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageFormat",
      "Output format for the records created. Default is `json`. Valid values are `json` and `json-unformatted` (a single line with no tab).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamArn",
      "ARN of the Kinesis data stream.",
      [],
      false,
      false,
    ),
  ];
}
