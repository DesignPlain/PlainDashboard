import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper {
  // URIs of GPG keys.
  gpgKeys?: Array<string>;

  /*
A one word, unique name for this repository. This is the
`repo id` in the zypper config file and also the `display_name` if
`display_name` is omitted. This id is also used as the unique identifier
when checking for GuestPolicy conflicts.
*/
  id?: string;

  // The location of the repository directory.
  baseUrl?: string;

  // The display name of the repository.
  displayName?: string;
}

export function osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'gpgKeys',
      'URIs of GPG keys.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'A one word, unique name for this repository. This is the\n`repo id` in the zypper config file and also the `display_name` if\n`display_name` is omitted. This id is also used as the unique identifier\nwhen checking for GuestPolicy conflicts.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'baseUrl',
      'The location of the repository directory.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'displayName',
      'The display name of the repository.',
      () => [],
      false,
      false,
    ),
  ];
}
