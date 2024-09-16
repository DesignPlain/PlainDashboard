import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appsync_GraphQLApiLogConfig {
  // Amazon Resource Name of the service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account.
  cloudwatchLogsRoleArn?: string;

  // Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging  level. Valid values: `true`, `false`. Default value: `false`
  excludeVerboseContent?: boolean;

  // Field logging level. Valid values: `ALL`, `ERROR`, `NONE`.
  fieldLogLevel?: string;
}

export function appsync_GraphQLApiLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cloudwatchLogsRoleArn',
      'Amazon Resource Name of the service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'excludeVerboseContent',
      'Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging  level. Valid values: `true`, `false`. Default value: `false`',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fieldLogLevel',
      'Field logging level. Valid values: `ALL`, `ERROR`, `NONE`.',
      () => [],
      true,
      false,
    ),
  ];
}
