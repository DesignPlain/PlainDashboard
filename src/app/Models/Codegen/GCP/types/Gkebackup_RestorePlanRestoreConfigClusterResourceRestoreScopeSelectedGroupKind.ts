import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind {
  /*
API Group string of a Kubernetes resource, e.g.
"apiextensions.k8s.io", "storage.k8s.io", etc.
Use empty string for core group.
*/
  resourceGroup?: string;

  /*
Kind of a Kubernetes resource, e.g.
"CustomResourceDefinition", "StorageClass", etc.
*/
  resourceKind?: string;
}

export function gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceGroup",
      'API Group string of a Kubernetes resource, e.g.\n"apiextensions.k8s.io", "storage.k8s.io", etc.\nUse empty string for core group.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceKind",
      'Kind of a Kubernetes resource, e.g.\n"CustomResourceDefinition", "StorageClass", etc.',
      [],
      false,
      false,
    ),
  ];
}
