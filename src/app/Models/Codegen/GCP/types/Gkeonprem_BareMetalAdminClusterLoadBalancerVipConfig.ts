import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig {
  // The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster.
  ControlPlaneVip?: string;
}

export function Gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ControlPlaneVip",
      "The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster.",
      [],
      true,
      false,
    ),
  ];
}
