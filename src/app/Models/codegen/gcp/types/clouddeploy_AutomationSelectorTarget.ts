import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface clouddeploy_AutomationSelectorTarget {
  // ID of the `Target`. The value of this field could be one of the following: - The last segment of a target name. It only needs the ID to determine which target is being referred to - "-", all targets in a location.
  id?: string;

  // Target labels.
  labels?: Map<string, string>;
}

export function clouddeploy_AutomationSelectorTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      'ID of the `Target`. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Target labels.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
