import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig {
  // Whether or not GCFS is enabled
  Enabled?: boolean;
}

export function Container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether or not GCFS is enabled",
      [],
      true,
      false,
    ),
  ];
}
