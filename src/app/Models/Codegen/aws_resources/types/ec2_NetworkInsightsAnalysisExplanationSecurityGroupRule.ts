import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_NetworkInsightsAnalysisExplanationSecurityGroupRulePortRange,
  ec2_NetworkInsightsAnalysisExplanationSecurityGroupRulePortRange_GetTypes,
} from "./ec2_NetworkInsightsAnalysisExplanationSecurityGroupRulePortRange";

export interface ec2_NetworkInsightsAnalysisExplanationSecurityGroupRule {
  //
  cidr?: string;

  //
  direction?: string;

  //
  portRanges?: Array<ec2_NetworkInsightsAnalysisExplanationSecurityGroupRulePortRange>;

  //
  prefixListId?: string;

  //
  protocol?: string;

  //
  securityGroupId?: string;
}

export function ec2_NetworkInsightsAnalysisExplanationSecurityGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "cidr", "", [], false, false),
    new DynamicUIProps(InputType.String, "direction", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      ec2_NetworkInsightsAnalysisExplanationSecurityGroupRulePortRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "prefixListId", "", [], false, false),
    new DynamicUIProps(InputType.String, "protocol", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "securityGroupId",
      "",
      [],
      false,
      false,
    ),
  ];
}
