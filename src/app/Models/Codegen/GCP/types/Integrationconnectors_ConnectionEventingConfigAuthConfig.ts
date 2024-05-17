import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable,
  Integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable_GetTypes,
} from "./Integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable";
import {
  Integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword,
  Integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword_GetTypes,
} from "./Integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword";

export interface Integrationconnectors_ConnectionEventingConfigAuthConfig {
  /*
List containing additional auth configs.
Structure is documented below.
*/
  AdditionalVariables?: Array<Integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable>;

  // The type of authentication configured.
  AuthKey?: string;

  /*
authType of the Connection
Possible values are: `USER_PASSWORD`.
*/
  AuthType?: string;

  /*
User password for Authentication.
Structure is documented below.
*/
  UserPassword?: Integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword;
}

export function Integrationconnectors_ConnectionEventingConfigAuthConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AdditionalVariables",
      "List containing additional auth configs.\nStructure is documented below.",
      Integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AuthKey",
      "The type of authentication configured.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AuthType",
      "authType of the Connection\nPossible values are: `USER_PASSWORD`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UserPassword",
      "User password for Authentication.\nStructure is documented below.",
      Integrationconnectors_ConnectionEventingConfigAuthConfigUserPassword_GetTypes(),
      true,
      false,
    ),
  ];
}
