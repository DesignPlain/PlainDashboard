import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_AttachedClusterLoggingConfigComponentConfig,
  container_AttachedClusterLoggingConfigComponentConfig_GetTypes,
} from "./container_AttachedClusterLoggingConfigComponentConfig";

export interface container_AttachedClusterLoggingConfig {
  /*
The configuration of the logging components
Structure is documented below.
*/
  componentConfig?: container_AttachedClusterLoggingConfigComponentConfig;
}

export function container_AttachedClusterLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "componentConfig",
      "The configuration of the logging components\nStructure is documented below.",
      () => container_AttachedClusterLoggingConfigComponentConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
