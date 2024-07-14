import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  codedeploy_DeploymentGroupLoadBalancerInfoElbInfo,
  codedeploy_DeploymentGroupLoadBalancerInfoElbInfo_GetTypes,
} from "./codedeploy_DeploymentGroupLoadBalancerInfoElbInfo";
import {
  codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupInfo,
  codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupInfo_GetTypes,
} from "./codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupInfo";
import {
  codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfo,
  codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfo_GetTypes,
} from "./codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfo";

export interface codedeploy_DeploymentGroupLoadBalancerInfo {
  // The Classic Elastic Load Balancer to use in a deployment. Conflicts with `target_group_info` and `target_group_pair_info`.
  elbInfos?: Array<codedeploy_DeploymentGroupLoadBalancerInfoElbInfo>;

  // The (Application/Network Load Balancer) target group to use in a deployment. Conflicts with `elb_info` and `target_group_pair_info`.
  targetGroupInfos?: Array<codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupInfo>;

  // The (Application/Network Load Balancer) target group pair to use in a deployment. Conflicts with `elb_info` and `target_group_info`.
  targetGroupPairInfo?: codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfo;
}

export function codedeploy_DeploymentGroupLoadBalancerInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "elbInfos",
      "The Classic Elastic Load Balancer to use in a deployment. Conflicts with `target_group_info` and `target_group_pair_info`.",
      codedeploy_DeploymentGroupLoadBalancerInfoElbInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetGroupInfos",
      "The (Application/Network Load Balancer) target group to use in a deployment. Conflicts with `elb_info` and `target_group_pair_info`.",
      codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "targetGroupPairInfo",
      "The (Application/Network Load Balancer) target group pair to use in a deployment. Conflicts with `elb_info` and `target_group_info`.",
      codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
