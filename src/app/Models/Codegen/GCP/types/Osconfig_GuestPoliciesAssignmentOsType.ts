import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_GuestPoliciesAssignmentOsType {
  /*
Targets VM instances with OS Inventory enabled and having the following OS architecture.

- - -
*/
  OsArchitecture?: string;

  // Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".
  OsShortName?: string;

  // Targets VM instances with OS Inventory enabled and having the following following OS version.
  OsVersion?: string;
}

export function Osconfig_GuestPoliciesAssignmentOsType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "OsArchitecture",
      "Targets VM instances with OS Inventory enabled and having the following OS architecture.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OsShortName",
      'Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OsVersion",
      "Targets VM instances with OS Inventory enabled and having the following following OS version.",
      [],
      false,
      false,
    ),
  ];
}
