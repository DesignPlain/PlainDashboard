import { BackupPlanBackupConfigSelectedApplicationsNamespacedName } from "./BackupPlanBackupConfigSelectedApplicationsNamespacedName";

export interface BackupPlanBackupConfigSelectedApplications {
  /*
A list of namespaced Kubernetes resources.
Structure is documented below.
*/
  NamespacedNames?: Array<BackupPlanBackupConfigSelectedApplicationsNamespacedName>;
}
