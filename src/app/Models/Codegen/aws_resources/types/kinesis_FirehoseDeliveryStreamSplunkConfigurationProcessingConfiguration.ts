import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor";

export interface kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration {
  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor>;

  // Enables or disables data processing.
  enabled?: boolean;
}

export function kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "processors",
      "Specifies the data processors as multiple blocks. See `processors` block below for details.",
      kinesis_FirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessor_GetTypes(),
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
