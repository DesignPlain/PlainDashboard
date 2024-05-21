import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions {
  // Target for the redirect action. This is required if the type is `EXTERNAL_302` and cannot be specified for `GOOGLE_RECAPTCHA`.
  target?: string;

  // Type of the redirect action.
  type?: string;
}

export function compute_SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "target",
      "Target for the redirect action. This is required if the type is `EXTERNAL_302` and cannot be specified for `GOOGLE_RECAPTCHA`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of the redirect action.",
      [],
      true,
      false,
    ),
  ];
}
