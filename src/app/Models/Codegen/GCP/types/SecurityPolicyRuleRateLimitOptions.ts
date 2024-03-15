import { SecurityPolicyRuleRateLimitOptionsBanThreshold } from "./SecurityPolicyRuleRateLimitOptionsBanThreshold";
import { SecurityPolicyRuleRateLimitOptionsRateLimitThreshold } from "./SecurityPolicyRuleRateLimitOptionsRateLimitThreshold";
import { SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions } from "./SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions";
import { SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig } from "./SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig";

export interface SecurityPolicyRuleRateLimitOptions {
  /*
Can only be specified if the `action` for the rule is `rate_based_ban`.
If specified, the key will be banned for the configured `ban_duration_sec` when the number of requests that exceed the `rate_limit_threshold` also
exceed this `ban_threshold`. Structure is documented below.
*/
  BanThreshold?: SecurityPolicyRuleRateLimitOptionsBanThreshold;

  // Threshold at which to begin ratelimiting. Structure is documented below.
  RateLimitThreshold?: SecurityPolicyRuleRateLimitOptionsRateLimitThreshold;

  /*
When a request is denied, returns the HTTP response code specified.
Valid options are `deny()` where valid values for status are 403, 404, 429, and 502.
*/
  ExceedAction?: string;

  /*
Parameters defining the redirect action that is used as the exceed action. Cannot be specified if the exceed action is not redirect. Structure is documented below.

<a name="nested_threshold"></a>The `{ban/rate_limit}_threshold` block supports:
*/
  ExceedRedirectOptions?: SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions;

  /*
Can only be specified if the `action` for the rule is `rate_based_ban`.
If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.
*/
  BanDurationSec?: number;

  // Action to take for requests that are under the configured rate limit threshold. Valid option is `allow` only.
  ConformAction?: string;

  // Determines the key to enforce the rate_limit_threshold on. If not specified, defaults to `ALL`.
  EnforceOnKey?: string;

  /*
If specified, any combination of values of enforce_on_key_type/enforce_on_key_name is treated as the key on which rate limit threshold/action is enforced. You can specify up to 3 enforce_on_key_configs. If `enforce_on_key_configs` is specified, `enforce_on_key` must be set to an empty string. Structure is documented below.

--Note:-- To avoid the conflict between `enforce_on_key` and `enforce_on_key_configs`, the field `enforce_on_key` needs to be set to an empty string.
*/
  EnforceOnKeyConfigs?: Array<SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig>;

  // Rate limit key name applicable only for the following key types:
  EnforceOnKeyName?: string;
}
