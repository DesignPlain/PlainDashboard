import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codedeploy_DeploymentGroupEc2TagSetEc2TagFilter,
  codedeploy_DeploymentGroupEc2TagSetEc2TagFilter_GetTypes,
} from "./codedeploy_DeploymentGroupEc2TagSetEc2TagFilter";

export interface codedeploy_DeploymentGroupEc2TagSet {
  // Tag filters associated with the deployment group. See the AWS docs for details.
  ec2TagFilters?: Array<codedeploy_DeploymentGroupEc2TagSetEc2TagFilter>;
}

export function codedeploy_DeploymentGroupEc2TagSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ec2TagFilters",
      "Tag filters associated with the deployment group. See the AWS docs for details.",
      codedeploy_DeploymentGroupEc2TagSetEc2TagFilter_GetTypes(),
      false,
      false,
    ),
  ];
}
