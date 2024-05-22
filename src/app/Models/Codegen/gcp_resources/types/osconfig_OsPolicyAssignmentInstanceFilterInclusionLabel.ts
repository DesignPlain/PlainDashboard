import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel {
  /*
Labels are identified by key/value pairs in this map.
A VM should contain all the key/value pairs specified in this map to be
selected.
*/
  labels?: Map<string, string>;
}

export function osconfig_OsPolicyAssignmentInstanceFilterInclusionLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Labels are identified by key/value pairs in this map.\nA VM should contain all the key/value pairs specified in this map to be\nselected.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
