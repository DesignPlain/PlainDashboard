import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface artifactregistry_RepositoryCleanupPolicyMostRecentVersions {
  // Minimum number of versions to keep.
  keepCount?: number;

  // Match versions by package prefix. Applied on any prefix match.
  packageNamePrefixes?: Array<string>;
}

export function artifactregistry_RepositoryCleanupPolicyMostRecentVersions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "keepCount",
      "Minimum number of versions to keep.",
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
  ];
}
