import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionSecurityPolicyRuleMatchConfig,
  compute_RegionSecurityPolicyRuleMatchConfig_GetTypes,
} from './compute_RegionSecurityPolicyRuleMatchConfig';

export interface compute_RegionSecurityPolicyRuleMatch {
  /*
The configuration options available when specifying versionedExpr.
This field must be specified if versionedExpr is specified and cannot be specified if versionedExpr is not specified.
Structure is documented below.
*/
  config?: compute_RegionSecurityPolicyRuleMatchConfig;

  /*
Preconfigured versioned expression. If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config.
Possible values are: `SRC_IPS_V1`.
*/
  versionedExpr?: string;
}

export function compute_RegionSecurityPolicyRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'config',
      'The configuration options available when specifying versionedExpr.\nThis field must be specified if versionedExpr is specified and cannot be specified if versionedExpr is not specified.\nStructure is documented below.',
      () => compute_RegionSecurityPolicyRuleMatchConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'versionedExpr',
      'Preconfigured versioned expression. If this field is specified, config must also be specified.\nAvailable preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config.\nPossible values are: `SRC_IPS_V1`.',
      () => [],
      false,
      false,
    ),
  ];
}
