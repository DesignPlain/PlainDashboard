import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange,
  ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange";

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule {
  //
  cidr?: string;

  //
  egress?: boolean;

  //
  portRanges?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange>;

  //
  protocol?: string;

  //
  ruleAction?: string;

  //
  ruleNumber?: number;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "cidr", "", () => [], true, false),
    new DynamicUIProps(InputType.Bool, "egress", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "ruleAction",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ruleNumber",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
