import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionAuthConfigUserPasswordPassword,
  Integrationconnectors_ConnectionAuthConfigUserPasswordPassword_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigUserPasswordPassword";

export interface Integrationconnectors_ConnectionAuthConfigUserPassword {
  // Username for Authentication.
  Username?: string;

  /*
Password for Authentication.
Structure is documented below.
*/
  Password?: Integrationconnectors_ConnectionAuthConfigUserPasswordPassword;
}

export function Integrationconnectors_ConnectionAuthConfigUserPassword_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Username for Authentication.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Password",
      "Password for Authentication.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigUserPasswordPassword_GetTypes(),
      false,
      false,
    ),
  ];
}
