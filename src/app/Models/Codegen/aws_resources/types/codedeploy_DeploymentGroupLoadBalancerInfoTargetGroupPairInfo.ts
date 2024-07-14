import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute,
  codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute_GetTypes,
} from "./codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute";
import {
  codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup,
  codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup_GetTypes,
} from "./codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup";
import {
  codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute,
  codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute_GetTypes,
} from "./codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute";

export interface codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfo {
  // Configuration block for the production traffic route (documented below).
  prodTrafficRoute?: codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;

  // Configuration blocks for a target group within a target group pair (documented below).
  targetGroups?: Array<codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup>;

  // Configuration block for the test traffic route (documented below).
  testTrafficRoute?: codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
}

export function codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "prodTrafficRoute",
      "Configuration block for the production traffic route (documented below).",
      codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetGroups",
      "Configuration blocks for a target group within a target group pair (documented below).",
      codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "testTrafficRoute",
      "Configuration block for the test traffic route (documented below).",
      codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute_GetTypes(),
      false,
      false,
    ),
  ];
}
