import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkebackup_RestorePlanRestoreConfigSelectedApplications,
  gkebackup_RestorePlanRestoreConfigSelectedApplications_GetTypes,
} from "./gkebackup_RestorePlanRestoreConfigSelectedApplications";
import {
  gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScope,
  gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScope_GetTypes,
} from "./gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScope";
import {
  gkebackup_RestorePlanRestoreConfigSelectedNamespaces,
  gkebackup_RestorePlanRestoreConfigSelectedNamespaces_GetTypes,
} from "./gkebackup_RestorePlanRestoreConfigSelectedNamespaces";
import {
  gkebackup_RestorePlanRestoreConfigTransformationRule,
  gkebackup_RestorePlanRestoreConfigTransformationRule_GetTypes,
} from "./gkebackup_RestorePlanRestoreConfigTransformationRule";
import {
  gkebackup_RestorePlanRestoreConfigExcludedNamespaces,
  gkebackup_RestorePlanRestoreConfigExcludedNamespaces_GetTypes,
} from "./gkebackup_RestorePlanRestoreConfigExcludedNamespaces";

export interface gkebackup_RestorePlanRestoreConfig {
  /*
If True, restore all namespaced resources in the Backup.
Setting this field to False will result in an error.
*/
  allNamespaces?: boolean;

  /*
A list of selected namespaces excluded from restoration.
All namespaces except those in this list will be restored.
Structure is documented below.
*/
  excludedNamespaces?: gkebackup_RestorePlanRestoreConfigExcludedNamespaces;

  /*
Defines the behavior for handling the situation where sets of namespaced resources
being restored already exist in the target cluster.
This MUST be set to a value other than `NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED`
if the `namespacedResourceRestoreScope` is anything other than `noNamespaces`.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#namespacedresourcerestoremode
for more information on each mode.
Possible values are: `DELETE_AND_RESTORE`, `FAIL_ON_CONFLICT`.
*/
  namespacedResourceRestoreMode?: string;

  /*
A list of selected ProtectedApplications to restore.
The listed ProtectedApplications and all the resources
to which they refer will be restored.
Structure is documented below.
*/
  selectedApplications?: gkebackup_RestorePlanRestoreConfigSelectedApplications;

  /*
Specifies the mechanism to be used to restore volume data.
This should be set to a value other than `NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED`
if the `namespacedResourceRestoreScope` is anything other than `noNamespaces`.
If not specified, it will be treated as `NO_VOLUME_DATA_RESTORATION`.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
for more information on each policy option.
Possible values are: `RESTORE_VOLUME_DATA_FROM_BACKUP`, `REUSE_VOLUME_HANDLE_FROM_BACKUP`, `NO_VOLUME_DATA_RESTORATION`.
*/
  volumeDataRestorePolicy?: string;

  /*
Defines the behavior for handling the situation where cluster-scoped resources
being restored already exist in the target cluster.
This MUST be set to a value other than `CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED`
if `clusterResourceRestoreScope` is anyting other than `noGroupKinds`.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#clusterresourceconflictpolicy
for more information on each policy option.
Possible values are: `USE_EXISTING_VERSION`, `USE_BACKUP_VERSION`.
*/
  clusterResourceConflictPolicy?: string;

  /*
Identifies the cluster-scoped resources to restore from the Backup.
Structure is documented below.
*/
  clusterResourceRestoreScope?: gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScope;

  /*
Do not restore any namespaced resources if set to "True".
Specifying this field to "False" is not allowed.
*/
  noNamespaces?: boolean;

  /*
A list of selected namespaces to restore from the Backup.
The listed Namespaces and all resources contained in them will be restored.
Structure is documented below.
*/
  selectedNamespaces?: gkebackup_RestorePlanRestoreConfigSelectedNamespaces;

  /*
A list of transformation rules to be applied against Kubernetes
resources as they are selected for restoration from a Backup.
Rules are executed in order defined - this order matters,
as changes made by a rule may impact the filtering logic of subsequent
rules. An empty list means no transformation will occur.
Structure is documented below.
*/
  transformationRules?: Array<gkebackup_RestorePlanRestoreConfigTransformationRule>;
}

export function gkebackup_RestorePlanRestoreConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "clusterResourceRestoreScope",
      "Identifies the cluster-scoped resources to restore from the Backup.\nStructure is documented below.",
      gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScope_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "noNamespaces",
      'Do not restore any namespaced resources if set to "True".\nSpecifying this field to "False" is not allowed.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allNamespaces",
      "If True, restore all namespaced resources in the Backup.\nSetting this field to False will result in an error.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "excludedNamespaces",
      "A list of selected namespaces excluded from restoration.\nAll namespaces except those in this list will be restored.\nStructure is documented below.",
      gkebackup_RestorePlanRestoreConfigExcludedNamespaces_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespacedResourceRestoreMode",
      "Defines the behavior for handling the situation where sets of namespaced resources\nbeing restored already exist in the target cluster.\nThis MUST be set to a value other than `NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED`\nif the `namespacedResourceRestoreScope` is anything other than `noNamespaces`.\nSee https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#namespacedresourcerestoremode\nfor more information on each mode.\nPossible values are: `DELETE_AND_RESTORE`, `FAIL_ON_CONFLICT`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "selectedApplications",
      "A list of selected ProtectedApplications to restore.\nThe listed ProtectedApplications and all the resources\nto which they refer will be restored.\nStructure is documented below.",
      gkebackup_RestorePlanRestoreConfigSelectedApplications_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeDataRestorePolicy",
      "Specifies the mechanism to be used to restore volume data.\nThis should be set to a value other than `NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED`\nif the `namespacedResourceRestoreScope` is anything other than `noNamespaces`.\nIf not specified, it will be treated as `NO_VOLUME_DATA_RESTORATION`.\nSee https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy\nfor more information on each policy option.\nPossible values are: `RESTORE_VOLUME_DATA_FROM_BACKUP`, `REUSE_VOLUME_HANDLE_FROM_BACKUP`, `NO_VOLUME_DATA_RESTORATION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterResourceConflictPolicy",
      "Defines the behavior for handling the situation where cluster-scoped resources\nbeing restored already exist in the target cluster.\nThis MUST be set to a value other than `CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED`\nif `clusterResourceRestoreScope` is anyting other than `noGroupKinds`.\nSee https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#clusterresourceconflictpolicy\nfor more information on each policy option.\nPossible values are: `USE_EXISTING_VERSION`, `USE_BACKUP_VERSION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "selectedNamespaces",
      "A list of selected namespaces to restore from the Backup.\nThe listed Namespaces and all resources contained in them will be restored.\nStructure is documented below.",
      gkebackup_RestorePlanRestoreConfigSelectedNamespaces_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transformationRules",
      "A list of transformation rules to be applied against Kubernetes\nresources as they are selected for restoration from a Backup.\nRules are executed in order defined - this order matters,\nas changes made by a rule may impact the filtering logic of subsequent\nrules. An empty list means no transformation will occur.\nStructure is documented below.",
      gkebackup_RestorePlanRestoreConfigTransformationRule_GetTypes(),
      false,
      false,
    ),
  ];
}
