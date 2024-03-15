import { ConnectionEventingConfigAuthConfigAdditionalVariable } from "./ConnectionEventingConfigAuthConfigAdditionalVariable";
import { ConnectionEventingConfigAuthConfigUserPassword } from "./ConnectionEventingConfigAuthConfigUserPassword";

export interface ConnectionEventingConfigAuthConfig {
  /*
List containing additional auth configs.
Structure is documented below.
*/
  AdditionalVariables?: Array<ConnectionEventingConfigAuthConfigAdditionalVariable>;

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
  UserPassword?: ConnectionEventingConfigAuthConfigUserPassword;
}
