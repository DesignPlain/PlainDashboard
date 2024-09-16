import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor_GetTypes,
} from './kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor';

export interface kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration {
  // Enables or disables data processing.
  enabled?: boolean;

  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor>;
}

export function kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enables or disables data processing.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'processors',
      'Specifies the data processors as multiple blocks. See `processors` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor_GetTypes(),
      false,
      false,
    ),
  ];
}
