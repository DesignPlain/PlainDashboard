import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterIpAllocationPolicyAdditionalPodRangesConfig {
  // Name for pod secondary ipv4 range which has the actual range defined ahead.
  PodRangeNames?: Array<string>;
}

export function Container_getClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PodRangeNames",
      "Name for pod secondary ipv4 range which has the actual range defined ahead.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
