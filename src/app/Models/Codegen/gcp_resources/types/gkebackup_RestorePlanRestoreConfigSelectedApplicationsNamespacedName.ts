import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName {
  // The name of a Kubernetes Resource.
  name?: string;

  // The namespace of a Kubernetes Resource.
  namespace?: string;
}

export function gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of a Kubernetes Resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "The namespace of a Kubernetes Resource.",
      [],
      true,
      false,
    ),
  ];
}
