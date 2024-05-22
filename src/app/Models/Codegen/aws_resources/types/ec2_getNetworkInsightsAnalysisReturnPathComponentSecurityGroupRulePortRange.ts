import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange {
  //
  from?: number;

  //
  to?: number;
}

export function ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "from", "", [], true, false),
    new DynamicUIProps(InputType.Number, "to", "", [], true, false),
  ];
}
