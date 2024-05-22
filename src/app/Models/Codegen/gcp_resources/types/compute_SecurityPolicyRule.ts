import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_SecurityPolicyRuleHeaderAction,
  compute_SecurityPolicyRuleHeaderAction_GetTypes,
} from "./compute_SecurityPolicyRuleHeaderAction";
import {
  compute_SecurityPolicyRuleMatch,
  compute_SecurityPolicyRuleMatch_GetTypes,
} from "./compute_SecurityPolicyRuleMatch";
import {
  compute_SecurityPolicyRulePreconfiguredWafConfig,
  compute_SecurityPolicyRulePreconfiguredWafConfig_GetTypes,
} from "./compute_SecurityPolicyRulePreconfiguredWafConfig";
import {
  compute_SecurityPolicyRuleRateLimitOptions,
  compute_SecurityPolicyRuleRateLimitOptions_GetTypes,
} from "./compute_SecurityPolicyRuleRateLimitOptions";
import {
  compute_SecurityPolicyRuleRedirectOptions,
  compute_SecurityPolicyRuleRedirectOptions_GetTypes,
} from "./compute_SecurityPolicyRuleRedirectOptions";

export interface compute_SecurityPolicyRule {
  /*
An unique positive integer indicating the priority of evaluation for a rule.
Rules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order.
*/
  priority?: number;

  // Must be specified if the `action` is `rate_based_ban` or `throttle`. Cannot be specified for other actions. Structure is documented below.
  rateLimitOptions?: compute_SecurityPolicyRuleRateLimitOptions;

  // Can be specified if the `action` is `redirect`. Cannot be specified for other actions. Structure is documented below.
  redirectOptions?: compute_SecurityPolicyRuleRedirectOptions;

  // An optional description of this rule. Max size is 64.
  description?: string;

  // Additional actions that are performed on headers. Structure is documented below.
  headerAction?: compute_SecurityPolicyRuleHeaderAction;

  /*
A match condition that incoming traffic is evaluated against.
If it evaluates to true, the corresponding `action` is enforced. Structure is documented below.
*/
  match?: compute_SecurityPolicyRuleMatch;

  // Preconfigured WAF configuration to be applied for the rule. If the rule does not evaluate preconfigured WAF rules, i.e., if `evaluatePreconfiguredWaf()` is not used, this field will have no effect. Structure is documented below.
  preconfiguredWafConfig?: compute_SecurityPolicyRulePreconfiguredWafConfig;

  /*
When set to true, the `action` specified above is not enforced.
Stackdriver logs for requests that trigger a preview action are annotated as such.
*/
  preview?: boolean;

  // Action to take when `match` matches the request. Valid values:
  action?: string;
}

export function compute_SecurityPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "An unique positive integer indicating the priority of evaluation for a rule.\nRules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redirectOptions",
      "Can be specified if the `action` is `redirect`. Cannot be specified for other actions. Structure is documented below.",
      compute_SecurityPolicyRuleRedirectOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "An optional description of this rule. Max size is 64.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "headerAction",
      "Additional actions that are performed on headers. Structure is documented below.",
      compute_SecurityPolicyRuleHeaderAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "preconfiguredWafConfig",
      "Preconfigured WAF configuration to be applied for the rule. If the rule does not evaluate preconfigured WAF rules, i.e., if `evaluatePreconfiguredWaf()` is not used, this field will have no effect. Structure is documented below.",
      compute_SecurityPolicyRulePreconfiguredWafConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "action",
      "Action to take when `match` matches the request. Valid values:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rateLimitOptions",
      "Must be specified if the `action` is `rate_based_ban` or `throttle`. Cannot be specified for other actions. Structure is documented below.",
      compute_SecurityPolicyRuleRateLimitOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "match",
      "A match condition that incoming traffic is evaluated against.\nIf it evaluates to true, the corresponding `action` is enforced. Structure is documented below.",
      compute_SecurityPolicyRuleMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preview",
      "When set to true, the `action` specified above is not enforced.\nStackdriver logs for requests that trigger a preview action are annotated as such.",
      [],
      false,
      false,
    ),
  ];
}
