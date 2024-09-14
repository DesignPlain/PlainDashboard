import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor";

export interface kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration {
  // Enables or disables data processing.
  enabled?: boolean;

  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor>;
}

export function kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables or disables data processing.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "processors",
      "Specifies the data processors as multiple blocks. See `processors` block below for details.",
      () =>
        kinesis_FirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessor_GetTypes(),
      false,
      false,
    ),
  ];
}
