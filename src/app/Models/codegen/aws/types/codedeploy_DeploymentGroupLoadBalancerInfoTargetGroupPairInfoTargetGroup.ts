import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup {
  // Name of the target group.
  name?: string;
}

export function codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the target group.",
      () => [],
      true,
      false,
    ),
  ];
}
