import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ProjectDefaultConfigSignInEmail,
  Identityplatform_ProjectDefaultConfigSignInEmail_GetTypes,
} from "./Identityplatform_ProjectDefaultConfigSignInEmail";
import {
  Identityplatform_ProjectDefaultConfigSignInHashConfig,
  Identityplatform_ProjectDefaultConfigSignInHashConfig_GetTypes,
} from "./Identityplatform_ProjectDefaultConfigSignInHashConfig";
import {
  Identityplatform_ProjectDefaultConfigSignInPhoneNumber,
  Identityplatform_ProjectDefaultConfigSignInPhoneNumber_GetTypes,
} from "./Identityplatform_ProjectDefaultConfigSignInPhoneNumber";
import {
  Identityplatform_ProjectDefaultConfigSignInAnonymous,
  Identityplatform_ProjectDefaultConfigSignInAnonymous_GetTypes,
} from "./Identityplatform_ProjectDefaultConfigSignInAnonymous";

export interface Identityplatform_ProjectDefaultConfigSignIn {
  /*
Configuration options related to authenticating a user by their email address.
Structure is documented below.
*/
  Email?: Identityplatform_ProjectDefaultConfigSignInEmail;

  /*
(Output)
Output only. Hash config information.
Structure is documented below.
*/
  HashConfigs?: Array<Identityplatform_ProjectDefaultConfigSignInHashConfig>;

  /*
Configuration options related to authenticated a user by their phone number.
Structure is documented below.
*/
  PhoneNumber?: Identityplatform_ProjectDefaultConfigSignInPhoneNumber;

  // Whether to allow more than one account to have the same email.
  AllowDuplicateEmails?: boolean;

  /*
Configuration options related to authenticating an anonymous user.
Structure is documented below.
*/
  Anonymous?: Identityplatform_ProjectDefaultConfigSignInAnonymous;
}

export function Identityplatform_ProjectDefaultConfigSignIn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Email",
      "Configuration options related to authenticating a user by their email address.\nStructure is documented below.",
      Identityplatform_ProjectDefaultConfigSignInEmail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HashConfigs",
      "(Output)\nOutput only. Hash config information.\nStructure is documented below.",
      Identityplatform_ProjectDefaultConfigSignInHashConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PhoneNumber",
      "Configuration options related to authenticated a user by their phone number.\nStructure is documented below.",
      Identityplatform_ProjectDefaultConfigSignInPhoneNumber_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowDuplicateEmails",
      "Whether to allow more than one account to have the same email.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Anonymous",
      "Configuration options related to authenticating an anonymous user.\nStructure is documented below.",
      Identityplatform_ProjectDefaultConfigSignInAnonymous_GetTypes(),
      false,
      false,
    ),
  ];
}
