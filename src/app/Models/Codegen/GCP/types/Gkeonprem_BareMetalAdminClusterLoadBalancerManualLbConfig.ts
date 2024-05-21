import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig {
  // Whether manual load balancing is enabled.
  enabled?: boolean;
}

export function gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether manual load balancing is enabled.",
      [],
      true,
      false,
    ),
  ];
}
