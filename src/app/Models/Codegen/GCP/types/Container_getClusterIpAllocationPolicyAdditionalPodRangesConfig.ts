import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterIpAllocationPolicyAdditionalPodRangesConfig {
  // Name for pod secondary ipv4 range which has the actual range defined ahead.
  podRangeNames?: Array<string>;
}

export function container_getClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "podRangeNames",
      "Name for pod secondary ipv4 range which has the actual range defined ahead.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
