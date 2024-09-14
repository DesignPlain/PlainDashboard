import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface eks_FargateProfileSelector {
  // Key-value map of Kubernetes labels for selection.
  labels?: Map<string, string>;

  /*
Kubernetes namespace for selection.

The following arguments are optional:
*/
  namespace?: string;
}

export function eks_FargateProfileSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Kubernetes namespace for selection.\n\nThe following arguments are optional:",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Key-value map of Kubernetes labels for selection.",
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
