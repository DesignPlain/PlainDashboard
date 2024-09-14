import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange,
  ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange";

export interface ec2_NetworkInsightsAnalysisReturnPathComponentAclRule {
  //
  portRanges?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange>;

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

export function ec2_NetworkInsightsAnalysisReturnPathComponentAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "cidr", "", () => [], false, false),
    new DynamicUIProps(InputType.Bool, "egress", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      () =>
        ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange_GetTypes(),
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
    new DynamicUIProps(
      InputType.Number,
      "ruleNumber",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
