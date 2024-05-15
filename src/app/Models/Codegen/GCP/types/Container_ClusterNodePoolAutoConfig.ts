import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNodePoolAutoConfigNetworkTags,
  Container_ClusterNodePoolAutoConfigNetworkTags_GetTypes,
} from "./Container_ClusterNodePoolAutoConfigNetworkTags";

export interface Container_ClusterNodePoolAutoConfig {
  // The network tag config for the cluster's automatically provisioned node pools.
  NetworkTags?: Container_ClusterNodePoolAutoConfigNetworkTags;
}

export function Container_ClusterNodePoolAutoConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "NetworkTags",
      "The network tag config for the cluster's automatically provisioned node pools.",
      Container_ClusterNodePoolAutoConfigNetworkTags_GetTypes(),
      false,
      false,
    ),
  ];
}
