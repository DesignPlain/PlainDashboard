import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_GuestPoliciesPackageRepositoryZypper {
  // The location of the repository directory.
  baseUrl?: string;

  // The display name of the repository.
  displayName?: string;

  // URIs of GPG keys.
  gpgKeys?: Array<string>;

  /*
A one word, unique name for this repository. This is the repo id in the zypper config file and also the displayName
if displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.
*/
  id?: string;
}

export function osconfig_GuestPoliciesPackageRepositoryZypper_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "A one word, unique name for this repository. This is the repo id in the zypper config file and also the displayName\nif displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "baseUrl",
      "The location of the repository directory.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "The display name of the repository.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gpgKeys",
      "URIs of GPG keys.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
