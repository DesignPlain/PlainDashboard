import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AzureClusterLoggingConfigComponentConfig,
  Container_AzureClusterLoggingConfigComponentConfig_GetTypes,
} from "./Container_AzureClusterLoggingConfigComponentConfig";

export interface Container_AzureClusterLoggingConfig {
  // Configuration of the logging components.
  ComponentConfig?: Container_AzureClusterLoggingConfigComponentConfig;
}

export function Container_AzureClusterLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ComponentConfig",
      "Configuration of the logging components.",
      Container_AzureClusterLoggingConfigComponentConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
