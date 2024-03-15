export interface RepositoryCleanupPolicyMostRecentVersions {
  // Minimum number of versions to keep.
  KeepCount?: number;

  // Match versions by package prefix. Applied on any prefix match.
  PackageNamePrefixes?: Array<string>;
}
