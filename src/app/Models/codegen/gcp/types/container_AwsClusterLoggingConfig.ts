import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_AwsClusterLoggingConfigComponentConfig,
  container_AwsClusterLoggingConfigComponentConfig_GetTypes,
} from "./container_AwsClusterLoggingConfigComponentConfig";

export interface container_AwsClusterLoggingConfig {
  // Configuration of the logging components.
  componentConfig?: container_AwsClusterLoggingConfigComponentConfig;
}

export function container_AwsClusterLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "componentConfig",
      "Configuration of the logging components.",
      () => container_AwsClusterLoggingConfigComponentConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
