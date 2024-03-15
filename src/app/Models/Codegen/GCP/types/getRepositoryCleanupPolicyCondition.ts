export interface getRepositoryCleanupPolicyCondition {
  // Match versions by version name prefix. Applied on any prefix match.
  VersionNamePrefixes?: Array<string>;

  // Match versions newer than a duration.
  NewerThan?: string;

  // Match versions older than a duration.
  OlderThan?: string;

  // Match versions by package prefix. Applied on any prefix match.
  PackageNamePrefixes?: Array<string>;

  // Match versions by tag prefix. Applied on any prefix match.
  TagPrefixes?: Array<string>;

  // Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"]
  TagState?: string;
}