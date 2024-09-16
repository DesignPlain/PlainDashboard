import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration {
  // The Snowflake role.
  snowflakeRole?: string;

  // Whether the Snowflake role is enabled.
  enabled?: boolean;
}

export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'snowflakeRole',
      'The Snowflake role.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether the Snowflake role is enabled.',
      () => [],
      false,
      false,
    ),
  ];
}
