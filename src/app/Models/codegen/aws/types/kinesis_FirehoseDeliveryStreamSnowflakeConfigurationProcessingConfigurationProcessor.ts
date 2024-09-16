import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorParameter,
  kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorParameter_GetTypes,
} from './kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorParameter';

export interface kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor {
  // Specifies the processor parameters as multiple blocks. See `parameters` block below for details.
  parameters?: Array<kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorParameter>;

  // The type of processor. Valid Values: `RecordDeAggregation`, `Lambda`, `MetadataExtraction`, `AppendDelimiterToRecord`. Validation is done against [AWS SDK constants](https://docs.aws.amazon.com/sdk-for-go/api/service/firehose/#pkg-constants); so that values not explicitly listed may also work.
  type?: string;
}

export function kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of processor. Valid Values: `RecordDeAggregation`, `Lambda`, `MetadataExtraction`, `AppendDelimiterToRecord`. Validation is done against [AWS SDK constants](https://docs.aws.amazon.com/sdk-for-go/api/service/firehose/#pkg-constants); so that values not explicitly listed may also work.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'parameters',
      'Specifies the processor parameters as multiple blocks. See `parameters` block below for details.',
      () =>
        kinesis_FirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
