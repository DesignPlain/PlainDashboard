import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityPolicyRuleHeaderAction,
  Compute_SecurityPolicyRuleHeaderAction_GetTypes,
} from "./Compute_SecurityPolicyRuleHeaderAction";
import {
  Compute_SecurityPolicyRuleRateLimitOptions,
  Compute_SecurityPolicyRuleRateLimitOptions_GetTypes,
} from "./Compute_SecurityPolicyRuleRateLimitOptions";
import {
  Compute_SecurityPolicyRuleMatch,
  Compute_SecurityPolicyRuleMatch_GetTypes,
} from "./Compute_SecurityPolicyRuleMatch";
import {
  Compute_SecurityPolicyRulePreconfiguredWafConfig,
  Compute_SecurityPolicyRulePreconfiguredWafConfig_GetTypes,
} from "./Compute_SecurityPolicyRulePreconfiguredWafConfig";
import {
  Compute_SecurityPolicyRuleRedirectOptions,
  Compute_SecurityPolicyRuleRedirectOptions_GetTypes,
} from "./Compute_SecurityPolicyRuleRedirectOptions";

export interface Compute_SecurityPolicyRule {
  // Additional actions that are performed on headers. Structure is documented below.
  HeaderAction?: Compute_SecurityPolicyRuleHeaderAction;

  // Must be specified if the `action` is `rate_based_ban` or `throttle`. Cannot be specified for other actions. Structure is documented below.
  RateLimitOptions?: Compute_SecurityPolicyRuleRateLimitOptions;

  /*
A match condition that incoming traffic is evaluated against.
If it evaluates to true, the corresponding `action` is enforced. Structure is documented below.
*/
  Match?: Compute_SecurityPolicyRuleMatch;

  // Preconfigured WAF configuration to be applied for the rule. If the rule does not evaluate preconfigured WAF rules, i.e., if `evaluatePreconfiguredWaf()` is not used, this field will have no effect. Structure is documented below.
  PreconfiguredWafConfig?: Compute_SecurityPolicyRulePreconfiguredWafConfig;

  /*
When set to true, the `action` specified above is not enforced.
Stackdriver logs for requests that trigger a preview action are annotated as such.
*/
  Preview?: boolean;

  /*
An unique positive integer indicating the priority of evaluation for a rule.
Rules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order.
*/
  Priority?: number;

  // Can be specified if the `action` is `redirect`. Cannot be specified for other actions. Structure is documented below.
  RedirectOptions?: Compute_SecurityPolicyRuleRedirectOptions;

  // Action to take when `match` matches the request. Valid values:
  Action?: string;

  // An optional description of this rule. Max size is 64.
  Description?: string;
}

export function Compute_SecurityPolicyRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "RateLimitOptions",
      "Must be specified if the `action` is `rate_based_ban` or `throttle`. Cannot be specified for other actions. Structure is documented below.",
      Compute_SecurityPolicyRuleRateLimitOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Match",
      "A match condition that incoming traffic is evaluated against.\nIf it evaluates to true, the corresponding `action` is enforced. Structure is documented below.",
      Compute_SecurityPolicyRuleMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PreconfiguredWafConfig",
      "Preconfigured WAF configuration to be applied for the rule. If the rule does not evaluate preconfigured WAF rules, i.e., if `evaluatePreconfiguredWaf()` is not used, this field will have no effect. Structure is documented below.",
      Compute_SecurityPolicyRulePreconfiguredWafConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RedirectOptions",
      "Can be specified if the `action` is `redirect`. Cannot be specified for other actions. Structure is documented below.",
      Compute_SecurityPolicyRuleRedirectOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Action",
      "Action to take when `match` matches the request. Valid values:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HeaderAction",
      "Additional actions that are performed on headers. Structure is documented below.",
      Compute_SecurityPolicyRuleHeaderAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Preview",
      "When set to true, the `action` specified above is not enforced.\nStackdriver logs for requests that trigger a preview action are annotated as such.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Priority",
      "An unique positive integer indicating the priority of evaluation for a rule.\nRules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of this rule. Max size is 64.",
      [],
      false,
      false,
    ),
  ];
}
