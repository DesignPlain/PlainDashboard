import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudbuild_getTriggerGithubPullRequest {
  // Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]
  commentControl?: string;

  // If true, branches that do NOT match the git_ref will trigger a build.
  invertRegex?: boolean;

  // Regex of branches to match.
  branch?: string;
}

export function cloudbuild_getTriggerGithubPullRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "commentControl",
      'Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "invertRegex",
      "If true, branches that do NOT match the git_ref will trigger a build.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "branch",
      "Regex of branches to match.",
      () => [],
      true,
      false,
    ),
  ];
}
