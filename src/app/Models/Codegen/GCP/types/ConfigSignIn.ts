import { ConfigSignInAnonymous } from "./ConfigSignInAnonymous";
import { ConfigSignInEmail } from "./ConfigSignInEmail";
import { ConfigSignInHashConfig } from "./ConfigSignInHashConfig";
import { ConfigSignInPhoneNumber } from "./ConfigSignInPhoneNumber";

export interface ConfigSignIn {
  // Whether to allow more than one account to have the same email.
  AllowDuplicateEmails?: boolean;

  /*
Configuration options related to authenticating an anonymous user.
Structure is documented below.
*/
  Anonymous?: ConfigSignInAnonymous;

  /*
Configuration options related to authenticating a user by their email address.
Structure is documented below.
*/
  Email?: ConfigSignInEmail;

  /*
(Output)
Output only. Hash config information.
Structure is documented below.
*/
  HashConfigs?: Array<ConfigSignInHashConfig>;

  /*
Configuration options related to authenticated a user by their phone number.
Structure is documented below.
*/
  PhoneNumber?: ConfigSignInPhoneNumber;
}
