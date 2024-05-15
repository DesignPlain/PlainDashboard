import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_RepositoryCleanupPolicyMostRecentVersions {
  // Minimum number of versions to keep.
  KeepCount?: number;

  // Match versions by package prefix. Applied on any prefix match.
  PackageNamePrefixes?: Array<string>;
}

export function Artifactregistry_RepositoryCleanupPolicyMostRecentVersions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "KeepCount",
      "Minimum number of versions to keep.",
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
  ];
}
