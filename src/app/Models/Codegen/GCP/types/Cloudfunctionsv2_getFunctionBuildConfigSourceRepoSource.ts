import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource {
  // Regex matching tags to build.
  TagName?: string;

  // Regex matching branches to build.
  BranchName?: string;

  // Regex matching tags to build.
  CommitSha?: string;

  // Directory, relative to the source root, in which to run the build.
  Dir?: string;

  /*
Only trigger a build if the revision regex does
NOT match the revision regex.
*/
  InvertRegex?: boolean;

  /*
ID of the project that owns the Cloud Source Repository. If omitted, the
project ID requesting the build is assumed.
*/
  ProjectId?: string;

  // Name of the Cloud Source Repository.
  RepoName?: string;
}

export function Cloudfunctionsv2_getFunctionBuildConfigSourceRepoSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TagName",
      "Regex matching tags to build.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BranchName",
      "Regex matching branches to build.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CommitSha",
      "Regex matching tags to build.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Dir",
      "Directory, relative to the source root, in which to run the build.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "InvertRegex",
      "Only trigger a build if the revision regex does\nNOT match the revision regex.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "ID of the project that owns the Cloud Source Repository. If omitted, the\nproject ID requesting the build is assumed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RepoName",
      "Name of the Cloud Source Repository.",
      [],
      true,
      false,
    ),
  ];
}
