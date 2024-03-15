import { RestorePlanRestoreConfigSelectedApplicationsNamespacedName } from "./RestorePlanRestoreConfigSelectedApplicationsNamespacedName";

export interface RestorePlanRestoreConfigSelectedApplications {
  /*
A list of namespaced Kubernetes resources.
Structure is documented below.
*/
  NamespacedNames?: Array<RestorePlanRestoreConfigSelectedApplicationsNamespacedName>;
}
