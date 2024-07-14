import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessor,
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessor_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessor";

export interface kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration {
  // Enables or disables data processing.
  enabled?: boolean;

  // Specifies the data processors as multiple blocks. See `processors` block below for details.
  processors?: Array<kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessor>;
}

export function kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "processors",
      "Specifies the data processors as multiple blocks. See `processors` block below for details.",
      kinesis_FirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessor_GetTypes(),
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
