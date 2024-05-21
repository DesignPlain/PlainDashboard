import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterIpAllocationPolicyAdditionalPodRangesConfig {
  // The names of the Pod ranges to add to the cluster.
  podRangeNames?: Array<string>;
}

export function container_ClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "podRangeNames",
      "The names of the Pod ranges to add to the cluster.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
