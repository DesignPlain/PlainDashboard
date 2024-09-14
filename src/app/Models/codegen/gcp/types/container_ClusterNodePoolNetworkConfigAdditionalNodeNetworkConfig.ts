import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig {
  /*
The name or self_link of the Google Compute Engine
network to which the cluster is connected. For Shared VPC, set this to the self link of the
shared network.
*/
  network?: string;

  /*
The name or self_link of the Google Compute Engine
subnetwork in which the cluster's instances are launched.
*/
  subnetwork?: string;
}

export function container_ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "network",
      "The name or self_link of the Google Compute Engine\nnetwork to which the cluster is connected. For Shared VPC, set this to the self link of the\nshared network.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      "The name or self_link of the Google Compute Engine\nsubnetwork in which the cluster's instances are launched.",
      () => [],
      false,
      true,
    ),
  ];
}
