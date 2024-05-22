import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuild_getTriggerTriggerTemplate {
  /*
ID of the project that owns the Cloud Source Repository. If
omitted, the project ID requesting the build is assumed.
*/
  projectId?: string;

  // Name of the Cloud Source Repository. If omitted, the name "default" is assumed.
  repoName?: string;

  /*
Name of the tag to build. Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression.
*/
  tagName?: string;

  /*
Name of the branch to build. Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression.
*/
  branchName?: string;

  // Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.
  commitSha?: string;

  /*
Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution.
*/
  dir?: string;

  // Only trigger a build if the revision regex does NOT match the revision regex.
  invertRegex?: boolean;
}

export function cloudbuild_getTriggerTriggerTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "ID of the project that owns the Cloud Source Repository. If\nomitted, the project ID requesting the build is assumed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repoName",
      'Name of the Cloud Source Repository. If omitted, the name "default" is assumed.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tagName",
      "Name of the tag to build. Exactly one of a branch name, tag, or commit SHA must be provided.\nThis field is a regular expression.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "branchName",
      "Name of the branch to build. Exactly one a of branch name, tag, or commit SHA must be provided.\nThis field is a regular expression.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "commitSha",
      "Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dir",
      "Directory, relative to the source root, in which to run the build.\n\nThis must be a relative path. If a step's dir is specified and\nis an absolute path, this value is ignored for that step's\nexecution.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "invertRegex",
      "Only trigger a build if the revision regex does NOT match the revision regex.",
      [],
      true,
      false,
    ),
  ];
}
