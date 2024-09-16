import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig,
  wafv2_RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig_GetTypes,
} from './wafv2_RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig';

export interface wafv2_RuleGroupRuleStatementGeoMatchStatement {
  // An array of two-character country codes, for example, [ "US", "CN" ], from the alpha-2 country ISO codes of the `ISO 3166` international standard. See the [documentation](https://docs.aws.amazon.com/waf/latest/APIReference/API_GeoMatchStatement.html) for valid values.
  countryCodes?: Array<string>;

  // The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. See Forwarded IP Config below for details.
  forwardedIpConfig?: wafv2_RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig;
}

export function wafv2_RuleGroupRuleStatementGeoMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'countryCodes',
      'An array of two-character country codes, for example, [ "US", "CN" ], from the alpha-2 country ISO codes of the `ISO 3166` international standard. See the [documentation](https://docs.aws.amazon.com/waf/latest/APIReference/API_GeoMatchStatement.html) for valid values.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'forwardedIpConfig',
      "The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. See Forwarded IP Config below for details.",
      () =>
        wafv2_RuleGroupRuleStatementGeoMatchStatementForwardedIpConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
