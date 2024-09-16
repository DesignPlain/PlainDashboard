import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessor_GetTypes,
} from './kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessor';

export interface kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration {
  // Enables or disables data processing.
  enabled?: boolean;

  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessor>;
}

export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
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
        kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessor_GetTypes(),
      false,
      false,
    ),
  ];
}
