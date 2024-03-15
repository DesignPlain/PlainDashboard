export interface GuestPoliciesPackageRepositoryYum {
  // URIs of GPG keys.
  GpgKeys?: Array<string>;

  /*
A one word, unique name for this repository. This is the repo id in the Yum config file and also the displayName
if displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.
*/
  Id?: string;

  // The location of the repository directory.
  BaseUrl?: string;

  // The display name of the repository.
  DisplayName?: string;
}
