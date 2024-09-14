import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_NetworkInsightsAnalysisExplanationAclRulePortRange,
  ec2_NetworkInsightsAnalysisExplanationAclRulePortRange_GetTypes,
} from "./ec2_NetworkInsightsAnalysisExplanationAclRulePortRange";

export interface ec2_NetworkInsightsAnalysisExplanationAclRule {
  //
  ruleNumber?: number;

  //
  cidr?: string;

  //
  egress?: boolean;

  //
  portRanges?: Array<ec2_NetworkInsightsAnalysisExplanationAclRulePortRange>;

  //
  protocol?: string;

  //
  ruleAction?: string;
}

export function ec2_NetworkInsightsAnalysisExplanationAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ruleNumber",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "cidr", "", () => [], false, false),
    new DynamicUIProps(InputType.Bool, "egress", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      () => ec2_NetworkInsightsAnalysisExplanationAclRulePortRange_GetTypes(),
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
      "ruleAction",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
