import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange,
  ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange";

export interface ec2_getNetworkInsightsAnalysisExplanationAclRule {
  //
  portRanges?: Array<ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange>;

  //
  protocol?: string;

  //
  ruleAction?: string;

  //
  ruleNumber?: number;

  //
  cidr?: string;

  //
  egress?: boolean;
}

export function ec2_getNetworkInsightsAnalysisExplanationAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "ruleAction", "", [], true, false),
    new DynamicUIProps(InputType.Number, "ruleNumber", "", [], true, false),
    new DynamicUIProps(InputType.String, "cidr", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "egress", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
  ];
}
