import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_NodePoolNetworkConfigAdditionalPodNetworkConfig {
  // Name of the subnetwork where the additional pod network belongs.
  Subnetwork?: string;

  // The maximum number of pods per node which use this pod network.
  MaxPodsPerNode?: number;

  // The name of the secondary range on the subnet which provides IP address for this pod range.
  SecondaryPodRange?: string;
}

export function Container_NodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      "Name of the subnetwork where the additional pod network belongs.",
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
