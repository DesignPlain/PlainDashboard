import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind,
  Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind_GetTypes,
} from "./Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind";
import {
  Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind,
  Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind_GetTypes,
} from "./Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind";

export interface Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScope {
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
  ExcludedGroupKinds?: Array<Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind>;

  /*
If True, no cluster-scoped resources will be restored.
Mutually exclusive to any other field in `clusterResourceRestoreScope`.
*/
  NoGroupKinds?: boolean;

  /*
A list of cluster-scoped resource group kinds to restore from the backup.
If specified, only the selected resources will be restored.
Mutually exclusive to any other field in the `clusterResourceRestoreScope`.
Structure is documented below.
*/
  SelectedGroupKinds?: Array<Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind>;
}

export function Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScope_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllGroupKinds",
      "If True, all valid cluster-scoped resources will be restored.\nMutually exclusive to any other field in `clusterResourceRestoreScope`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExcludedGroupKinds",
      "A list of cluster-scoped resource group kinds to NOT restore from the backup.\nIf specified, all valid cluster-scoped resources will be restored except\nfor those specified in the list.\nMutually exclusive to any other field in `clusterResourceRestoreScope`.\nStructure is documented below.",
      Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKind_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "NoGroupKinds",
      "If True, no cluster-scoped resources will be restored.\nMutually exclusive to any other field in `clusterResourceRestoreScope`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SelectedGroupKinds",
      "A list of cluster-scoped resource group kinds to restore from the backup.\nIf specified, only the selected resources will be restored.\nMutually exclusive to any other field in the `clusterResourceRestoreScope`.\nStructure is documented below.",
      Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind_GetTypes(),
      false,
      false,
    ),
  ];
}
