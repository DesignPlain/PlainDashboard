import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface globalaccelerator_AcceleratorAttributes {
  // Indicates whether flow logs are enabled. Defaults to `false`. Valid values: `true`, `false`.
  flowLogsEnabled?: boolean;

  // The name of the Amazon S3 bucket for the flow logs. Required if `flow_logs_enabled` is `true`.
  flowLogsS3Bucket?: string;

  // The prefix for the location in the Amazon S3 bucket for the flow logs. Required if `flow_logs_enabled` is `true`.
  flowLogsS3Prefix?: string;
}

export function globalaccelerator_AcceleratorAttributes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'flowLogsEnabled',
      'Indicates whether flow logs are enabled. Defaults to `false`. Valid values: `true`, `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'flowLogsS3Bucket',
      'The name of the Amazon S3 bucket for the flow logs. Required if `flow_logs_enabled` is `true`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'flowLogsS3Prefix',
      'The prefix for the location in the Amazon S3 bucket for the flow logs. Required if `flow_logs_enabled` is `true`.',
      () => [],
      false,
      false,
    ),
  ];
}
