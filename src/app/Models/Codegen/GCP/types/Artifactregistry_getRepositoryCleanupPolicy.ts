import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_getRepositoryCleanupPolicyMostRecentVersion,
  Artifactregistry_getRepositoryCleanupPolicyMostRecentVersion_GetTypes,
} from "./Artifactregistry_getRepositoryCleanupPolicyMostRecentVersion";
import {
  Artifactregistry_getRepositoryCleanupPolicyCondition,
  Artifactregistry_getRepositoryCleanupPolicyCondition_GetTypes,
} from "./Artifactregistry_getRepositoryCleanupPolicyCondition";

export interface Artifactregistry_getRepositoryCleanupPolicy {
  // Policy action. Possible values: ["DELETE", "KEEP"]
  Action?: string;

  // Policy condition for matching versions.
  Conditions?: Array<Artifactregistry_getRepositoryCleanupPolicyCondition>;

  //
  Id?: string;

  /*
Policy condition for retaining a minimum number of versions. May only be
specified with a Keep action.
*/
  MostRecentVersions?: Array<Artifactregistry_getRepositoryCleanupPolicyMostRecentVersion>;
}

export function Artifactregistry_getRepositoryCleanupPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Action",
      'Policy action. Possible values: ["DELETE", "KEEP"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Conditions",
      "Policy condition for matching versions.",
      Artifactregistry_getRepositoryCleanupPolicyCondition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "Id", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "MostRecentVersions",
      "Policy condition for retaining a minimum number of versions. May only be\nspecified with a Keep action.",
      Artifactregistry_getRepositoryCleanupPolicyMostRecentVersion_GetTypes(),
      true,
      false,
    ),
  ];
}
