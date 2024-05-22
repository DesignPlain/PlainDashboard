import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface clouddomains_RegistrationManagementSettings {
  /*
The desired renewal method for this Registration. The actual renewalMethod is automatically updated to reflect this choice.
If unset or equal to RENEWAL_METHOD_UNSPECIFIED, the actual renewalMethod is treated as if it were set to AUTOMATIC_RENEWAL.
You cannot use RENEWAL_DISABLED during resource creation, and you can update the renewal status only when the Registration
resource has state ACTIVE or SUSPENDED.
When preferredRenewalMethod is set to AUTOMATIC_RENEWAL, the actual renewalMethod can be set to RENEWAL_DISABLED in case of
problems with the billing account or reported domain abuse. In such cases, check the issues field on the Registration. After
the problem is resolved, the renewalMethod is automatically updated to preferredRenewalMethod in a few hours.
*/
  preferredRenewalMethod?: string;

  /*
(Output)
Output only. The actual renewal method for this Registration. When preferredRenewalMethod is set to AUTOMATIC_RENEWAL,
the actual renewalMethod can be equal to RENEWAL_DISABLED—for example, when there are problems with the billing account
or reported domain abuse. In such cases, check the issues field on the Registration. After the problem is resolved, the
renewalMethod is automatically updated to preferredRenewalMethod in a few hours.
*/
  renewalMethod?: string;

  // Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED.
  transferLockState?: string;
}

export function clouddomains_RegistrationManagementSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "preferredRenewalMethod",
      "The desired renewal method for this Registration. The actual renewalMethod is automatically updated to reflect this choice.\nIf unset or equal to RENEWAL_METHOD_UNSPECIFIED, the actual renewalMethod is treated as if it were set to AUTOMATIC_RENEWAL.\nYou cannot use RENEWAL_DISABLED during resource creation, and you can update the renewal status only when the Registration\nresource has state ACTIVE or SUSPENDED.\nWhen preferredRenewalMethod is set to AUTOMATIC_RENEWAL, the actual renewalMethod can be set to RENEWAL_DISABLED in case of\nproblems with the billing account or reported domain abuse. In such cases, check the issues field on the Registration. After\nthe problem is resolved, the renewalMethod is automatically updated to preferredRenewalMethod in a few hours.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "renewalMethod",
      "(Output)\nOutput only. The actual renewal method for this Registration. When preferredRenewalMethod is set to AUTOMATIC_RENEWAL,\nthe actual renewalMethod can be equal to RENEWAL_DISABLED—for example, when there are problems with the billing account\nor reported domain abuse. In such cases, check the issues field on the Registration. After the problem is resolved, the\nrenewalMethod is automatically updated to preferredRenewalMethod in a few hours.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transferLockState",
      "Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED.",
      [],
      false,
      true,
    ),
  ];
}
