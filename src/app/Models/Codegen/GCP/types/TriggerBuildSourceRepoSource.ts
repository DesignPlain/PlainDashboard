export interface TriggerBuildSourceRepoSource {
  // Name of the Cloud Source Repository.
  RepoName?: string;

  // Substitutions to use in a triggered build. Should only be used with triggers.run
  Substitutions?: Map<string, string>;

  /*
Regex matching tags to build. Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax
*/
  TagName?: string;

  /*
Regex matching branches to build. Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax
*/
  BranchName?: string;

  // Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.
  CommitSha?: string;

  /*
Directory, relative to the source root, in which to run the build.
This must be a relative path. If a step's dir is specified and is an absolute path,
this value is ignored for that step's execution.
*/
  Dir?: string;

  // Only trigger a build if the revision regex does NOT match the revision regex.
  InvertRegex?: boolean;

  /*
ID of the project that owns the Cloud Source Repository.
If omitted, the project ID requesting the build is assumed.
*/
  ProjectId?: string;
}
