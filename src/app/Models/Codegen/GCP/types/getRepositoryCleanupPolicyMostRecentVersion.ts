export interface getRepositoryCleanupPolicyMostRecentVersion {
  // Match versions by package prefix. Applied on any prefix match.
  PackageNamePrefixes?: Array<string>;

  // Minimum number of versions to keep.
  KeepCount?: number;
}
