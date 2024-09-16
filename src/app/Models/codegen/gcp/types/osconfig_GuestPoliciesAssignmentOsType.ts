import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_GuestPoliciesAssignmentOsType {
  // Targets VM instances with OS Inventory enabled and having the following following OS version.
  osVersion?: string;

  /*
Targets VM instances with OS Inventory enabled and having the following OS architecture.

- - -
*/
  osArchitecture?: string;

  // Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".
  osShortName?: string;
}

export function osconfig_GuestPoliciesAssignmentOsType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'osVersion',
      'Targets VM instances with OS Inventory enabled and having the following following OS version.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'osArchitecture',
      'Targets VM instances with OS Inventory enabled and having the following OS architecture.\n\n- - -',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'osShortName',
      'Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".',
      () => [],
      false,
      false,
    ),
  ];
}
