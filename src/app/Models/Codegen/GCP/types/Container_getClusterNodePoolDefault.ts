import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodePoolDefaultNodeConfigDefault,
  Container_getClusterNodePoolDefaultNodeConfigDefault_GetTypes,
} from "./Container_getClusterNodePoolDefaultNodeConfigDefault";

export interface Container_getClusterNodePoolDefault {
  // Subset of NodeConfig message that has defaults.
  NodeConfigDefaults?: Array<Container_getClusterNodePoolDefaultNodeConfigDefault>;
}

export function Container_getClusterNodePoolDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NodeConfigDefaults",
      "Subset of NodeConfig message that has defaults.",
      Container_getClusterNodePoolDefaultNodeConfigDefault_GetTypes(),
      true,
      false,
    ),
  ];
}
