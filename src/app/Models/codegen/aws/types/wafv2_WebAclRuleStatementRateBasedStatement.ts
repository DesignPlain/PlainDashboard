import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement";
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKey,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKey_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementCustomKey";
import {
  wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig,
  wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig";

export interface wafv2_WebAclRuleStatementRateBasedStatement {
  // Limit on requests per 5-minute period for a single originating IP address.
  limit?: number;

  // Optional nested statement that narrows the scope of the rate-based statement to matching web requests. This can be any nestable statement, and you can nest statements at any level below this scope-down statement. See `statement` above for details. If `aggregate_key_type` is set to `CONSTANT`, this block is required.
  scopeDownStatement?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement;

  // Setting that indicates how to aggregate the request counts. Valid values include: `CONSTANT`, `CUSTOM_KEYS`, `FORWARDED_IP`, or `IP`. Default: `IP`.
  aggregateKeyType?: string;

  // Aggregate the request counts using one or more web request components as the aggregate keys. See `custom_key` below for details.
  customKeys?: Array<wafv2_WebAclRuleStatementRateBasedStatementCustomKey>;

  /*
The amount of time, in seconds, that AWS WAF should include in its request counts, looking back from the current time. Valid values are `60`, `120`, `300`, and `600`. Defaults to `300` (5 minutes).

--NOTE:-- This setting doesn't determine how often AWS WAF checks the rate, but how far back it looks each time it checks. AWS WAF checks the rate about every 10 seconds.
*/
  evaluationWindowSec?: number;

  // Configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. If `aggregate_key_type` is set to `FORWARDED_IP`, this block is required. See `forwarded_ip_config` below for details.
  forwardedIpConfig?: wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig;
}

export function wafv2_WebAclRuleStatementRateBasedStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "limit",
      "Limit on requests per 5-minute period for a single originating IP address.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scopeDownStatement",
      "Optional nested statement that narrows the scope of the rate-based statement to matching web requests. This can be any nestable statement, and you can nest statements at any level below this scope-down statement. See `statement` above for details. If `aggregate_key_type` is set to `CONSTANT`, this block is required.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "aggregateKeyType",
      "Setting that indicates how to aggregate the request counts. Valid values include: `CONSTANT`, `CUSTOM_KEYS`, `FORWARDED_IP`, or `IP`. Default: `IP`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customKeys",
      "Aggregate the request counts using one or more web request components as the aggregate keys. See `custom_key` below for details.",
      () => wafv2_WebAclRuleStatementRateBasedStatementCustomKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "evaluationWindowSec",
      "The amount of time, in seconds, that AWS WAF should include in its request counts, looking back from the current time. Valid values are `60`, `120`, `300`, and `600`. Defaults to `300` (5 minutes).\n\n**NOTE:** This setting doesn't determine how often AWS WAF checks the rate, but how far back it looks each time it checks. AWS WAF checks the rate about every 10 seconds.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "forwardedIpConfig",
      "Configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. If `aggregate_key_type` is set to `FORWARDED_IP`, this block is required. See `forwarded_ip_config` below for details.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementForwardedIpConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
