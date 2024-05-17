import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig {
  // The maximum number of pods per node which use this pod network.
  MaxPodsPerNode?: number;

  // The name of the secondary range on the subnet which provides IP address for this pod range.
  SecondaryPodRange?: string;

  // Name of the subnetwork where the additional pod network belongs.
  Subnetwork?: string;
}

export function Container_getClusterNodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxPodsPerNode",
      "The maximum number of pods per node which use this pod network.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecondaryPodRange",
      "The name of the secondary range on the subnet which provides IP address for this pod range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      "Name of the subnetwork where the additional pod network belongs.",
      [],
      true,
      false,
    ),
  ];
}
