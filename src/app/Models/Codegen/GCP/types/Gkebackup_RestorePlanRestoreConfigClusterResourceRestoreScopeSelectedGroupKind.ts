import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind {
  /*
Kind of a Kubernetes resource, e.g.
"CustomResourceDefinition", "StorageClass", etc.
*/
  ResourceKind?: string;

  /*
API Group string of a Kubernetes resource, e.g.
"apiextensions.k8s.io", "storage.k8s.io", etc.
Use empty string for core group.
*/
  ResourceGroup?: string;
}

export function Gkebackup_RestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKind_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ResourceKind",
      'Kind of a Kubernetes resource, e.g.\n"CustomResourceDefinition", "StorageClass", etc.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResourceGroup",
      'API Group string of a Kubernetes resource, e.g.\n"apiextensions.k8s.io", "storage.k8s.io", etc.\nUse empty string for core group.',
      [],
      false,
      false,
    ),
  ];
}
