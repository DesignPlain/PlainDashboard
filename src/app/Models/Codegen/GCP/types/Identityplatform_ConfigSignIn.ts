import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ConfigSignInPhoneNumber,
  Identityplatform_ConfigSignInPhoneNumber_GetTypes,
} from "./Identityplatform_ConfigSignInPhoneNumber";
import {
  Identityplatform_ConfigSignInAnonymous,
  Identityplatform_ConfigSignInAnonymous_GetTypes,
} from "./Identityplatform_ConfigSignInAnonymous";
import {
  Identityplatform_ConfigSignInEmail,
  Identityplatform_ConfigSignInEmail_GetTypes,
} from "./Identityplatform_ConfigSignInEmail";
import {
  Identityplatform_ConfigSignInHashConfig,
  Identityplatform_ConfigSignInHashConfig_GetTypes,
} from "./Identityplatform_ConfigSignInHashConfig";

export interface Identityplatform_ConfigSignIn {
  /*
Configuration options related to authenticated a user by their phone number.
Structure is documented below.
*/
  PhoneNumber?: Identityplatform_ConfigSignInPhoneNumber;

  // Whether to allow more than one account to have the same email.
  AllowDuplicateEmails?: boolean;

  /*
Configuration options related to authenticating an anonymous user.
Structure is documented below.
*/
  Anonymous?: Identityplatform_ConfigSignInAnonymous;

  /*
Configuration options related to authenticating a user by their email address.
Structure is documented below.
*/
  Email?: Identityplatform_ConfigSignInEmail;

  /*
(Output)
Output only. Hash config information.
Structure is documented below.
*/
  HashConfigs?: Array<Identityplatform_ConfigSignInHashConfig>;
}

export function Identityplatform_ConfigSignIn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PhoneNumber",
      "Configuration options related to authenticated a user by their phone number.\nStructure is documented below.",
      Identityplatform_ConfigSignInPhoneNumber_GetTypes(),
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
      Identityplatform_ConfigSignInAnonymous_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Email",
      "Configuration options related to authenticating a user by their email address.\nStructure is documented below.",
      Identityplatform_ConfigSignInEmail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HashConfigs",
      "(Output)\nOutput only. Hash config information.\nStructure is documented below.",
      Identityplatform_ConfigSignInHashConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
