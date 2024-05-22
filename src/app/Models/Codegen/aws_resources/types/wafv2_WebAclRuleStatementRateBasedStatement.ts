import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKey,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKey_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementCustomKey";
import {
  wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig,
  wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement";

export interface wafv2_WebAclRuleStatementRateBasedStatement {
  // Setting that indicates how to aggregate the request counts. Valid values include: `CONSTANT`, `CUSTOM_KEYS`, `FORWARDED_IP`, or `IP`. Default: `IP`.
  aggregateKeyType?: string;

  // Aggregate the request counts using one or more web request components as the aggregate keys. See `custom_key` below for details.
  customKeys?: Array<wafv2_WebAclRuleStatementRateBasedStatementCustomKey>;

  // Configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. If `aggregate_key_type` is set to `FORWARDED_IP`, this block is required. See `forwarded_ip_config` below for details.
  forwardedIpConfig?: wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig;

  // Limit on requests per 5-minute period for a single originating IP address.
  limit?: number;

  // Optional nested statement that narrows the scope of the rate-based statement to matching web requests. This can be any nestable statement, and you can nest statements at any level below this scope-down statement. See `statement` above for details. If `aggregate_key_type` is set to `CONSTANT`, this block is required.
  scopeDownStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement;
}

export function wafv2_WebAclRuleStatementRateBasedStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "forwardedIpConfig",
      "Configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. If `aggregate_key_type` is set to `FORWARDED_IP`, this block is required. See `forwarded_ip_config` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "limit",
      "Limit on requests per 5-minute period for a single originating IP address.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scopeDownStatement",
      "Optional nested statement that narrows the scope of the rate-based statement to matching web requests. This can be any nestable statement, and you can nest statements at any level below this scope-down statement. See `statement` above for details. If `aggregate_key_type` is set to `CONSTANT`, this block is required.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "aggregateKeyType",
      "Setting that indicates how to aggregate the request counts. Valid values include: `CONSTANT`, `CUSTOM_KEYS`, `FORWARDED_IP`, or `IP`. Default: `IP`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customKeys",
      "Aggregate the request counts using one or more web request components as the aggregate keys. See `custom_key` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementCustomKey_GetTypes(),
      false,
      false,
    ),
  ];
}
