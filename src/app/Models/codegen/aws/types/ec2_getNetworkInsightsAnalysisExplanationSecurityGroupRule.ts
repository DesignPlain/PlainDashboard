import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange,
  ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange";

export interface ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRule {
  //
  securityGroupId?: string;

  //
  cidr?: string;

  //
  direction?: string;

  //
  portRanges?: Array<ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange>;

  //
  prefixListId?: string;

  //
  protocol?: string;
}

export function ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "direction",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixListId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "securityGroupId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "cidr", "", () => [], true, false),
  ];
}
