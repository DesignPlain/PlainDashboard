export interface InstanceGceSetupServiceAccount {
  // Optional. Email address of the service account.
  Email?: string;

  /*
(Output)
Output only. The list of scopes to be made available for this
service account. Set by the CLH to https://www.googleapis.com/auth/cloud-platform
*/
  Scopes?: Array<string>;
}
