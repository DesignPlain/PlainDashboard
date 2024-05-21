import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identityplatform_ProjectDefaultConfigSignInAnonymous,
  identityplatform_ProjectDefaultConfigSignInAnonymous_GetTypes,
} from "./identityplatform_ProjectDefaultConfigSignInAnonymous";
import {
  identityplatform_ProjectDefaultConfigSignInEmail,
  identityplatform_ProjectDefaultConfigSignInEmail_GetTypes,
} from "./identityplatform_ProjectDefaultConfigSignInEmail";
import {
  identityplatform_ProjectDefaultConfigSignInHashConfig,
  identityplatform_ProjectDefaultConfigSignInHashConfig_GetTypes,
} from "./identityplatform_ProjectDefaultConfigSignInHashConfig";
import {
  identityplatform_ProjectDefaultConfigSignInPhoneNumber,
  identityplatform_ProjectDefaultConfigSignInPhoneNumber_GetTypes,
} from "./identityplatform_ProjectDefaultConfigSignInPhoneNumber";

export interface identityplatform_ProjectDefaultConfigSignIn {
  // Whether to allow more than one account to have the same email.
  allowDuplicateEmails?: boolean;

  /*
Configuration options related to authenticating an anonymous user.
Structure is documented below.
*/
  anonymous?: identityplatform_ProjectDefaultConfigSignInAnonymous;

  /*
Configuration options related to authenticating a user by their email address.
Structure is documented below.
*/
  email?: identityplatform_ProjectDefaultConfigSignInEmail;

  /*
(Output)
Output only. Hash config information.
Structure is documented below.
*/
  hashConfigs?: Array<identityplatform_ProjectDefaultConfigSignInHashConfig>;

  /*
Configuration options related to authenticated a user by their phone number.
Structure is documented below.
*/
  phoneNumber?: identityplatform_ProjectDefaultConfigSignInPhoneNumber;
}

export function identityplatform_ProjectDefaultConfigSignIn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowDuplicateEmails",
      "Whether to allow more than one account to have the same email.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "anonymous",
      "Configuration options related to authenticating an anonymous user.\nStructure is documented below.",
      identityplatform_ProjectDefaultConfigSignInAnonymous_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "email",
      "Configuration options related to authenticating a user by their email address.\nStructure is documented below.",
      identityplatform_ProjectDefaultConfigSignInEmail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hashConfigs",
      "(Output)\nOutput only. Hash config information.\nStructure is documented below.",
      identityplatform_ProjectDefaultConfigSignInHashConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "phoneNumber",
      "Configuration options related to authenticated a user by their phone number.\nStructure is documented below.",
      identityplatform_ProjectDefaultConfigSignInPhoneNumber_GetTypes(),
      false,
      false,
    ),
  ];
}
