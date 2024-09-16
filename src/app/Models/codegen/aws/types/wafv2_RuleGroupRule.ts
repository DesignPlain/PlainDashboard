import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_RuleGroupRuleVisibilityConfig,
  wafv2_RuleGroupRuleVisibilityConfig_GetTypes,
} from './wafv2_RuleGroupRuleVisibilityConfig';
import {
  wafv2_RuleGroupRuleAction,
  wafv2_RuleGroupRuleAction_GetTypes,
} from './wafv2_RuleGroupRuleAction';
import {
  wafv2_RuleGroupRuleCaptchaConfig,
  wafv2_RuleGroupRuleCaptchaConfig_GetTypes,
} from './wafv2_RuleGroupRuleCaptchaConfig';
import {
  wafv2_RuleGroupRuleRuleLabel,
  wafv2_RuleGroupRuleRuleLabel_GetTypes,
} from './wafv2_RuleGroupRuleRuleLabel';
import {
  wafv2_RuleGroupRuleStatement,
  wafv2_RuleGroupRuleStatement_GetTypes,
} from './wafv2_RuleGroupRuleStatement';

export interface wafv2_RuleGroupRule {
  // Defines and enables Amazon CloudWatch metrics and web request sample collection. See Visibility Configuration below for details.
  visibilityConfig?: wafv2_RuleGroupRuleVisibilityConfig;

  // The action that AWS WAF should take on a web request when it matches the rule's statement. Settings at the `aws.wafv2.WebAcl` level can override the rule action setting. See Action below for details.
  action?: wafv2_RuleGroupRuleAction;

  // Specifies how AWS WAF should handle CAPTCHA evaluations. See Captcha Configuration below for details.
  captchaConfig?: wafv2_RuleGroupRuleCaptchaConfig;

  // A friendly name of the rule.
  name?: string;

  // If you define more than one Rule in a WebACL, AWS WAF evaluates each request against the `rules` in order based on the value of `priority`. AWS WAF processes rules with lower priority first.
  priority?: number;

  // Labels to apply to web requests that match the rule match statement. See Rule Label below for details.
  ruleLabels?: Array<wafv2_RuleGroupRuleRuleLabel>;

  // The AWS WAF processing statement for the rule, for example `byte_match_statement` or `geo_match_statement`. See Statement below for details.
  statement?: wafv2_RuleGroupRuleStatement;
}

export function wafv2_RuleGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'visibilityConfig',
      'Defines and enables Amazon CloudWatch metrics and web request sample collection. See Visibility Configuration below for details.',
      () => wafv2_RuleGroupRuleVisibilityConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'action',
      "The action that AWS WAF should take on a web request when it matches the rule's statement. Settings at the `aws.wafv2.WebAcl` level can override the rule action setting. See Action below for details.",
      () => wafv2_RuleGroupRuleAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'captchaConfig',
      'Specifies how AWS WAF should handle CAPTCHA evaluations. See Captcha Configuration below for details.',
      () => wafv2_RuleGroupRuleCaptchaConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'A friendly name of the rule.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'priority',
      'If you define more than one Rule in a WebACL, AWS WAF evaluates each request against the `rules` in order based on the value of `priority`. AWS WAF processes rules with lower priority first.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ruleLabels',
      'Labels to apply to web requests that match the rule match statement. See Rule Label below for details.',
      () => wafv2_RuleGroupRuleRuleLabel_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'statement',
      'The AWS WAF processing statement for the rule, for example `byte_match_statement` or `geo_match_statement`. See Statement below for details.',
      () => wafv2_RuleGroupRuleStatement_GetTypes(),
      true,
      false,
    ),
  ];
}
