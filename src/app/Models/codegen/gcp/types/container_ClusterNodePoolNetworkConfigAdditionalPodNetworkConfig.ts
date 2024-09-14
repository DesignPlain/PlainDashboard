import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig {
  // The maximum number of pods per node which use this pod network.
  maxPodsPerNode?: number;

  // The name of the secondary range on the subnet which provides IP address for this pod range.
  secondaryPodRange?: string;

  /*
The name or self_link of the Google Compute Engine
subnetwork in which the cluster's instances are launched.
*/
  subnetwork?: string;
}

export function container_ClusterNodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      "The name or self_link of the Google Compute Engine\nsubnetwork in which the cluster's instances are launched.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxPodsPerNode",
      "The maximum number of pods per node which use this pod network.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "secondaryPodRange",
      "The name of the secondary range on the subnet which provides IP address for this pod range.",
      () => [],
      false,
      true,
    ),
  ];
}
