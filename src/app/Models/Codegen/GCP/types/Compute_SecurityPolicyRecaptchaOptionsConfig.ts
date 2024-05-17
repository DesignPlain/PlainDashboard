import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_SecurityPolicyRecaptchaOptionsConfig {
  // A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of `GOOGLE_RECAPTCHA` under the security policy. The specified site key needs to be created from the reCAPTCHA API. The user is responsible for the validity of the specified site key. If not specified, a Google-managed site key is used.
  RedirectSiteKey?: string;
}

export function Compute_SecurityPolicyRecaptchaOptionsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RedirectSiteKey",
      "A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of `GOOGLE_RECAPTCHA` under the security policy. The specified site key needs to be created from the reCAPTCHA API. The user is responsible for the validity of the specified site key. If not specified, a Google-managed site key is used.",
      [],
      true,
      false,
    ),
  ];
}
