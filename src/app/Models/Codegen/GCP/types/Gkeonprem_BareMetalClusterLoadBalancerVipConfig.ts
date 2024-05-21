import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_BareMetalClusterLoadBalancerVipConfig {
  // The VIP which you previously set aside for the Kubernetes API of this Bare Metal User Cluster.
  controlPlaneVip?: string;

  // The VIP which you previously set aside for ingress traffic into this Bare Metal User Cluster.
  ingressVip?: string;
}

export function gkeonprem_BareMetalClusterLoadBalancerVipConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "controlPlaneVip",
      "The VIP which you previously set aside for the Kubernetes API of this Bare Metal User Cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ingressVip",
      "The VIP which you previously set aside for ingress traffic into this Bare Metal User Cluster.",
      [],
      true,
      false,
    ),
  ];
}
