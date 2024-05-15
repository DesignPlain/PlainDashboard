import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_getTriggerBitbucketServerTriggerConfigPullRequest {
  // If true, branches that do NOT match the git_ref will trigger a build.
  InvertRegex?: boolean;

  /*
Regex of branches to match.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
*/
  Branch?: string;

  // Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]
  CommentControl?: string;
}

export function Cloudbuild_getTriggerBitbucketServerTriggerConfigPullRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CommentControl",
      'Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "InvertRegex",
      "If true, branches that do NOT match the git_ref will trigger a build.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Branch",
      "Regex of branches to match.\nThe syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax",
      [],
      true,
      false,
    ),
  ];
}
