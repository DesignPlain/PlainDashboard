import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_SecurityPolicyRuleRateLimitOptionsBanThreshold,
  compute_SecurityPolicyRuleRateLimitOptionsBanThreshold_GetTypes,
} from "./compute_SecurityPolicyRuleRateLimitOptionsBanThreshold";
import {
  compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig,
  compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig_GetTypes,
} from "./compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig";
import {
  compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions,
  compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions_GetTypes,
} from "./compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions";
import {
  compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold,
  compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold_GetTypes,
} from "./compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold";

export interface compute_SecurityPolicyRuleRateLimitOptions {
  /*
Can only be specified if the `action` for the rule is `rate_based_ban`.
If specified, the key will be banned for the configured `ban_duration_sec` when the number of requests that exceed the `rate_limit_threshold` also
exceed this `ban_threshold`. Structure is documented below.
*/
  banThreshold?: compute_SecurityPolicyRuleRateLimitOptionsBanThreshold;

  // Action to take for requests that are under the configured rate limit threshold. Valid option is `allow` only.
  conformAction?: string;

  /*
If specified, any combination of values of enforce_on_key_type/enforce_on_key_name is treated as the key on which rate limit threshold/action is enforced. You can specify up to 3 enforce_on_key_configs. If `enforce_on_key_configs` is specified, `enforce_on_key` must be set to an empty string. Structure is documented below.

--Note:-- To avoid the conflict between `enforce_on_key` and `enforce_on_key_configs`, the field `enforce_on_key` needs to be set to an empty string.
*/
  enforceOnKeyConfigs?: Array<compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig>;

  // Rate limit key name applicable only for the following key types:
  enforceOnKeyName?: string;

  /*
When a request is denied, returns the HTTP response code specified.
Valid options are `deny()` where valid values for status are 403, 404, 429, and 502.
*/
  exceedAction?: string;

  /*
Can only be specified if the `action` for the rule is `rate_based_ban`.
If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.
*/
  banDurationSec?: number;

  // Determines the key to enforce the rate_limit_threshold on. If not specified, defaults to `ALL`.
  enforceOnKey?: string;

  /*
Parameters defining the redirect action that is used as the exceed action. Cannot be specified if the exceed action is not redirect. Structure is documented below.

<a name="nested_threshold"></a>The `{ban/rate_limit}_threshold` block supports:
*/
  exceedRedirectOptions?: compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions;

  // Threshold at which to begin ratelimiting. Structure is documented below.
  rateLimitThreshold?: compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold;
}

export function compute_SecurityPolicyRuleRateLimitOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "rateLimitThreshold",
      "Threshold at which to begin ratelimiting. Structure is documented below.",
      () =>
        compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "conformAction",
      "Action to take for requests that are under the configured rate limit threshold. Valid option is `allow` only.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "enforceOnKeyName",
      "Rate limit key name applicable only for the following key types:",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "exceedAction",
      "When a request is denied, returns the HTTP response code specified.\nValid options are `deny()` where valid values for status are 403, 404, 429, and 502.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "banDurationSec",
      "Can only be specified if the `action` for the rule is `rate_based_ban`.\nIf specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "enforceOnKey",
      "Determines the key to enforce the rate_limit_threshold on. If not specified, defaults to `ALL`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "banThreshold",
      "Can only be specified if the `action` for the rule is `rate_based_ban`.\nIf specified, the key will be banned for the configured `ban_duration_sec` when the number of requests that exceed the `rate_limit_threshold` also\nexceed this `ban_threshold`. Structure is documented below.",
      () => compute_SecurityPolicyRuleRateLimitOptionsBanThreshold_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "enforceOnKeyConfigs",
      "If specified, any combination of values of enforce_on_key_type/enforce_on_key_name is treated as the key on which rate limit threshold/action is enforced. You can specify up to 3 enforce_on_key_configs. If `enforce_on_key_configs` is specified, `enforce_on_key` must be set to an empty string. Structure is documented below.\n\n**Note:** To avoid the conflict between `enforce_on_key` and `enforce_on_key_configs`, the field `enforce_on_key` needs to be set to an empty string.",
      () =>
        compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "exceedRedirectOptions",
      'Parameters defining the redirect action that is used as the exceed action. Cannot be specified if the exceed action is not redirect. Structure is documented below.\n\n<a name="nested_threshold"></a>The `{ban/rate_limit}_threshold` block supports:',
      () =>
        compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
