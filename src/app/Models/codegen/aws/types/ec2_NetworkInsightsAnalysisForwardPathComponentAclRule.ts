import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentAclRulePortRange,
  ec2_NetworkInsightsAnalysisForwardPathComponentAclRulePortRange_GetTypes,
} from './ec2_NetworkInsightsAnalysisForwardPathComponentAclRulePortRange';

export interface ec2_NetworkInsightsAnalysisForwardPathComponentAclRule {
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

  //
  portRanges?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentAclRulePortRange>;
}

export function ec2_NetworkInsightsAnalysisForwardPathComponentAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'protocol',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ruleAction',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ruleNumber',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'cidr', '', () => [], false, false),
    new DynamicUIProps(InputType.Bool, 'egress', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Array,
      'portRanges',
      '',
      () =>
        ec2_NetworkInsightsAnalysisForwardPathComponentAclRulePortRange_GetTypes(),
      false,
      false,
    ),
  ];
}
