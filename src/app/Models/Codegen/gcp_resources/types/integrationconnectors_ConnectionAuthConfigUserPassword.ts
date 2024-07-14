import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  integrationconnectors_ConnectionAuthConfigUserPasswordPassword,
  integrationconnectors_ConnectionAuthConfigUserPasswordPassword_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigUserPasswordPassword";

export interface integrationconnectors_ConnectionAuthConfigUserPassword {
  /*
Password for Authentication.
Structure is documented below.
*/
  password?: integrationconnectors_ConnectionAuthConfigUserPasswordPassword;

  // Username for Authentication.
  username?: string;
}

export function integrationconnectors_ConnectionAuthConfigUserPassword_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "password",
      "Password for Authentication.\nStructure is documented below.",
      integrationconnectors_ConnectionAuthConfigUserPasswordPassword_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "Username for Authentication.",
      [],
      true,
      false,
    ),
  ];
}
