export interface V2VmServiceAccount {
  // Email address of the service account. If empty, default Compute service account will be used.
  Email?: string;

  /*
The list of scopes to be made available for this service account. If empty, access to all
Cloud APIs will be allowed.
*/
  Scopes?: Array<string>;
}
