export interface getTriggerGithubPush {
  // Regex of branches to match.  Specify only one of branch or tag.
  Branch?: string;

  // When true, only trigger a build if the revision regex does NOT match the git_ref regex.
  InvertRegex?: boolean;

  // Regex of tags to match.  Specify only one of branch or tag.
  Tag?: string;
}
