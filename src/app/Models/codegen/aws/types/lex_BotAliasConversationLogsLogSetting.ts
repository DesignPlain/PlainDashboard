import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lex_BotAliasConversationLogsLogSetting {
  // The destination where logs are delivered. Options are `CLOUDWATCH_LOGS` or `S3`.
  destination?: string;

  // The Amazon Resource Name (ARN) of the key used to encrypt audio logs in an S3 bucket. This can only be specified when `destination` is set to `S3`. Must be between 20 and 2048 characters in length.
  kmsKeyArn?: string;

  // The type of logging that is enabled. Options are `AUDIO` or `TEXT`.
  logType?: string;

  // The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs are delivered. Must be less than or equal to 2048 characters in length.
  resourceArn?: string;

  // The prefix of the S3 object key for `AUDIO` logs or the log stream name for `TEXT` logs.
  resourcePrefix?: string;
}

export function lex_BotAliasConversationLogsLogSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destination",
      "The destination where logs are delivered. Options are `CLOUDWATCH_LOGS` or `S3`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "The Amazon Resource Name (ARN) of the key used to encrypt audio logs in an S3 bucket. This can only be specified when `destination` is set to `S3`. Must be between 20 and 2048 characters in length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logType",
      "The type of logging that is enabled. Options are `AUDIO` or `TEXT`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs are delivered. Must be less than or equal to 2048 characters in length.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourcePrefix",
      "The prefix of the S3 object key for `AUDIO` logs or the log stream name for `TEXT` logs.",
      () => [],
      false,
      false,
    ),
  ];
}
