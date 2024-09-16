import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sql_getDatabaseInstancesInstanceSettingInsightsConfig {
  // Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.
  queryStringLength?: number;

  // True if Query Insights will record application tags from query when enabled.
  recordApplicationTags?: boolean;

  // True if Query Insights will record client address when enabled.
  recordClientAddress?: boolean;

  // True if Query Insights feature is enabled.
  queryInsightsEnabled?: boolean;

  // Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5.
  queryPlansPerMinute?: number;
}

export function sql_getDatabaseInstancesInstanceSettingInsightsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'queryStringLength',
      'Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'recordApplicationTags',
      'True if Query Insights will record application tags from query when enabled.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'recordClientAddress',
      'True if Query Insights will record client address when enabled.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'queryInsightsEnabled',
      'True if Query Insights feature is enabled.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'queryPlansPerMinute',
      'Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5.',
      () => [],
      true,
      false,
    ),
  ];
}
