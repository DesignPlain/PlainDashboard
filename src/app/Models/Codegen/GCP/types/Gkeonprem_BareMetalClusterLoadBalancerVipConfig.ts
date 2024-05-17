import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterLoadBalancerVipConfig {
  // The VIP which you previously set aside for the Kubernetes API of this Bare Metal User Cluster.
  ControlPlaneVip?: string;

  // The VIP which you previously set aside for ingress traffic into this Bare Metal User Cluster.
  IngressVip?: string;
}

export function Gkeonprem_BareMetalClusterLoadBalancerVipConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ControlPlaneVip",
      "The VIP which you previously set aside for the Kubernetes API of this Bare Metal User Cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IngressVip",
      "The VIP which you previously set aside for ingress traffic into this Bare Metal User Cluster.",
      [],
      true,
      false,
    ),
  ];
}
