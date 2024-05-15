import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AwsClusterLoggingConfigComponentConfig,
  Container_AwsClusterLoggingConfigComponentConfig_GetTypes,
} from "./Container_AwsClusterLoggingConfigComponentConfig";

export interface Container_AwsClusterLoggingConfig {
  // Configuration of the logging components.
  ComponentConfig?: Container_AwsClusterLoggingConfigComponentConfig;
}

export function Container_AwsClusterLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ComponentConfig",
      "Configuration of the logging components.",
      Container_AwsClusterLoggingConfigComponentConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
