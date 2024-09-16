import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions {
  // Type of the redirect action.
  type?: string;

  // Target for the redirect action. This is required if the type is `EXTERNAL_302` and cannot be specified for `GOOGLE_RECAPTCHA`.
  target?: string;
}

export function compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of the redirect action.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'target',
      'Target for the redirect action. This is required if the type is `EXTERNAL_302` and cannot be specified for `GOOGLE_RECAPTCHA`.',
      () => [],
      false,
      false,
    ),
  ];
}
