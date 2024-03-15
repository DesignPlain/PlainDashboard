import { ConnectionAuthConfigUserPasswordPassword } from "./ConnectionAuthConfigUserPasswordPassword";

export interface ConnectionAuthConfigUserPassword {
  /*
Password for Authentication.
Structure is documented below.
*/
  Password?: ConnectionAuthConfigUserPasswordPassword;

  // Username for Authentication.
  Username?: string;
}
