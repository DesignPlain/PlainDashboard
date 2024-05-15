import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_getTriggerTriggerTemplate {
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
}

export function Cloudbuild_getTriggerTriggerTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "InvertRegex",
      "Only trigger a build if the revision regex does NOT match the revision regex.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "ID of the project that owns the Cloud Source Repository. If\nomitted, the project ID requesting the build is assumed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RepoName",
      'Name of the Cloud Source Repository. If omitted, the name "default" is assumed.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TagName",
      "Name of the tag to build. Exactly one of a branch name, tag, or commit SHA must be provided.\nThis field is a regular expression.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BranchName",
      "Name of the branch to build. Exactly one a of branch name, tag, or commit SHA must be provided.\nThis field is a regular expression.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CommitSha",
      "Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Dir",
      "Directory, relative to the source root, in which to run the build.\n\nThis must be a relative path. If a step's dir is specified and\nis an absolute path, this value is ignored for that step's\nexecution.",
      [],
      true,
      false,
    ),
  ];
}
