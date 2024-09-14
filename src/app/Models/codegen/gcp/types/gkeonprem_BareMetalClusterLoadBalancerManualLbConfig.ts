import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkeonprem_BareMetalClusterLoadBalancerManualLbConfig {
  // Whether manual load balancing is enabled.
  enabled?: boolean;
}

export function gkeonprem_BareMetalClusterLoadBalancerManualLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether manual load balancing is enabled.",
      () => [],
      true,
      false,
    ),
  ];
}
