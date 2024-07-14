import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange,
  ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange";

export interface ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule {
  //
  protocol?: string;

  //
  securityGroupId?: string;

  //
  cidr?: string;

  //
  direction?: string;

  //
  portRanges?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange>;

  //
  prefixListId?: string;
}

export function ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "securityGroupId",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "cidr", "", [], false, false),
    new DynamicUIProps(InputType.String, "direction", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "prefixListId", "", [], false, false),
    new DynamicUIProps(InputType.String, "protocol", "", [], false, false),
  ];
}
