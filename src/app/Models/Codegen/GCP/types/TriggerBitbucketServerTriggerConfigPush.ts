export interface TriggerBitbucketServerTriggerConfigPush {
  // Regex of tags to match.  Specify only one of branch or tag.
  Tag?: string;

  // Regex of branches to match.  Specify only one of branch or tag.
  Branch?: string;

  // When true, only trigger a build if the revision regex does NOT match the gitRef regex.
  InvertRegex?: boolean;
}
