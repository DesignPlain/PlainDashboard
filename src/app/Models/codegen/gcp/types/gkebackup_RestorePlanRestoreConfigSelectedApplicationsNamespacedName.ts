import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName {
  // The namespace of a Kubernetes Resource.
  namespace?: string;

  // The name of a Kubernetes Resource.
  name?: string;
}

export function gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "The namespace of a Kubernetes Resource.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of a Kubernetes Resource.",
      () => [],
      true,
      false,
    ),
  ];
}
