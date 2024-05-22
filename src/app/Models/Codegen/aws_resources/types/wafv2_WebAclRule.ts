import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleAction,
  wafv2_WebAclRuleAction_GetTypes,
} from "./wafv2_WebAclRuleAction";
import {
  wafv2_WebAclRuleCaptchaConfig,
  wafv2_WebAclRuleCaptchaConfig_GetTypes,
} from "./wafv2_WebAclRuleCaptchaConfig";
import {
  wafv2_WebAclRuleOverrideAction,
  wafv2_WebAclRuleOverrideAction_GetTypes,
} from "./wafv2_WebAclRuleOverrideAction";
import {
  wafv2_WebAclRuleRuleLabel,
  wafv2_WebAclRuleRuleLabel_GetTypes,
} from "./wafv2_WebAclRuleRuleLabel";
import {
  wafv2_WebAclRuleStatement,
  wafv2_WebAclRuleStatement_GetTypes,
} from "./wafv2_WebAclRuleStatement";
import {
  wafv2_WebAclRuleVisibilityConfig,
  wafv2_WebAclRuleVisibilityConfig_GetTypes,
} from "./wafv2_WebAclRuleVisibilityConfig";

export interface wafv2_WebAclRule {
  // The AWS WAF processing statement for the rule, for example `byte_match_statement` or `geo_match_statement`. See `statement` below for details.
  statement?: wafv2_WebAclRuleStatement;

  // Defines and enables Amazon CloudWatch metrics and web request sample collection. See `visibility_config` below for details.
  visibilityConfig?: wafv2_WebAclRuleVisibilityConfig;

  // Action that AWS WAF should take on a web request when it matches the rule's statement. This is used only for rules whose --statements do not reference a rule group--. See `action` for details.
  action?: wafv2_WebAclRuleAction;

  // Specifies how AWS WAF should handle CAPTCHA evaluations. See `captcha_config` below for details.
  captchaConfig?: wafv2_WebAclRuleCaptchaConfig;

  // Friendly name of the rule. Note that the provider assumes that rules with names matching this pattern, `^ShieldMitigationRuleGroup_<account-id>_<web-acl-guid>_.-`, are AWS-added for [automatic application layer DDoS mitigation activities](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-automatic-app-layer-response-rg.html). Such rules will be ignored by the provider unless you explicitly include them in your configuration (for example, by using the AWS CLI to discover their properties and creating matching configuration). However, since these rules are owned and managed by AWS, you may get permission errors.
  name?: string;

  // Override action to apply to the rules in a rule group. Used only for rule --statements that reference a rule group--, like `rule_group_reference_statement` and `managed_rule_group_statement`. See `override_action` below for details.
  overrideAction?: wafv2_WebAclRuleOverrideAction;

  // If you define more than one Rule in a WebACL, AWS WAF evaluates each request against the `rules` in order based on the value of `priority`. AWS WAF processes rules with lower priority first.
  priority?: number;

  // Labels to apply to web requests that match the rule match statement. See `rule_label` below for details.
  ruleLabels?: Array<wafv2_WebAclRuleRuleLabel>;
}

export function wafv2_WebAclRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ruleLabels",
      "Labels to apply to web requests that match the rule match statement. See `rule_label` below for details.",
      wafv2_WebAclRuleRuleLabel_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "statement",
      "The AWS WAF processing statement for the rule, for example `byte_match_statement` or `geo_match_statement`. See `statement` below for details.",
      wafv2_WebAclRuleStatement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "visibilityConfig",
      "Defines and enables Amazon CloudWatch metrics and web request sample collection. See `visibility_config` below for details.",
      wafv2_WebAclRuleVisibilityConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Action that AWS WAF should take on a web request when it matches the rule's statement. This is used only for rules whose **statements do not reference a rule group**. See `action` for details.",
      wafv2_WebAclRuleAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "captchaConfig",
      "Specifies how AWS WAF should handle CAPTCHA evaluations. See `captcha_config` below for details.",
      wafv2_WebAclRuleCaptchaConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Friendly name of the rule. Note that the provider assumes that rules with names matching this pattern, `^ShieldMitigationRuleGroup_<account-id>_<web-acl-guid>_.*`, are AWS-added for [automatic application layer DDoS mitigation activities](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-automatic-app-layer-response-rg.html). Such rules will be ignored by the provider unless you explicitly include them in your configuration (for example, by using the AWS CLI to discover their properties and creating matching configuration). However, since these rules are owned and managed by AWS, you may get permission errors.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "overrideAction",
      "Override action to apply to the rules in a rule group. Used only for rule **statements that reference a rule group**, like `rule_group_reference_statement` and `managed_rule_group_statement`. See `override_action` below for details.",
      wafv2_WebAclRuleOverrideAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "If you define more than one Rule in a WebACL, AWS WAF evaluates each request against the `rules` in order based on the value of `priority`. AWS WAF processes rules with lower priority first.",
      [],
      true,
      false,
    ),
  ];
}
