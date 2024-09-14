import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKey,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKey_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKey";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementForwardedIpConfig,
  wafv2_RuleGroupRuleStatementRateBasedStatementForwardedIpConfig_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementForwardedIpConfig";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatement,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatement_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatement";

export interface wafv2_RuleGroupRuleStatementRateBasedStatement {
  // Aggregate the request counts using one or more web request components as the aggregate keys. See `custom_key` below for details.
  customKeys?: Array<wafv2_RuleGroupRuleStatementRateBasedStatementCustomKey>;

  /*
The amount of time, in seconds, that AWS WAF should include in its request counts, looking back from the current time. Valid values are `60`, `120`, `300`, and `600`. Defaults to `300` (5 minutes).

--NOTE:-- This setting doesn't determine how often AWS WAF checks the rate, but how far back it looks each time it checks. AWS WAF checks the rate about every 10 seconds.
*/
  evaluationWindowSec?: number;

  // The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. If `aggregate_key_type` is set to `FORWARDED_IP`, this block is required. See Forwarded IP Config below for details.
  forwardedIpConfig?: wafv2_RuleGroupRuleStatementRateBasedStatementForwardedIpConfig;

  // The limit on requests per 5-minute period for a single originating IP address.
  limit?: number;

  // An optional nested statement that narrows the scope of the rate-based statement to matching web requests. This can be any nestable statement, and you can nest statements at any level below this scope-down statement. See Statement above for details. If `aggregate_key_type` is set to `CONSTANT`, this block is required.
  scopeDownStatement?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatement;

  // Setting that indicates how to aggregate the request counts. Valid values include: `CONSTANT`, `CUSTOM_KEYS`, `FORWARDED_IP` or `IP`. Default: `IP`.
  aggregateKeyType?: string;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "limit",
      "The limit on requests per 5-minute period for a single originating IP address.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scopeDownStatement",
      "An optional nested statement that narrows the scope of the rate-based statement to matching web requests. This can be any nestable statement, and you can nest statements at any level below this scope-down statement. See Statement above for details. If `aggregate_key_type` is set to `CONSTANT`, this block is required.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "aggregateKeyType",
      "Setting that indicates how to aggregate the request counts. Valid values include: `CONSTANT`, `CUSTOM_KEYS`, `FORWARDED_IP` or `IP`. Default: `IP`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customKeys",
      "Aggregate the request counts using one or more web request components as the aggregate keys. See `custom_key` below for details.",
      () => wafv2_RuleGroupRuleStatementRateBasedStatementCustomKey_GetTypes(),
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
      "The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. If `aggregate_key_type` is set to `FORWARDED_IP`, this block is required. See Forwarded IP Config below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementForwardedIpConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
