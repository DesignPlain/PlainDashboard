import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange,
  ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange";

export interface ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule {
  //
  protocol?: string;

  //
  securityGroupId?: string;

  //
  cidr?: string;

  //
  direction?: string;

  //
  portRanges?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange>;

  //
  prefixListId?: string;
}

export function ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefixListId",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "securityGroupId",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "cidr", "", () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      "direction",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      () =>
        ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange_GetTypes(),
      false,
      false,
    ),
  ];
}
