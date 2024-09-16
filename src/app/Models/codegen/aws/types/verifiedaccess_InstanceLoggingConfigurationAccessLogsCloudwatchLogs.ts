import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedaccess_InstanceLoggingConfigurationAccessLogsCloudwatchLogs {
  // Indicates whether logging is enabled.
  enabled?: boolean;

  // The name of the CloudWatch Logs Log Group.
  logGroup?: string;
}

export function verifiedaccess_InstanceLoggingConfigurationAccessLogsCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Indicates whether logging is enabled.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logGroup',
      'The name of the CloudWatch Logs Log Group.',
      () => [],
      false,
      false,
    ),
  ];
}
