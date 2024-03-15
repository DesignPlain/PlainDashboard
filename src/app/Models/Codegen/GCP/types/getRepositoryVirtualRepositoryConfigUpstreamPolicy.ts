export interface getRepositoryVirtualRepositoryConfigUpstreamPolicy {
  // The user-provided ID of the upstream policy.
  Id?: string;

  // Entries with a greater priority value take precedence in the pull order.
  Priority?: number;

  /*
A reference to the repository resource, for example:
"projects/p1/locations/us-central1/repository/repo1".
*/
  Repository?: string;
}
