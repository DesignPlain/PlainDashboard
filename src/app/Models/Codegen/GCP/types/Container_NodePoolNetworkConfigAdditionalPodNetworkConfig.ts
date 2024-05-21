import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_NodePoolNetworkConfigAdditionalPodNetworkConfig {
  // The maximum number of pods per node which use this pod network.
  maxPodsPerNode?: number;

  // The name of the secondary range on the subnet which provides IP address for this pod range.
  secondaryPodRange?: string;

  // Name of the subnetwork where the additional pod network belongs.
  subnetwork?: string;
}

export function container_NodePoolNetworkConfigAdditionalPodNetworkConfig_GetTypes(): DynamicUIProps[] {
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
      "Name of the subnetwork where the additional pod network belongs.",
      [],
      false,
      true,
    ),
  ];
}
