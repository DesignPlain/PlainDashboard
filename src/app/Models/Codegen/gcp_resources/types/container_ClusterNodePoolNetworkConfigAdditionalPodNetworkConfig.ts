import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

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
      InputType.Number,
      "maxPodsPerNode",
      "The maximum number of pods per node which use this pod network.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "secondaryPodRange",
      "The name of the secondary range on the subnet which provides IP address for this pod range.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      "The name or self_link of the Google Compute Engine\nsubnetwork in which the cluster's instances are launched.",
      [],
      false,
      true,
    ),
  ];
}
