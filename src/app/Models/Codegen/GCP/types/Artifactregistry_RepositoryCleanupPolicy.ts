import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_RepositoryCleanupPolicyCondition,
  Artifactregistry_RepositoryCleanupPolicyCondition_GetTypes,
} from "./Artifactregistry_RepositoryCleanupPolicyCondition";
import {
  Artifactregistry_RepositoryCleanupPolicyMostRecentVersions,
  Artifactregistry_RepositoryCleanupPolicyMostRecentVersions_GetTypes,
} from "./Artifactregistry_RepositoryCleanupPolicyMostRecentVersions";

export interface Artifactregistry_RepositoryCleanupPolicy {
  /*
Policy action.
Possible values are: `DELETE`, `KEEP`.
*/
  Action?: string;

  /*
Policy condition for matching versions.
Structure is documented below.
*/
  Condition?: Artifactregistry_RepositoryCleanupPolicyCondition;

  // The identifier for this object. Format specified above.
  Id?: string;

  /*
Policy condition for retaining a minimum number of versions. May only be
specified with a Keep action.
Structure is documented below.
*/
  MostRecentVersions?: Artifactregistry_RepositoryCleanupPolicyMostRecentVersions;
}

export function Artifactregistry_RepositoryCleanupPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Action",
      "Policy action.\nPossible values are: `DELETE`, `KEEP`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Condition",
      "Policy condition for matching versions.\nStructure is documented below.",
      Artifactregistry_RepositoryCleanupPolicyCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MostRecentVersions",
      "Policy condition for retaining a minimum number of versions. May only be\nspecified with a Keep action.\nStructure is documented below.",
      Artifactregistry_RepositoryCleanupPolicyMostRecentVersions_GetTypes(),
      false,
      false,
    ),
  ];
}
