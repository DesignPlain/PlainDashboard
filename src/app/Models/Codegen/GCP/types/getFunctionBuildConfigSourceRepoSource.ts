export interface getFunctionBuildConfigSourceRepoSource {
  // Name of the Cloud Source Repository.
  RepoName?: string;

  // Regex matching tags to build.
  TagName?: string;

  // Regex matching branches to build.
  BranchName?: string;

  // Regex matching tags to build.
  CommitSha?: string;

  // Directory, relative to the source root, in which to run the build.
  Dir?: string;

  /*
Only trigger a build if the revision regex does
NOT match the revision regex.
*/
  InvertRegex?: boolean;

  /*
ID of the project that owns the Cloud Source Repository. If omitted, the
project ID requesting the build is assumed.
*/
  ProjectId?: string;
}
