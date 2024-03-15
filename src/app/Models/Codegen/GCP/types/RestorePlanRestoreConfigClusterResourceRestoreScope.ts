import { RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind } from "./RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind";
import { RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind } from "./RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind";

export interface RestorePlanRestoreConfigClusterResourceRestoreScope {
  /*
A list of cluster-scoped resource group kinds to restore from the backup.
If specified, only the selected resources will be restored.
Mutually exclusive to any other field in the `clusterResourceRestoreScope`.
Structure is documented below.
*/
  SelectedGroupKinds?: Array<RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind>;

  /*
If True, all valid cluster-scoped resources will be restored.
Mutually exclusive to any other field in `clusterResourceRestoreScope`.
*/
  AllGroupKinds?: boolean;

  /*
A list of cluster-scoped resource group kinds to NOT restore from the backup.
If specified, all valid cluster-scoped resources will be restored except
for those specified in the list.
Mutually exclusive to any other field in `clusterResourceRestoreScope`.
Structure is documented below.
*/
  ExcludedGroupKinds?: Array<RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind>;

  /*
If True, no cluster-scoped resources will be restored.
Mutually exclusive to any other field in `clusterResourceRestoreScope`.
*/
  NoGroupKinds?: boolean;
}
