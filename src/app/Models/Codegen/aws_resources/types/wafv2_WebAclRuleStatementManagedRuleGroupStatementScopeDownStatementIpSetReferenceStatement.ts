import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig_GetTypes,
} from "./wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig";

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement {
  // The Amazon Resource Name (ARN) of the IP Set that this statement references.
  arn?: string;

  // Configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. See `ip_set_forwarded_ip_config` below for more details.
  ipSetForwardedIpConfig?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the IP Set that this statement references.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ipSetForwardedIpConfig",
      "Configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. See `ip_set_forwarded_ip_config` below for more details.",
      wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementIpSetForwardedIpConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
