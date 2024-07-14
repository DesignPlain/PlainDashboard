import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_getClusterNodePoolDefaultNodeConfigDefault,
  container_getClusterNodePoolDefaultNodeConfigDefault_GetTypes,
} from "./container_getClusterNodePoolDefaultNodeConfigDefault";

export interface container_getClusterNodePoolDefault {
  // Subset of NodeConfig message that has defaults.
  nodeConfigDefaults?: Array<container_getClusterNodePoolDefaultNodeConfigDefault>;
}

export function container_getClusterNodePoolDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nodeConfigDefaults",
      "Subset of NodeConfig message that has defaults.",
      container_getClusterNodePoolDefaultNodeConfigDefault_GetTypes(),
      true,
      false,
    ),
  ];
}
