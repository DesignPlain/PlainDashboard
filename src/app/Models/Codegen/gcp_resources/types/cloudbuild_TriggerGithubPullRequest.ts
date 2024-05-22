import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuild_TriggerGithubPullRequest {
  /*
Configure builds to run whether a repository owner or collaborator need to comment /gcbrun.
Possible values are: `COMMENTS_DISABLED`, `COMMENTS_ENABLED`, `COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY`.
*/
  commentControl?: string;

  // If true, branches that do NOT match the git_ref will trigger a build.
  invertRegex?: boolean;

  /*
Regex of branches to match.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
*/
  branch?: string;
}

export function cloudbuild_TriggerGithubPullRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "branch",
      "Regex of branches to match.\nThe syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "commentControl",
      "Configure builds to run whether a repository owner or collaborator need to comment /gcbrun.\nPossible values are: `COMMENTS_DISABLED`, `COMMENTS_ENABLED`, `COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "invertRegex",
      "If true, branches that do NOT match the git_ref will trigger a build.",
      [],
      false,
      false,
    ),
  ];
}
