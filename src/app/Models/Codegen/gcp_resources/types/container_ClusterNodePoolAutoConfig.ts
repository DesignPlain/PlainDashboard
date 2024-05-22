import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_ClusterNodePoolAutoConfigNetworkTags,
  container_ClusterNodePoolAutoConfigNetworkTags_GetTypes,
} from "./container_ClusterNodePoolAutoConfigNetworkTags";

export interface container_ClusterNodePoolAutoConfig {
  // The network tag config for the cluster's automatically provisioned node pools.
  networkTags?: container_ClusterNodePoolAutoConfigNetworkTags;
}

export function container_ClusterNodePoolAutoConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "networkTags",
      "The network tag config for the cluster's automatically provisioned node pools.",
      container_ClusterNodePoolAutoConfigNetworkTags_GetTypes(),
      false,
      false,
    ),
  ];
}
