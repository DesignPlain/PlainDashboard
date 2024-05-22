import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange,
  ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange";

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule {
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

  //
  cidr?: string;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      ec2_getNetworkInsightsAnalysisForwardPathComponentAclRulePortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
    new DynamicUIProps(InputType.String, "ruleAction", "", [], true, false),
    new DynamicUIProps(InputType.Number, "ruleNumber", "", [], true, false),
    new DynamicUIProps(InputType.String, "cidr", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "egress", "", [], true, false),
  ];
}
