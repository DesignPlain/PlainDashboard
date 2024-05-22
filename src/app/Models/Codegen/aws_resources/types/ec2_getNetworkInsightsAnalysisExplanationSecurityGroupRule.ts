import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange,
  ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange";

export interface ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRule {
  //
  portRanges?: Array<ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange>;

  //
  prefixListId?: string;

  //
  protocol?: string;

  //
  securityGroupId?: string;

  //
  cidr?: string;

  //
  direction?: string;
}

export function ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "cidr", "", [], true, false),
    new DynamicUIProps(InputType.String, "direction", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      ec2_getNetworkInsightsAnalysisExplanationSecurityGroupRulePortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "prefixListId", "", [], true, false),
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "securityGroupId",
      "",
      [],
      true,
      false,
    ),
  ];
}
