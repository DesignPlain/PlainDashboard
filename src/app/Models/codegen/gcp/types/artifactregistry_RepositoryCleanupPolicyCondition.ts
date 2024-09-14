import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface artifactregistry_RepositoryCleanupPolicyCondition {
  // Match versions older than a duration.
  olderThan?: string;

  // Match versions by package prefix. Applied on any prefix match.
  packageNamePrefixes?: Array<string>;

  // Match versions by tag prefix. Applied on any prefix match.
  tagPrefixes?: Array<string>;

  /*
Match versions by tag status.
Default value is `ANY`.
Possible values are: `TAGGED`, `UNTAGGED`, `ANY`.
*/
  tagState?: string;

  // Match versions by version name prefix. Applied on any prefix match.
  versionNamePrefixes?: Array<string>;

  // Match versions newer than a duration.
  newerThan?: string;
}

export function artifactregistry_RepositoryCleanupPolicyCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "olderThan",
      "Match versions older than a duration.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "packageNamePrefixes",
      "Match versions by package prefix. Applied on any prefix match.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tagPrefixes",
      "Match versions by tag prefix. Applied on any prefix match.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tagState",
      "Match versions by tag status.\nDefault value is `ANY`.\nPossible values are: `TAGGED`, `UNTAGGED`, `ANY`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "versionNamePrefixes",
      "Match versions by version name prefix. Applied on any prefix match.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "newerThan",
      "Match versions newer than a duration.",
      () => [],
      false,
      false,
    ),
  ];
}
