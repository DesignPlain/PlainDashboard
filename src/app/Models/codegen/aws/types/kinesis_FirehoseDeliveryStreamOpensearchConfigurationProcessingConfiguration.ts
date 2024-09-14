import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor";

export interface kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration {
  // Enables or disables data processing.
  enabled?: boolean;

  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor>;
}

export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
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
        kinesis_FirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessor_GetTypes(),
      false,
      false,
    ),
  ];
}
