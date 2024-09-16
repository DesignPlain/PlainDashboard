import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessor_GetTypes,
} from './kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessor';

export interface kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration {
  // Enables or disables data processing.
  enabled?: boolean;

  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessor>;
}

export function kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
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
        kinesis_FirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessor_GetTypes(),
      false,
      false,
    ),
  ];
}
