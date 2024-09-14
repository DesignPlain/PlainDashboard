import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kinesis_FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions {
  // Enables or disables the logging. Defaults to `false`.
  enabled?: boolean;

  // The CloudWatch group name for logging. This value is required if `enabled` is true.
  logGroupName?: string;

  // The CloudWatch log stream name for logging. This value is required if `enabled` is true.
  logStreamName?: string;
}

export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables or disables the logging. Defaults to `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logGroupName",
      "The CloudWatch group name for logging. This value is required if `enabled` is true.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logStreamName",
      "The CloudWatch log stream name for logging. This value is required if `enabled` is true.",
      () => [],
      false,
      false,
    ),
  ];
}
