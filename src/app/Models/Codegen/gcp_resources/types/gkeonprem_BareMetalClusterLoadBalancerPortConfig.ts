import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_BareMetalClusterLoadBalancerPortConfig {
  // The port that control plane hosted load balancers will listen on.
  controlPlaneLoadBalancerPort?: number;
}

export function gkeonprem_BareMetalClusterLoadBalancerPortConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "controlPlaneLoadBalancerPort",
      "The port that control plane hosted load balancers will listen on.",
      [],
      true,
      false,
    ),
  ];
}
