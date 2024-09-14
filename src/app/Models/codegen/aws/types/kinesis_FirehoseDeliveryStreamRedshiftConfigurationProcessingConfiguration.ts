import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor";

export interface kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration {
  // Enables or disables data processing.
  enabled?: boolean;

  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor>;
}

export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
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
        kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor_GetTypes(),
      false,
      false,
    ),
  ];
}
