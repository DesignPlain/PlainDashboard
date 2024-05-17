import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AttachedClusterLoggingConfigComponentConfig,
  Container_AttachedClusterLoggingConfigComponentConfig_GetTypes,
} from "./Container_AttachedClusterLoggingConfigComponentConfig";

export interface Container_AttachedClusterLoggingConfig {
  /*
The configuration of the logging components
Structure is documented below.
*/
  ComponentConfig?: Container_AttachedClusterLoggingConfigComponentConfig;
}

export function Container_AttachedClusterLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ComponentConfig",
      "The configuration of the logging components\nStructure is documented below.",
      Container_AttachedClusterLoggingConfigComponentConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
