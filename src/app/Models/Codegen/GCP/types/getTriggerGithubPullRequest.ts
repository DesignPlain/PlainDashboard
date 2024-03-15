export interface getTriggerGithubPullRequest {
  // Regex of branches to match.
  Branch?: string;

  // Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]
  CommentControl?: string;

  // If true, branches that do NOT match the git_ref will trigger a build.
  InvertRegex?: boolean;
}
