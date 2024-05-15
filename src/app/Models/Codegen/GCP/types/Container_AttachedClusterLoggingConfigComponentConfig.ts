import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AttachedClusterLoggingConfigComponentConfig {
  /*
The components to be enabled.
Each value may be one of: `SYSTEM_COMPONENTS`, `WORKLOADS`.
*/
  EnableComponents?: Array<string>;
}

export function Container_AttachedClusterLoggingConfigComponentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "EnableComponents",
      "The components to be enabled.\nEach value may be one of: `SYSTEM_COMPONENTS`, `WORKLOADS`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
