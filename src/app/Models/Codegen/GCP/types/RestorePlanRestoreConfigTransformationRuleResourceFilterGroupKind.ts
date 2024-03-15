export interface RestorePlanRestoreConfigTransformationRuleResourceFilterGroupKind {
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