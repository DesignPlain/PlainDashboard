import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper {
  // The location of the repository directory.
  BaseUrl?: string;

  // The display name of the repository.
  DisplayName?: string;

  // URIs of GPG keys.
  GpgKeys?: Array<string>;

  /*
A one word, unique name for this repository. This is the
`repo id` in the zypper config file and also the `display_name` if
`display_name` is omitted. This id is also used as the unique identifier
when checking for GuestPolicy conflicts.
*/
  Id?: string;
}

export function Osconfig_OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "BaseUrl",
      "The location of the repository directory.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "The display name of the repository.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GpgKeys",
      "URIs of GPG keys.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "A one word, unique name for this repository. This is the\n`repo id` in the zypper config file and also the `display_name` if\n`display_name` is omitted. This id is also used as the unique identifier\nwhen checking for GuestPolicy conflicts.",
      [],
      true,
      false,
    ),
  ];
}
