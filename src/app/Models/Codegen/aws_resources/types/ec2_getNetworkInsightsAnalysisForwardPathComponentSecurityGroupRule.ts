import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange,
  ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange";

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule {
  //
  direction?: string;

  //
  portRanges?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange>;

  //
  prefixListId?: string;

  //
  protocol?: string;

  //
  securityGroupId?: string;

  //
  cidr?: string;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "direction", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange_GetTypes(),
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
    new DynamicUIProps(InputType.String, "cidr", "", [], true, false),
  ];
}
