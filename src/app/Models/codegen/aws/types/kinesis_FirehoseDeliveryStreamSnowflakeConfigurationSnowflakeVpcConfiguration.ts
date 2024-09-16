import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration {
  // The VPCE ID for Firehose to privately connect with Snowflake.
  privateLinkVpceId?: string;
}

export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'privateLinkVpceId',
      'The VPCE ID for Firehose to privately connect with Snowflake.',
      () => [],
      true,
      false,
    ),
  ];
}
