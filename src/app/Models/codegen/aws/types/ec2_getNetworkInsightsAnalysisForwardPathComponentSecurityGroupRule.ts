import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange,
  ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange";

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule {
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

  //
  direction?: string;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "securityGroupId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "cidr", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "direction",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "portRanges",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRulePortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixListId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", () => [], true, false),
  ];
}
