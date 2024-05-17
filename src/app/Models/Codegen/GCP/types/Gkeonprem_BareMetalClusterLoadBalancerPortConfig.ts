import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterLoadBalancerPortConfig {
  // The port that control plane hosted load balancers will listen on.
  ControlPlaneLoadBalancerPort?: number;
}

export function Gkeonprem_BareMetalClusterLoadBalancerPortConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ControlPlaneLoadBalancerPort",
      "The port that control plane hosted load balancers will listen on.",
      [],
      true,
      false,
    ),
  ];
}
