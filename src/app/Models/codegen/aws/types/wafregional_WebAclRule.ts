import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafregional_WebAclRuleAction,
  wafregional_WebAclRuleAction_GetTypes,
} from "./wafregional_WebAclRuleAction";
import {
  wafregional_WebAclRuleOverrideAction,
  wafregional_WebAclRuleOverrideAction_GetTypes,
} from "./wafregional_WebAclRuleOverrideAction";

export interface wafregional_WebAclRule {
  /*
Specifies the order in which the rules in a WebACL are evaluated.
Rules with a lower value are evaluated before rules with a higher value.
*/
  priority?: number;

  // ID of the associated WAF (Regional) rule (e.g., `aws.wafregional.Rule`). WAF (Global) rules cannot be used.
  ruleId?: string;

  // The rule type, either `REGULAR`, as defined by [Rule](http://docs.aws.amazon.com/waf/latest/APIReference/API_Rule.html), `RATE_BASED`, as defined by [RateBasedRule](http://docs.aws.amazon.com/waf/latest/APIReference/API_RateBasedRule.html), or `GROUP`, as defined by [RuleGroup](https://docs.aws.amazon.com/waf/latest/APIReference/API_RuleGroup.html). The default is REGULAR. If you add a RATE_BASED rule, you need to set `type` as `RATE_BASED`. If you add a GROUP rule, you need to set `type` as `GROUP`.
  type?: string;

  // Configuration block of the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule.  Not used if `type` is `GROUP`. Detailed below.
  action?: wafregional_WebAclRuleAction;

  // Configuration block of the override the action that a group requests CloudFront or AWS WAF takes when a web request matches the conditions in the rule.  Only used if `type` is `GROUP`. Detailed below.
  overrideAction?: wafregional_WebAclRuleOverrideAction;
}

export function wafregional_WebAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Specifies the order in which the rules in a WebACL are evaluated.\nRules with a lower value are evaluated before rules with a higher value.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ruleId",
      "ID of the associated WAF (Regional) rule (e.g., `aws.wafregional.Rule`). WAF (Global) rules cannot be used.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The rule type, either `REGULAR`, as defined by [Rule](http://docs.aws.amazon.com/waf/latest/APIReference/API_Rule.html), `RATE_BASED`, as defined by [RateBasedRule](http://docs.aws.amazon.com/waf/latest/APIReference/API_RateBasedRule.html), or `GROUP`, as defined by [RuleGroup](https://docs.aws.amazon.com/waf/latest/APIReference/API_RuleGroup.html). The default is REGULAR. If you add a RATE_BASED rule, you need to set `type` as `RATE_BASED`. If you add a GROUP rule, you need to set `type` as `GROUP`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Configuration block of the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule.  Not used if `type` is `GROUP`. Detailed below.",
      () => wafregional_WebAclRuleAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "overrideAction",
      "Configuration block of the override the action that a group requests CloudFront or AWS WAF takes when a web request matches the conditions in the rule.  Only used if `type` is `GROUP`. Detailed below.",
      () => wafregional_WebAclRuleOverrideAction_GetTypes(),
      false,
      false,
    ),
  ];
}
