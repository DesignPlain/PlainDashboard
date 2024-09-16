import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig';

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement {
  // The Amazon Resource Name (ARN) of the IP Set that this statement references.
  arn?: string;

  // Configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. See `ip_set_forwarded_ip_config` below for more details.
  ipSetForwardedIpConfig?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arn',
      'The Amazon Resource Name (ARN) of the IP Set that this statement references.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ipSetForwardedIpConfig',
      "Configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. See `ip_set_forwarded_ip_config` below for more details.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
