import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig {
  // Rate limit key name applicable only for the following key types:
  enforceOnKeyName?: string;

  // Determines the key to enforce the `rate_limit_threshold` on. If not specified, defaults to `ALL`.
  enforceOnKeyType?: string;
}

export function compute_SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'enforceOnKeyName',
      'Rate limit key name applicable only for the following key types:',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'enforceOnKeyType',
      'Determines the key to enforce the `rate_limit_threshold` on. If not specified, defaults to `ALL`.',
      () => [],
      false,
      false,
    ),
  ];
}
