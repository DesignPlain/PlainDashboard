import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_RepositoryCleanupPolicyCondition {
  // Match versions newer than a duration.
  NewerThan?: string;

  // Match versions older than a duration.
  OlderThan?: string;

  // Match versions by package prefix. Applied on any prefix match.
  PackageNamePrefixes?: Array<string>;

  // Match versions by tag prefix. Applied on any prefix match.
  TagPrefixes?: Array<string>;

  /*
Match versions by tag status.
Default value is `ANY`.
Possible values are: `TAGGED`, `UNTAGGED`, `ANY`.
*/
  TagState?: string;

  // Match versions by version name prefix. Applied on any prefix match.
  VersionNamePrefixes?: Array<string>;
}

export function Artifactregistry_RepositoryCleanupPolicyCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NewerThan",
      "Match versions newer than a duration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OlderThan",
      "Match versions older than a duration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PackageNamePrefixes",
      "Match versions by package prefix. Applied on any prefix match.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "TagPrefixes",
      "Match versions by tag prefix. Applied on any prefix match.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TagState",
      "Match versions by tag status.\nDefault value is `ANY`.\nPossible values are: `TAGGED`, `UNTAGGED`, `ANY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VersionNamePrefixes",
      "Match versions by version name prefix. Applied on any prefix match.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
