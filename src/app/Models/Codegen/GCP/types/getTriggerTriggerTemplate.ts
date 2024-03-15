export interface getTriggerTriggerTemplate {
  /*
Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution.
*/
  Dir?: string;

  // Only trigger a build if the revision regex does NOT match the revision regex.
  InvertRegex?: boolean;

  /*
ID of the project that owns the Cloud Source Repository. If
omitted, the project ID requesting the build is assumed.
*/
  ProjectId?: string;

  // Name of the Cloud Source Repository. If omitted, the name "default" is assumed.
  RepoName?: string;

  /*
Name of the tag to build. Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression.
*/
  TagName?: string;

  /*
Name of the branch to build. Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression.
*/
  BranchName?: string;

  // Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.
  CommitSha?: string;
}
