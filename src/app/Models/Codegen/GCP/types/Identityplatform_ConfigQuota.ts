import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identityplatform_ConfigQuotaSignUpQuotaConfig,
  identityplatform_ConfigQuotaSignUpQuotaConfig_GetTypes,
} from "./identityplatform_ConfigQuotaSignUpQuotaConfig";

export interface identityplatform_ConfigQuota {
  /*
Quota for the Signup endpoint, if overwritten. Signup quota is measured in sign ups per project per hour per IP.
Structure is documented below.
*/
  signUpQuotaConfig?: identityplatform_ConfigQuotaSignUpQuotaConfig;
}

export function identityplatform_ConfigQuota_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "signUpQuotaConfig",
      "Quota for the Signup endpoint, if overwritten. Signup quota is measured in sign ups per project per hour per IP.\nStructure is documented below.",
      identityplatform_ConfigQuotaSignUpQuotaConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
