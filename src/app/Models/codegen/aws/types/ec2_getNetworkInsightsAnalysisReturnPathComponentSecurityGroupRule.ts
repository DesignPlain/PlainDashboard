import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange,
  ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange_GetTypes,
} from './ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange';

export interface ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule {
  //
  portRanges?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange>;

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

export function ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'prefixListId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'protocol', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'securityGroupId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'cidr', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'direction',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'portRanges',
      '',
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRulePortRange_GetTypes(),
      true,
      false,
    ),
  ];
}
