import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor";

export interface kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration {
  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor>;

  // Enables or disables data processing.
  enabled?: boolean;
}

export function kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "processors",
      "Specifies the data processors as multiple blocks. See `processors` block below for details.",
      kinesis_FirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessor_GetTypes(),
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
