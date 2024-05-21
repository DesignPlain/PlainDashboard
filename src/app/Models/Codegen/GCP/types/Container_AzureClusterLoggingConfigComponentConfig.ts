import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_AzureClusterLoggingConfigComponentConfig {
  // Components of the logging configuration to be enabled.
  enableComponents?: Array<string>;
}

export function container_AzureClusterLoggingConfigComponentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "enableComponents",
      "Components of the logging configuration to be enabled.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
