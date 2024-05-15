import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionAuthConfigUserPassword,
  Integrationconnectors_ConnectionAuthConfigUserPassword_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigUserPassword";
import {
  Integrationconnectors_ConnectionAuthConfigAdditionalVariable,
  Integrationconnectors_ConnectionAuthConfigAdditionalVariable_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigAdditionalVariable";
import {
  Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow,
  Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow";
import {
  Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials,
  Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials";
import {
  Integrationconnectors_ConnectionAuthConfigOauth2JwtBearer,
  Integrationconnectors_ConnectionAuthConfigOauth2JwtBearer_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigOauth2JwtBearer";
import {
  Integrationconnectors_ConnectionAuthConfigSshPublicKey,
  Integrationconnectors_ConnectionAuthConfigSshPublicKey_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigSshPublicKey";

export interface Integrationconnectors_ConnectionAuthConfig {
  /*
User password for Authentication.
Structure is documented below.
*/
  UserPassword?: Integrationconnectors_ConnectionAuthConfigUserPassword;

  /*
List containing additional auth configs.
Structure is documented below.
*/
  AdditionalVariables?: Array<Integrationconnectors_ConnectionAuthConfigAdditionalVariable>;

  // The type of authentication configured.
  AuthKey?: string;

  /*
authType of the Connection
Possible values are: `USER_PASSWORD`.
*/
  AuthType?: string;

  /*
Parameters to support Oauth 2.0 Auth Code Grant Authentication.
Structure is documented below.
*/
  Oauth2AuthCodeFlow?: Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow;

  /*
OAuth3 Client Credentials for Authentication.
Structure is documented below.
*/
  Oauth2ClientCredentials?: Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials;

  /*
OAuth2 JWT Bearer for Authentication.
Structure is documented below.
*/
  Oauth2JwtBearer?: Integrationconnectors_ConnectionAuthConfigOauth2JwtBearer;

  /*
SSH Public Key for Authentication.
Structure is documented below.
*/
  SshPublicKey?: Integrationconnectors_ConnectionAuthConfigSshPublicKey;
}

export function Integrationconnectors_ConnectionAuthConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "UserPassword",
      "User password for Authentication.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigUserPassword_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalVariables",
      "List containing additional auth configs.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigAdditionalVariable_GetTypes(),
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
      "Oauth2AuthCodeFlow",
      "Parameters to support Oauth 2.0 Auth Code Grant Authentication.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Oauth2ClientCredentials",
      "OAuth3 Client Credentials for Authentication.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Oauth2JwtBearer",
      "OAuth2 JWT Bearer for Authentication.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigOauth2JwtBearer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SshPublicKey",
      "SSH Public Key for Authentication.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigSshPublicKey_GetTypes(),
      false,
      false,
    ),
  ];
}
