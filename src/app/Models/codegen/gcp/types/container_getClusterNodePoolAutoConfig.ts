import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_getClusterNodePoolAutoConfigNetworkTag,
  container_getClusterNodePoolAutoConfigNetworkTag_GetTypes,
} from "./container_getClusterNodePoolAutoConfigNetworkTag";

export interface container_getClusterNodePoolAutoConfig {
  // Collection of Compute Engine network tags that can be applied to a node's underlying VM instance.
  networkTags?: Array<container_getClusterNodePoolAutoConfigNetworkTag>;
}

export function container_getClusterNodePoolAutoConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "networkTags",
      "Collection of Compute Engine network tags that can be applied to a node's underlying VM instance.",
      () => container_getClusterNodePoolAutoConfigNetworkTag_GetTypes(),
      true,
      false,
    ),
  ];
}
