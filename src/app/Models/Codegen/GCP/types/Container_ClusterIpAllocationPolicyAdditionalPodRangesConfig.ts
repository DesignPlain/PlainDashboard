import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterIpAllocationPolicyAdditionalPodRangesConfig {
  // The names of the Pod ranges to add to the cluster.
  PodRangeNames?: Array<string>;
}

export function Container_ClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PodRangeNames",
      "The names of the Pod ranges to add to the cluster.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
