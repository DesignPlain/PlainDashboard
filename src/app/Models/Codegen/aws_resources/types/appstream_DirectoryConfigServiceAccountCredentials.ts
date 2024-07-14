import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appstream_DirectoryConfigServiceAccountCredentials {
  // User name of the account. This account must have the following privileges: create computer objects, join computers to the domain, and change/reset the password on descendant computer objects for the organizational units specified.
  accountName?: string;

  // Password for the account.
  accountPassword?: string;
}

export function appstream_DirectoryConfigServiceAccountCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accountPassword",
      "Password for the account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accountName",
      "User name of the account. This account must have the following privileges: create computer objects, join computers to the domain, and change/reset the password on descendant computer objects for the organizational units specified.",
      [],
      true,
      false,
    ),
  ];
}
