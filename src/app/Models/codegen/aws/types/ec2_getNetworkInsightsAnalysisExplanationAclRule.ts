import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange,
  ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange_GetTypes,
} from './ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange';

export interface ec2_getNetworkInsightsAnalysisExplanationAclRule {
  //
  ruleNumber?: number;

  //
  cidr?: string;

  //
  egress?: boolean;

  //
  portRanges?: Array<ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange>;

  //
  protocol?: string;

  //
  ruleAction?: string;
}

export function ec2_getNetworkInsightsAnalysisExplanationAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ruleAction',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ruleNumber',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'cidr', '', () => [], true, false),
    new DynamicUIProps(InputType.Bool, 'egress', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'portRanges',
      '',
      () =>
        ec2_getNetworkInsightsAnalysisExplanationAclRulePortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'protocol', '', () => [], true, false),
  ];
}
