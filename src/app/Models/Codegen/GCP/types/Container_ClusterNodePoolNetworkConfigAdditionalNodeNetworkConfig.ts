import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig {
  /*
The name or self_link of the Google Compute Engine
network to which the cluster is connected. For Shared VPC, set this to the self link of the
shared network.
*/
  Network?: string;

  /*
The name or self_link of the Google Compute Engine
subnetwork in which the cluster's instances are launched.
*/
  Subnetwork?: string;
}

export function Container_ClusterNodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      "The name or self_link of the Google Compute Engine\nsubnetwork in which the cluster's instances are launched.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      "The name or self_link of the Google Compute Engine\nnetwork to which the cluster is connected. For Shared VPC, set this to the self link of the\nshared network.",
      [],
      false,
      true,
    ),
  ];
}
