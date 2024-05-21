import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface artifactregistry_getRepositoryCleanupPolicyMostRecentVersion {
  // Minimum number of versions to keep.
  keepCount?: number;

  // Match versions by package prefix. Applied on any prefix match.
  packageNamePrefixes?: Array<string>;
}

export function artifactregistry_getRepositoryCleanupPolicyMostRecentVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "keepCount",
      "Minimum number of versions to keep.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "packageNamePrefixes",
      "Match versions by package prefix. Applied on any prefix match.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
