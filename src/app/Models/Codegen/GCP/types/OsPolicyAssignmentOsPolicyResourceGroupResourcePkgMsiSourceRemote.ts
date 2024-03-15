export interface OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSourceRemote {
  // SHA256 checksum of the remote file.
  Sha256Checksum?: string;

  /*
URI from which to fetch the object. It should contain
both the protocol and path following the format `{protocol}://{location}`.
*/
  Uri?: string;
}
