export interface OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper {
  // The display name of the repository.
  DisplayName?: string;

  // URIs of GPG keys.
  GpgKeys?: Array<string>;

  /*
A one word, unique name for this repository. This is the
`repo id` in the zypper config file and also the `display_name` if
`display_name` is omitted. This id is also used as the unique identifier
when checking for GuestPolicy conflicts.
*/
  Id?: string;

  // The location of the repository directory.
  BaseUrl?: string;
}
