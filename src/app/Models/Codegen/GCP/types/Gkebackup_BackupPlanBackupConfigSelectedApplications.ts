import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName,
  Gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName_GetTypes,
} from "./Gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName";

export interface Gkebackup_BackupPlanBackupConfigSelectedApplications {
  /*
A list of namespaced Kubernetes resources.
Structure is documented below.
*/
  NamespacedNames?: Array<Gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName>;
}

export function Gkebackup_BackupPlanBackupConfigSelectedApplications_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NamespacedNames",
      "A list of namespaced Kubernetes resources.\nStructure is documented below.",
      Gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName_GetTypes(),
      true,
      false,
    ),
  ];
}
