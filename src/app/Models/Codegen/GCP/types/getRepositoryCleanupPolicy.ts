import { getRepositoryCleanupPolicyCondition } from "./getRepositoryCleanupPolicyCondition";
import { getRepositoryCleanupPolicyMostRecentVersion } from "./getRepositoryCleanupPolicyMostRecentVersion";

export interface getRepositoryCleanupPolicy {
  // Policy action. Possible values: ["DELETE", "KEEP"]
  Action?: string;

  // Policy condition for matching versions.
  Conditions?: Array<getRepositoryCleanupPolicyCondition>;

  //
  Id?: string;

  /*
Policy condition for retaining a minimum number of versions. May only be
specified with a Keep action.
*/
  MostRecentVersions?: Array<getRepositoryCleanupPolicyMostRecentVersion>;
}
