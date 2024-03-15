export interface SecurityScanConfigAuthenticationCustomAccount {
  // The login form URL of the website.
  LoginUrl?: string;

  /*
The password of the custom account. The credential is stored encrypted
in GCP.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // The user name of the custom account.
  Username?: string;
}
