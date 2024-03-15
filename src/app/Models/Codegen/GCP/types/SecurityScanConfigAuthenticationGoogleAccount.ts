export interface SecurityScanConfigAuthenticationGoogleAccount {
  /*
The password of the Google account. The credential is stored encrypted
in GCP.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // The user name of the Google account.
  Username?: string;
}
