import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  artifactregistry_getRepositoryCleanupPolicyCondition,
  artifactregistry_getRepositoryCleanupPolicyCondition_GetTypes,
} from "./artifactregistry_getRepositoryCleanupPolicyCondition";
import {
  artifactregistry_getRepositoryCleanupPolicyMostRecentVersion,
  artifactregistry_getRepositoryCleanupPolicyMostRecentVersion_GetTypes,
} from "./artifactregistry_getRepositoryCleanupPolicyMostRecentVersion";

export interface artifactregistry_getRepositoryCleanupPolicy {
  // Policy action. Possible values: ["DELETE", "KEEP"]
  action?: string;

  // Policy condition for matching versions.
  conditions?: Array<artifactregistry_getRepositoryCleanupPolicyCondition>;

  //
  id?: string;

  /*
Policy condition for retaining a minimum number of versions. May only be
specified with a Keep action.
*/
  mostRecentVersions?: Array<artifactregistry_getRepositoryCleanupPolicyMostRecentVersion>;
}

export function artifactregistry_getRepositoryCleanupPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "id", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "mostRecentVersions",
      "Policy condition for retaining a minimum number of versions. May only be\nspecified with a Keep action.",
      () =>
        artifactregistry_getRepositoryCleanupPolicyMostRecentVersion_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "action",
      'Policy action. Possible values: ["DELETE", "KEEP"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "conditions",
      "Policy condition for matching versions.",
      () => artifactregistry_getRepositoryCleanupPolicyCondition_GetTypes(),
      true,
      false,
    ),
  ];
}
