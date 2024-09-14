import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkebackup_RestorePlanRestoreConfigExcludedNamespaces {
  // A list of Kubernetes Namespaces.
  namespaces?: Array<string>;
}

export function gkebackup_RestorePlanRestoreConfigExcludedNamespaces_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "namespaces",
      "A list of Kubernetes Namespaces.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
