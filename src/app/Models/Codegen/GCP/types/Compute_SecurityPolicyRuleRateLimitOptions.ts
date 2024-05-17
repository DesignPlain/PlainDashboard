import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold,
  Compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold_GetTypes,
} from "./Compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold";
import {
  Compute_SecurityPolicyRuleRateLimitOptionsBanThreshold,
  Compute_SecurityPolicyRuleRateLimitOptionsBanThreshold_GetTypes,
} from "./Compute_SecurityPolicyRuleRateLimitOptionsBanThreshold";
import {
  Compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig,
  Compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig_GetTypes,
} from "./Compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig";
import {
  Compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions,
  Compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions_GetTypes,
} from "./Compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions";

export interface Compute_SecurityPolicyRuleRateLimitOptions {
  /*
Can only be specified if the `action` for the rule is `rate_based_ban`.
If specified, the key will be banned for the configured `ban_duration_sec` when the number of requests that exceed the `rate_limit_threshold` also
exceed this `ban_threshold`. Structure is documented below.
*/
  BanThreshold?: Compute_SecurityPolicyRuleRateLimitOptionsBanThreshold;

  /*
If specified, any combination of values of enforce_on_key_type/enforce_on_key_name is treated as the key on which rate limit threshold/action is enforced. You can specify up to 3 enforce_on_key_configs. If `enforce_on_key_configs` is specified, `enforce_on_key` must be set to an empty string. Structure is documented below.

--Note:-- To avoid the conflict between `enforce_on_key` and `enforce_on_key_configs`, the field `enforce_on_key` needs to be set to an empty string.
*/
  EnforceOnKeyConfigs?: Array<Compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig>;

  // Rate limit key name applicable only for the following key types:
  EnforceOnKeyName?: string;

  /*
Parameters defining the redirect action that is used as the exceed action. Cannot be specified if the exceed action is not redirect. Structure is documented below.

<a name="nested_threshold"></a>The `{ban/rate_limit}_threshold` block supports:
*/
  ExceedRedirectOptions?: Compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions;

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
When a request is denied, returns the HTTP response code specified.
Valid options are `deny()` where valid values for status are 403, 404, 429, and 502.
*/
  ExceedAction?: string;

  // Threshold at which to begin ratelimiting. Structure is documented below.
  RateLimitThreshold?: Compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold;
}

export function Compute_SecurityPolicyRuleRateLimitOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BanThreshold",
      "Can only be specified if the `action` for the rule is `rate_based_ban`.\nIf specified, the key will be banned for the configured `ban_duration_sec` when the number of requests that exceed the `rate_limit_threshold` also\nexceed this `ban_threshold`. Structure is documented below.",
      Compute_SecurityPolicyRuleRateLimitOptionsBanThreshold_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExceedRedirectOptions",
      'Parameters defining the redirect action that is used as the exceed action. Cannot be specified if the exceed action is not redirect. Structure is documented below.\n\n<a name="nested_threshold"></a>The `{ban/rate_limit}_threshold` block supports:',
      Compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "BanDurationSec",
      "Can only be specified if the `action` for the rule is `rate_based_ban`.\nIf specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConformAction",
      "Action to take for requests that are under the configured rate limit threshold. Valid option is `allow` only.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EnforceOnKey",
      "Determines the key to enforce the rate_limit_threshold on. If not specified, defaults to `ALL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RateLimitThreshold",
      "Threshold at which to begin ratelimiting. Structure is documented below.",
      Compute_SecurityPolicyRuleRateLimitOptionsRateLimitThreshold_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EnforceOnKeyConfigs",
      "If specified, any combination of values of enforce_on_key_type/enforce_on_key_name is treated as the key on which rate limit threshold/action is enforced. You can specify up to 3 enforce_on_key_configs. If `enforce_on_key_configs` is specified, `enforce_on_key` must be set to an empty string. Structure is documented below.\n\n**Note:** To avoid the conflict between `enforce_on_key` and `enforce_on_key_configs`, the field `enforce_on_key` needs to be set to an empty string.",
      Compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EnforceOnKeyName",
      "Rate limit key name applicable only for the following key types:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExceedAction",
      "When a request is denied, returns the HTTP response code specified.\nValid options are `deny()` where valid values for status are 403, 404, 429, and 502.",
      [],
      true,
      false,
    ),
  ];
}
