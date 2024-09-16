import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions {
  // The CloudWatch group name for logging. This value is required if `enabled` is true.
  logGroupName?: string;

  // The CloudWatch log stream name for logging. This value is required if `enabled` is true.
  logStreamName?: string;

  // Enables or disables the logging. Defaults to `false`.
  enabled?: boolean;
}

export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'logGroupName',
      'The CloudWatch group name for logging. This value is required if `enabled` is true.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logStreamName',
      'The CloudWatch log stream name for logging. This value is required if `enabled` is true.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enables or disables the logging. Defaults to `false`.',
      () => [],
      false,
      false,
    ),
  ];
}
