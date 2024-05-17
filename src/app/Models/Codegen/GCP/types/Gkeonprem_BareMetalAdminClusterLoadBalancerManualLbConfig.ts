import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig {
  // Whether manual load balancing is enabled.
  Enabled?: boolean;
}

export function Gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether manual load balancing is enabled.",
      [],
      true,
      false,
    ),
  ];
}
