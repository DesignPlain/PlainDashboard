import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterNodePoolDefaultsNodeConfigDefaults,
  container_ClusterNodePoolDefaultsNodeConfigDefaults_GetTypes,
} from "./container_ClusterNodePoolDefaultsNodeConfigDefaults";

export interface container_ClusterNodePoolDefaults {
  // Subset of NodeConfig message that has defaults.
  nodeConfigDefaults?: container_ClusterNodePoolDefaultsNodeConfigDefaults;
}

export function container_ClusterNodePoolDefaults_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "nodeConfigDefaults",
      "Subset of NodeConfig message that has defaults.",
      container_ClusterNodePoolDefaultsNodeConfigDefaults_GetTypes(),
      false,
      false,
    ),
  ];
}
