import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
  // List of Amazon Resource Names (ARNs) of the load balancer listeners.
  listenerArns?: Array<string>;
}

export function codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "listenerArns",
      "List of Amazon Resource Names (ARNs) of the load balancer listeners.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
