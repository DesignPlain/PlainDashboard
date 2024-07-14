import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_NetworkInsightsAnalysisExplanationAclRulePortRange {
  //
  from?: number;

  //
  to?: number;
}

export function ec2_NetworkInsightsAnalysisExplanationAclRulePortRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "to", "", [], false, false),
    new DynamicUIProps(InputType.Number, "from", "", [], false, false),
  ];
}
