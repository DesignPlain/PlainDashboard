import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuild_getTriggerBuildSourceRepoSource {
  /*
Directory, relative to the source root, in which to run the build.
This must be a relative path. If a step's dir is specified and is an absolute path,
this value is ignored for that step's execution.
*/
  dir?: string;

  // Only trigger a build if the revision regex does NOT match the revision regex.
  invertRegex?: boolean;

  /*
ID of the project that owns the Cloud Source Repository.
If omitted, the project ID requesting the build is assumed.
*/
  projectId?: string;

  // Name of the Cloud Source Repository.
  repoName?: string;

  // Substitutions to use in a triggered build. Should only be used with triggers.run
  substitutions?: Map<string, string>;

  /*
Regex matching tags to build. Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax
*/
  tagName?: string;

  /*
Regex matching branches to build. Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax
*/
  branchName?: string;

  // Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.
  commitSha?: string;
}

export function cloudbuild_getTriggerBuildSourceRepoSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "substitutions",
      "Substitutions to use in a triggered build. Should only be used with triggers.run",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tagName",
      "Regex matching tags to build. Exactly one a of branch name, tag, or commit SHA must be provided.\nThe syntax of the regular expressions accepted is the syntax accepted by RE2 and\ndescribed at https://github.com/google/re2/wiki/Syntax",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "branchName",
      "Regex matching branches to build. Exactly one a of branch name, tag, or commit SHA must be provided.\nThe syntax of the regular expressions accepted is the syntax accepted by RE2 and\ndescribed at https://github.com/google/re2/wiki/Syntax",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "commitSha",
      "Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dir",
      "Directory, relative to the source root, in which to run the build.\nThis must be a relative path. If a step's dir is specified and is an absolute path,\nthis value is ignored for that step's execution.",
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
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "ID of the project that owns the Cloud Source Repository.\nIf omitted, the project ID requesting the build is assumed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repoName",
      "Name of the Cloud Source Repository.",
      [],
      true,
      false,
    ),
  ];
}
