import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  waf_WebAclRuleAction,
  waf_WebAclRuleAction_GetTypes,
} from "./waf_WebAclRuleAction";
import {
  waf_WebAclRuleOverrideAction,
  waf_WebAclRuleOverrideAction_GetTypes,
} from "./waf_WebAclRuleOverrideAction";

export interface waf_WebAclRule {
  // The rule type, either `REGULAR`, as defined by [Rule](http://docs.aws.amazon.com/waf/latest/APIReference/API_Rule.html), `RATE_BASED`, as defined by [RateBasedRule](http://docs.aws.amazon.com/waf/latest/APIReference/API_RateBasedRule.html), or `GROUP`, as defined by [RuleGroup](https://docs.aws.amazon.com/waf/latest/APIReference/API_RuleGroup.html). The default is REGULAR. If you add a RATE_BASED rule, you need to set `type` as `RATE_BASED`. If you add a GROUP rule, you need to set `type` as `GROUP`.
  type?: string;

  // The action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule. Not used if `type` is `GROUP`.
  action?: waf_WebAclRuleAction;

  // Override the action that a group requests CloudFront or AWS WAF takes when a web request matches the conditions in the rule. Only used if `type` is `GROUP`.
  overrideAction?: waf_WebAclRuleOverrideAction;

  /*
Specifies the order in which the rules in a WebACL are evaluated.
Rules with a lower value are evaluated before rules with a higher value.
*/
  priority?: number;

  // ID of the associated WAF (Global) rule (e.g., `aws.waf.Rule`). WAF (Regional) rules cannot be used.
  ruleId?: string;
}

export function waf_WebAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The rule type, either `REGULAR`, as defined by [Rule](http://docs.aws.amazon.com/waf/latest/APIReference/API_Rule.html), `RATE_BASED`, as defined by [RateBasedRule](http://docs.aws.amazon.com/waf/latest/APIReference/API_RateBasedRule.html), or `GROUP`, as defined by [RuleGroup](https://docs.aws.amazon.com/waf/latest/APIReference/API_RuleGroup.html). The default is REGULAR. If you add a RATE_BASED rule, you need to set `type` as `RATE_BASED`. If you add a GROUP rule, you need to set `type` as `GROUP`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "The action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule. Not used if `type` is `GROUP`.",
      waf_WebAclRuleAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "overrideAction",
      "Override the action that a group requests CloudFront or AWS WAF takes when a web request matches the conditions in the rule. Only used if `type` is `GROUP`.",
      waf_WebAclRuleOverrideAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Specifies the order in which the rules in a WebACL are evaluated.\nRules with a lower value are evaluated before rules with a higher value.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ruleId",
      "ID of the associated WAF (Global) rule (e.g., `aws.waf.Rule`). WAF (Regional) rules cannot be used.",
      [],
      true,
      false,
    ),
  ];
}
