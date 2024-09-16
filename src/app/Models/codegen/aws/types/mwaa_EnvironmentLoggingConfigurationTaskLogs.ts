import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mwaa_EnvironmentLoggingConfigurationTaskLogs {
  //
  cloudWatchLogGroupArn?: string;

  // Enabling or disabling the collection of logs
  enabled?: boolean;

  // Logging level. Valid values: `CRITICAL`, `ERROR`, `WARNING`, `INFO`, `DEBUG`. Will be `INFO` by default.
  logLevel?: string;
}

export function mwaa_EnvironmentLoggingConfigurationTaskLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'logLevel',
      'Logging level. Valid values: `CRITICAL`, `ERROR`, `WARNING`, `INFO`, `DEBUG`. Will be `INFO` by default.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cloudWatchLogGroupArn',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enabling or disabling the collection of logs',
      () => [],
      false,
      false,
    ),
  ];
}
