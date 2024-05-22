import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  artifactregistry_RepositoryCleanupPolicyCondition,
  artifactregistry_RepositoryCleanupPolicyCondition_GetTypes,
} from "./artifactregistry_RepositoryCleanupPolicyCondition";
import {
  artifactregistry_RepositoryCleanupPolicyMostRecentVersions,
  artifactregistry_RepositoryCleanupPolicyMostRecentVersions_GetTypes,
} from "./artifactregistry_RepositoryCleanupPolicyMostRecentVersions";

export interface artifactregistry_RepositoryCleanupPolicy {
  /*
Policy action.
Possible values are: `DELETE`, `KEEP`.
*/
  action?: string;

  /*
Policy condition for matching versions.
Structure is documented below.
*/
  condition?: artifactregistry_RepositoryCleanupPolicyCondition;

  // The identifier for this object. Format specified above.
  id?: string;

  /*
Policy condition for retaining a minimum number of versions. May only be
specified with a Keep action.
Structure is documented below.
*/
  mostRecentVersions?: artifactregistry_RepositoryCleanupPolicyMostRecentVersions;
}

export function artifactregistry_RepositoryCleanupPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "mostRecentVersions",
      "Policy condition for retaining a minimum number of versions. May only be\nspecified with a Keep action.\nStructure is documented below.",
      artifactregistry_RepositoryCleanupPolicyMostRecentVersions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "action",
      "Policy action.\nPossible values are: `DELETE`, `KEEP`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "Policy condition for matching versions.\nStructure is documented below.",
      artifactregistry_RepositoryCleanupPolicyCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
  ];
}
