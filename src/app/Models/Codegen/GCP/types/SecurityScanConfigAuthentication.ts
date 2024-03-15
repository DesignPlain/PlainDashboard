import { SecurityScanConfigAuthenticationCustomAccount } from "./SecurityScanConfigAuthenticationCustomAccount";
import { SecurityScanConfigAuthenticationGoogleAccount } from "./SecurityScanConfigAuthenticationGoogleAccount";

export interface SecurityScanConfigAuthentication {
  /*
Describes authentication configuration that uses a custom account.
Structure is documented below.
*/
  CustomAccount?: SecurityScanConfigAuthenticationCustomAccount;

  /*
Describes authentication configuration that uses a Google account.
Structure is documented below.
*/
  GoogleAccount?: SecurityScanConfigAuthenticationGoogleAccount;
}
