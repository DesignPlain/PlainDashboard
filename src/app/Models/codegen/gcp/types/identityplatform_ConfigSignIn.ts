import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  identityplatform_ConfigSignInEmail,
  identityplatform_ConfigSignInEmail_GetTypes,
} from "./identityplatform_ConfigSignInEmail";
import {
  identityplatform_ConfigSignInHashConfig,
  identityplatform_ConfigSignInHashConfig_GetTypes,
} from "./identityplatform_ConfigSignInHashConfig";
import {
  identityplatform_ConfigSignInPhoneNumber,
  identityplatform_ConfigSignInPhoneNumber_GetTypes,
} from "./identityplatform_ConfigSignInPhoneNumber";
import {
  identityplatform_ConfigSignInAnonymous,
  identityplatform_ConfigSignInAnonymous_GetTypes,
} from "./identityplatform_ConfigSignInAnonymous";

export interface identityplatform_ConfigSignIn {
  /*
Configuration options related to authenticating a user by their email address.
Structure is documented below.
*/
  email?: identityplatform_ConfigSignInEmail;

  /*
(Output)
Output only. Hash config information.
Structure is documented below.
*/
  hashConfigs?: Array<identityplatform_ConfigSignInHashConfig>;

  /*
Configuration options related to authenticated a user by their phone number.
Structure is documented below.
*/
  phoneNumber?: identityplatform_ConfigSignInPhoneNumber;

  // Whether to allow more than one account to have the same email.
  allowDuplicateEmails?: boolean;

  /*
Configuration options related to authenticating an anonymous user.
Structure is documented below.
*/
  anonymous?: identityplatform_ConfigSignInAnonymous;
}

export function identityplatform_ConfigSignIn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "phoneNumber",
      "Configuration options related to authenticated a user by their phone number.\nStructure is documented below.",
      () => identityplatform_ConfigSignInPhoneNumber_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowDuplicateEmails",
      "Whether to allow more than one account to have the same email.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "anonymous",
      "Configuration options related to authenticating an anonymous user.\nStructure is documented below.",
      () => identityplatform_ConfigSignInAnonymous_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "email",
      "Configuration options related to authenticating a user by their email address.\nStructure is documented below.",
      () => identityplatform_ConfigSignInEmail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hashConfigs",
      "(Output)\nOutput only. Hash config information.\nStructure is documented below.",
      () => identityplatform_ConfigSignInHashConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
