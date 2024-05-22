import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafregional_RuleGroupActivatedRuleAction,
  wafregional_RuleGroupActivatedRuleAction_GetTypes,
} from "./wafregional_RuleGroupActivatedRuleAction";

export interface wafregional_RuleGroupActivatedRule {
  // The ID of a rule
  ruleId?: string;

  // The rule type, either `REGULAR`, `RATE_BASED`, or `GROUP`. Defaults to `REGULAR`.
  type?: string;

  // Specifies the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule.
  action?: wafregional_RuleGroupActivatedRuleAction;

  // Specifies the order in which the rules are evaluated. Rules with a lower value are evaluated before rules with a higher value.
  priority?: number;
}

export function wafregional_RuleGroupActivatedRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ruleId",
      "The ID of a rule",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The rule type, either `REGULAR`, `RATE_BASED`, or `GROUP`. Defaults to `REGULAR`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Specifies the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule.",
      wafregional_RuleGroupActivatedRuleAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Specifies the order in which the rules are evaluated. Rules with a lower value are evaluated before rules with a higher value.",
      [],
      true,
      false,
    ),
  ];
}
