import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorParameter,
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorParameter_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorParameter";

export interface kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor {
  // Specifies the processor parameters as multiple blocks. See `parameters` block below for details.
  parameters?: Array<kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorParameter>;

  // The type of processor. Valid Values: `RecordDeAggregation`, `Lambda`, `MetadataExtraction`, `AppendDelimiterToRecord`. Validation is done against [AWS SDK constants](https://docs.aws.amazon.com/sdk-for-go/api/service/firehose/#pkg-constants); so that values not explicitly listed may also work.
  type?: string;
}

export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "Specifies the processor parameters as multiple blocks. See `parameters` block below for details.",
      kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of processor. Valid Values: `RecordDeAggregation`, `Lambda`, `MetadataExtraction`, `AppendDelimiterToRecord`. Validation is done against [AWS SDK constants](https://docs.aws.amazon.com/sdk-for-go/api/service/firehose/#pkg-constants); so that values not explicitly listed may also work.",
      [],
      true,
      false,
    ),
  ];
}
