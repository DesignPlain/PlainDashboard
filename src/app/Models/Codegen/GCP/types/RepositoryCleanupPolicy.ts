import { RepositoryCleanupPolicyCondition } from "./RepositoryCleanupPolicyCondition";
import { RepositoryCleanupPolicyMostRecentVersions } from "./RepositoryCleanupPolicyMostRecentVersions";

export interface RepositoryCleanupPolicy {
  /*
Policy action.
Possible values are: `DELETE`, `KEEP`.
*/
  Action?: string;

  /*
Policy condition for matching versions.
Structure is documented below.
*/
  Condition?: RepositoryCleanupPolicyCondition;

  // The identifier for this object. Format specified above.
  Id?: string;

  /*
Policy condition for retaining a minimum number of versions. May only be
specified with a Keep action.
Structure is documented below.
*/
  MostRecentVersions?: RepositoryCleanupPolicyMostRecentVersions;
}
