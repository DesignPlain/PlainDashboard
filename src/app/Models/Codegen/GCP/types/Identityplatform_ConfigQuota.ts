import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ConfigQuotaSignUpQuotaConfig,
  Identityplatform_ConfigQuotaSignUpQuotaConfig_GetTypes,
} from "./Identityplatform_ConfigQuotaSignUpQuotaConfig";

export interface Identityplatform_ConfigQuota {
  /*
Quota for the Signup endpoint, if overwritten. Signup quota is measured in sign ups per project per hour per IP.
Structure is documented below.
*/
  SignUpQuotaConfig?: Identityplatform_ConfigQuotaSignUpQuotaConfig;
}

export function Identityplatform_ConfigQuota_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SignUpQuotaConfig",
      "Quota for the Signup endpoint, if overwritten. Signup quota is measured in sign ups per project per hour per IP.\nStructure is documented below.",
      Identityplatform_ConfigQuotaSignUpQuotaConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
