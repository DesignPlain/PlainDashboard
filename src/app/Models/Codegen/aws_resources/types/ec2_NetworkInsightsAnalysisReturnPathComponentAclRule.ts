import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange,
  ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange";

export interface ec2_NetworkInsightsAnalysisReturnPathComponentAclRule {
  //
  ruleNumber?: number;

  //
  cidr?: string;

  //
  egress?: boolean;

  //
  portRanges?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange>;

  //
  protocol?: string;

  //
  ruleAction?: string;
}

export function ec2_NetworkInsightsAnalysisReturnPathComponentAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "cidr", "", [], false, false),
    new DynamicUIProps(InputType.Bool, "egress", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentAclRulePortRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", [], false, false),
    new DynamicUIProps(InputType.String, "ruleAction", "", [], false, false),
    new DynamicUIProps(InputType.Number, "ruleNumber", "", [], false, false),
  ];
}
