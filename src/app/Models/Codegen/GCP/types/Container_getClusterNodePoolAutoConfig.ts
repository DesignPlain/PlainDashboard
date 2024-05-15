import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodePoolAutoConfigNetworkTag,
  Container_getClusterNodePoolAutoConfigNetworkTag_GetTypes,
} from "./Container_getClusterNodePoolAutoConfigNetworkTag";

export interface Container_getClusterNodePoolAutoConfig {
  // Collection of Compute Engine network tags that can be applied to a node's underlying VM instance.
  NetworkTags?: Array<Container_getClusterNodePoolAutoConfigNetworkTag>;
}

export function Container_getClusterNodePoolAutoConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NetworkTags",
      "Collection of Compute Engine network tags that can be applied to a node's underlying VM instance.",
      Container_getClusterNodePoolAutoConfigNetworkTag_GetTypes(),
      true,
      false,
    ),
  ];
}
