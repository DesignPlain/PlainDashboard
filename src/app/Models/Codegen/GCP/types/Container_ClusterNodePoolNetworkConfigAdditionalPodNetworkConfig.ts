import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig {
  // The maximum number of pods per node which use this pod network.
  MaxPodsPerNode?: number;

  // The name of the secondary range on the subnet which provides IP address for this pod range.
  SecondaryPodRange?: string;

  /*
The name or self_link of the Google Compute Engine
subnetwork in which the cluster's instances are launched.
*/
  Subnetwork?: string;
}

export function Container_ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(): DynamicUIProps[] {
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
      InputType.Number,
      "MaxPodsPerNode",
      "The maximum number of pods per node which use this pod network.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecondaryPodRange",
      "The name of the secondary range on the subnet which provides IP address for this pod range.",
      [],
      false,
      true,
    ),
  ];
}
