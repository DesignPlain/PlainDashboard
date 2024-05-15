import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_getTriggerGithubPullRequest {
  // If true, branches that do NOT match the git_ref will trigger a build.
  InvertRegex?: boolean;

  // Regex of branches to match.
  Branch?: string;

  // Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]
  CommentControl?: string;
}

export function Cloudbuild_getTriggerGithubPullRequest_GetTypes(): DynamicUIProps[] {
  return [
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
      "Regex of branches to match.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CommentControl",
      'Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]',
      [],
      true,
      false,
    ),
  ];
}
