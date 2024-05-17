import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionEventingConfigAuthConfigUserPasswordPassword,
  Integrationconnectors_ConnectionEventingConfigAuthConfigUserPasswordPassword_GetTypes,
} from "./Integrationconnectors_ConnectionEventingConfigAuthConfigUserPasswordPassword";

export interface Integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword {
  // Username for Authentication.
  Username?: string;

  /*
Password for Authentication.
Structure is documented below.
*/
  Password?: Integrationconnectors_ConnectionEventingConfigAuthConfigUserPasswordPassword;
}

export function Integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Username for Authentication.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Password",
      "Password for Authentication.\nStructure is documented below.",
      Integrationconnectors_ConnectionEventingConfigAuthConfigUserPasswordPassword_GetTypes(),
      false,
      false,
    ),
  ];
}
