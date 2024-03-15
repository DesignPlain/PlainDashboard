import { ProjectDefaultConfigSignInHashConfig } from "./ProjectDefaultConfigSignInHashConfig";
import { ProjectDefaultConfigSignInPhoneNumber } from "./ProjectDefaultConfigSignInPhoneNumber";
import { ProjectDefaultConfigSignInAnonymous } from "./ProjectDefaultConfigSignInAnonymous";
import { ProjectDefaultConfigSignInEmail } from "./ProjectDefaultConfigSignInEmail";

export interface ProjectDefaultConfigSignIn {
  /*
(Output)
Output only. Hash config information.
Structure is documented below.
*/
  HashConfigs?: Array<ProjectDefaultConfigSignInHashConfig>;

  /*
Configuration options related to authenticated a user by their phone number.
Structure is documented below.
*/
  PhoneNumber?: ProjectDefaultConfigSignInPhoneNumber;

  // Whether to allow more than one account to have the same email.
  AllowDuplicateEmails?: boolean;

  /*
Configuration options related to authenticating an anonymous user.
Structure is documented below.
*/
  Anonymous?: ProjectDefaultConfigSignInAnonymous;

  /*
Configuration options related to authenticating a user by their email address.
Structure is documented below.
*/
  Email?: ProjectDefaultConfigSignInEmail;
}
