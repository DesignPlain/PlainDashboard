import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  integrationconnectors_ConnectionAuthConfigSshPublicKey,
  integrationconnectors_ConnectionAuthConfigSshPublicKey_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigSshPublicKey";
import {
  integrationconnectors_ConnectionAuthConfigUserPassword,
  integrationconnectors_ConnectionAuthConfigUserPassword_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigUserPassword";
import {
  integrationconnectors_ConnectionAuthConfigAdditionalVariable,
  integrationconnectors_ConnectionAuthConfigAdditionalVariable_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigAdditionalVariable";
import {
  integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow,
  integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow";
import {
  integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials,
  integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials";
import {
  integrationconnectors_ConnectionAuthConfigOauth2JwtBearer,
  integrationconnectors_ConnectionAuthConfigOauth2JwtBearer_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigOauth2JwtBearer";

export interface integrationconnectors_ConnectionAuthConfig {
  /*
OAuth3 Client Credentials for Authentication.
Structure is documented below.
*/
  oauth2ClientCredentials?: integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials;

  /*
OAuth2 JWT Bearer for Authentication.
Structure is documented below.
*/
  oauth2JwtBearer?: integrationconnectors_ConnectionAuthConfigOauth2JwtBearer;

  /*
SSH Public Key for Authentication.
Structure is documented below.
*/
  sshPublicKey?: integrationconnectors_ConnectionAuthConfigSshPublicKey;

  /*
User password for Authentication.
Structure is documented below.
*/
  userPassword?: integrationconnectors_ConnectionAuthConfigUserPassword;

  /*
List containing additional auth configs.
Structure is documented below.
*/
  additionalVariables?: Array<integrationconnectors_ConnectionAuthConfigAdditionalVariable>;

  // The type of authentication configured.
  authKey?: string;

  /*
authType of the Connection
Possible values are: `USER_PASSWORD`.
*/
  authType?: string;

  /*
Parameters to support Oauth 2.0 Auth Code Grant Authentication.
Structure is documented below.
*/
  oauth2AuthCodeFlow?: integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow;
}

export function integrationconnectors_ConnectionAuthConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "userPassword",
      "User password for Authentication.\nStructure is documented below.",
      () => integrationconnectors_ConnectionAuthConfigUserPassword_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalVariables",
      "List containing additional auth configs.\nStructure is documented below.",
      () =>
        integrationconnectors_ConnectionAuthConfigAdditionalVariable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authKey",
      "The type of authentication configured.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authType",
      "authType of the Connection\nPossible values are: `USER_PASSWORD`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oauth2AuthCodeFlow",
      "Parameters to support Oauth 2.0 Auth Code Grant Authentication.\nStructure is documented below.",
      () =>
        integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oauth2ClientCredentials",
      "OAuth3 Client Credentials for Authentication.\nStructure is documented below.",
      () =>
        integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oauth2JwtBearer",
      "OAuth2 JWT Bearer for Authentication.\nStructure is documented below.",
      () =>
        integrationconnectors_ConnectionAuthConfigOauth2JwtBearer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sshPublicKey",
      "SSH Public Key for Authentication.\nStructure is documented below.",
      () => integrationconnectors_ConnectionAuthConfigSshPublicKey_GetTypes(),
      false,
      false,
    ),
  ];
}
