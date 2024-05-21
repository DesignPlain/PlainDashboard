import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_GuestPoliciesAssignmentOsType {
  // Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".
  osShortName?: string;

  // Targets VM instances with OS Inventory enabled and having the following following OS version.
  osVersion?: string;

  /*
Targets VM instances with OS Inventory enabled and having the following OS architecture.

- - -
*/
  osArchitecture?: string;
}

export function osconfig_GuestPoliciesAssignmentOsType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "osShortName",
      'Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "osVersion",
      "Targets VM instances with OS Inventory enabled and having the following following OS version.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "osArchitecture",
      "Targets VM instances with OS Inventory enabled and having the following OS architecture.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
