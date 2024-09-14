import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dynamodb_TableReplica {
  // Region name of the replica.
  regionName?: string;

  // ARN of the Table Stream. Only available when `stream_enabled = true`
  streamArn?: string;

  // Timestamp, in ISO 8601 format, for this stream. Note that this timestamp is not a unique identifier for the stream on its own. However, the combination of AWS customer ID, table name and this field is guaranteed to be unique. It can be used for creating CloudWatch Alarms. Only available when `stream_enabled = true`.
  streamLabel?: string;

  // ARN of the table
  arn?: string;

  // ARN of the CMK that should be used for the AWS KMS encryption. This argument should only be used if the key is different from the default KMS-managed DynamoDB key, `alias/aws/dynamodb`. --Note:-- This attribute will _not_ be populated with the ARN of _default_ keys.
  kmsKeyArn?: string;

  // Whether to enable Point In Time Recovery for the replica. Default is `false`.
  pointInTimeRecovery?: boolean;

  // Whether to propagate the global table's tags to a replica. Default is `false`. Changes to tags only move in one direction: from global (source) to replica. In other words, tag drift on a replica will not trigger an update. Tag or replica changes on the global table, whether from drift or configuration changes, are propagated to replicas. Changing from `true` to `false` on a subsequent `apply` means replica tags are left as they were, unmanaged, not deleted.
  propagateTags?: boolean;
}

export function dynamodb_TableReplica_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "regionName",
      "Region name of the replica.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamArn",
      "ARN of the Table Stream. Only available when `stream_enabled = true`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamLabel",
      "Timestamp, in ISO 8601 format, for this stream. Note that this timestamp is not a unique identifier for the stream on its own. However, the combination of AWS customer ID, table name and this field is guaranteed to be unique. It can be used for creating CloudWatch Alarms. Only available when `stream_enabled = true`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the table",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "ARN of the CMK that should be used for the AWS KMS encryption. This argument should only be used if the key is different from the default KMS-managed DynamoDB key, `alias/aws/dynamodb`. **Note:** This attribute will _not_ be populated with the ARN of _default_ keys.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "pointInTimeRecovery",
      "Whether to enable Point In Time Recovery for the replica. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "propagateTags",
      "Whether to propagate the global table's tags to a replica. Default is `false`. Changes to tags only move in one direction: from global (source) to replica. In other words, tag drift on a replica will not trigger an update. Tag or replica changes on the global table, whether from drift or configuration changes, are propagated to replicas. Changing from `true` to `false` on a subsequent `apply` means replica tags are left as they were, unmanaged, not deleted.",
      () => [],
      false,
      false,
    ),
  ];
}
