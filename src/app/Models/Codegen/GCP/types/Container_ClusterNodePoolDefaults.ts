import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNodePoolDefaultsNodeConfigDefaults,
  Container_ClusterNodePoolDefaultsNodeConfigDefaults_GetTypes,
} from "./Container_ClusterNodePoolDefaultsNodeConfigDefaults";

export interface Container_ClusterNodePoolDefaults {
  // Subset of NodeConfig message that has defaults.
  NodeConfigDefaults?: Container_ClusterNodePoolDefaultsNodeConfigDefaults;
}

export function Container_ClusterNodePoolDefaults_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "NodeConfigDefaults",
      "Subset of NodeConfig message that has defaults.",
      Container_ClusterNodePoolDefaultsNodeConfigDefaults_GetTypes(),
      false,
      false,
    ),
  ];
}
