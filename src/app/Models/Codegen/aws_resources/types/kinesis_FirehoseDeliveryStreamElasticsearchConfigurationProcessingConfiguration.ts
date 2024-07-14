import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor";

export interface kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration {
  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor>;

  // Enables or disables data processing.
  enabled?: boolean;
}

export function kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "processors",
      "Specifies the data processors as multiple blocks. See `processors` block below for details.",
      kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables or disables data processing.",
      [],
      false,
      false,
    ),
  ];
}
