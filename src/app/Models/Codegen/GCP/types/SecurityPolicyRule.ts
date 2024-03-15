import { SecurityPolicyRulePreconfiguredWafConfig } from "./SecurityPolicyRulePreconfiguredWafConfig";
import { SecurityPolicyRuleMatch } from "./SecurityPolicyRuleMatch";
import { SecurityPolicyRuleHeaderAction } from "./SecurityPolicyRuleHeaderAction";
import { SecurityPolicyRuleRateLimitOptions } from "./SecurityPolicyRuleRateLimitOptions";
import { SecurityPolicyRuleRedirectOptions } from "./SecurityPolicyRuleRedirectOptions";

export interface SecurityPolicyRule {
  // Preconfigured WAF configuration to be applied for the rule. If the rule does not evaluate preconfigured WAF rules, i.e., if `evaluatePreconfiguredWaf()` is not used, this field will have no effect. Structure is documented below.
  PreconfiguredWafConfig?: SecurityPolicyRulePreconfiguredWafConfig;

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

  // Action to take when `match` matches the request. Valid values:
  Action?: string;

  // An optional description of this rule. Max size is 64.
  Description?: string;

  /*
A match condition that incoming traffic is evaluated against.
If it evaluates to true, the corresponding `action` is enforced. Structure is documented below.
*/
  Match?: SecurityPolicyRuleMatch;

  // Additional actions that are performed on headers. Structure is documented below.
  HeaderAction?: SecurityPolicyRuleHeaderAction;

  // Must be specified if the `action` is `rate_based_ban` or `throttle`. Cannot be specified for other actions. Structure is documented below.
  RateLimitOptions?: SecurityPolicyRuleRateLimitOptions;

  // Can be specified if the `action` is `redirect`. Cannot be specified for other actions. Structure is documented below.
  RedirectOptions?: SecurityPolicyRuleRedirectOptions;
}
