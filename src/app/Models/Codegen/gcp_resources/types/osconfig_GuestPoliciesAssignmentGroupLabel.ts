import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface osconfig_GuestPoliciesAssignmentGroupLabel {
  // Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.
  labels?: Map<string, string>;
}

export function osconfig_GuestPoliciesAssignmentGroupLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
