import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName,
  Gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName_GetTypes,
} from "./Gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName";

export interface Gkebackup_RestorePlanRestoreConfigSelectedApplications {
  /*
A list of namespaced Kubernetes resources.
Structure is documented below.
*/
  NamespacedNames?: Array<Gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName>;
}

export function Gkebackup_RestorePlanRestoreConfigSelectedApplications_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NamespacedNames",
      "A list of namespaced Kubernetes resources.\nStructure is documented below.",
      Gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName_GetTypes(),
      true,
      false,
    ),
  ];
}
