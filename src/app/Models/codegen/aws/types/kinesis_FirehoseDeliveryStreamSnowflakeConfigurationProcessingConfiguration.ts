import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor_GetTypes,
} from './kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor';

export interface kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration {
  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor>;

  // Enables or disables data processing.
  enabled?: boolean;
}

export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'processors',
      'Specifies the data processors as multiple blocks. See `processors` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enables or disables data processing.',
      () => [],
      false,
      false,
    ),
  ];
}
