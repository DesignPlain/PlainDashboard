import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind,
  gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind_GetTypes,
} from "./gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind";
import {
  gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind,
  gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind_GetTypes,
} from "./gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind";

export interface gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScope {
  /*
If True, all valid cluster-scoped resources will be restored.
Mutually exclusive to any other field in `clusterResourceRestoreScope`.
*/
  allGroupKinds?: boolean;

  /*
A list of cluster-scoped resource group kinds to NOT restore from the backup.
If specified, all valid cluster-scoped resources will be restored except
for those specified in the list.
Mutually exclusive to any other field in `clusterResourceRestoreScope`.
Structure is documented below.
*/
  excludedGroupKinds?: Array<gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind>;

  /*
If True, no cluster-scoped resources will be restored.
Mutually exclusive to any other field in `clusterResourceRestoreScope`.
*/
  noGroupKinds?: boolean;

  /*
A list of cluster-scoped resource group kinds to restore from the backup.
If specified, only the selected resources will be restored.
Mutually exclusive to any other field in the `clusterResourceRestoreScope`.
Structure is documented below.
*/
  selectedGroupKinds?: Array<gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind>;
}

export function gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScope_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allGroupKinds",
      "If True, all valid cluster-scoped resources will be restored.\nMutually exclusive to any other field in `clusterResourceRestoreScope`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludedGroupKinds",
      "A list of cluster-scoped resource group kinds to NOT restore from the backup.\nIf specified, all valid cluster-scoped resources will be restored except\nfor those specified in the list.\nMutually exclusive to any other field in `clusterResourceRestoreScope`.\nStructure is documented below.",
      gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "noGroupKinds",
      "If True, no cluster-scoped resources will be restored.\nMutually exclusive to any other field in `clusterResourceRestoreScope`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "selectedGroupKinds",
      "A list of cluster-scoped resource group kinds to restore from the backup.\nIf specified, only the selected resources will be restored.\nMutually exclusive to any other field in the `clusterResourceRestoreScope`.\nStructure is documented below.",
      gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind_GetTypes(),
      false,
      false,
    ),
  ];
}
