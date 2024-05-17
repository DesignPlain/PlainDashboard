import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName {
  // The name of a Kubernetes Resource.
  Name?: string;

  // The namespace of a Kubernetes Resource.
  Namespace?: string;
}

export function Gkebackup_BackupPlanBackupConfigSelectedApplicationsNamespacedName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of a Kubernetes Resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Namespace",
      "The namespace of a Kubernetes Resource.",
      [],
      true,
      false,
    ),
  ];
}
