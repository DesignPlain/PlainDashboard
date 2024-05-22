import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  // Enables or disables the logging. Defaults to `false`.
  enabled?: boolean;

  // The CloudWatch group name for logging. This value is required if `enabled` is true.
  logGroupName?: string;

  // The CloudWatch log stream name for logging. This value is required if `enabled` is true.
  logStreamName?: string;
}

export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logStreamName",
      "The CloudWatch log stream name for logging. This value is required if `enabled` is true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables or disables the logging. Defaults to `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logGroupName",
      "The CloudWatch group name for logging. This value is required if `enabled` is true.",
      [],
      false,
      false,
    ),
  ];
}
