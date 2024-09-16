import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_NetworkInsightsAnalysisExplanationAclRulePortRange {
  //
  to?: number;

  //
  from?: number;
}

export function ec2_NetworkInsightsAnalysisExplanationAclRulePortRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'to', '', () => [], false, false),
    new DynamicUIProps(InputType.Number, 'from', '', () => [], false, false),
  ];
}
