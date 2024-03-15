import { ConnectionAuthConfigOauth2JwtBearer } from "./ConnectionAuthConfigOauth2JwtBearer";
import { ConnectionAuthConfigSshPublicKey } from "./ConnectionAuthConfigSshPublicKey";
import { ConnectionAuthConfigUserPassword } from "./ConnectionAuthConfigUserPassword";
import { ConnectionAuthConfigAdditionalVariable } from "./ConnectionAuthConfigAdditionalVariable";
import { ConnectionAuthConfigOauth2AuthCodeFlow } from "./ConnectionAuthConfigOauth2AuthCodeFlow";
import { ConnectionAuthConfigOauth2ClientCredentials } from "./ConnectionAuthConfigOauth2ClientCredentials";

export interface ConnectionAuthConfig {
  /*
authType of the Connection
Possible values are: `USER_PASSWORD`.
*/
  AuthType?: string;

  /*
Parameters to support Oauth 2.0 Auth Code Grant Authentication.
Structure is documented below.
*/
  Oauth2AuthCodeFlow?: ConnectionAuthConfigOauth2AuthCodeFlow;

  /*
OAuth3 Client Credentials for Authentication.
Structure is documented below.
*/
  Oauth2ClientCredentials?: ConnectionAuthConfigOauth2ClientCredentials;

  /*
OAuth2 JWT Bearer for Authentication.
Structure is documented below.
*/
  Oauth2JwtBearer?: ConnectionAuthConfigOauth2JwtBearer;

  /*
SSH Public Key for Authentication.
Structure is documented below.
*/
  SshPublicKey?: ConnectionAuthConfigSshPublicKey;

  /*
User password for Authentication.
Structure is documented below.
*/
  UserPassword?: ConnectionAuthConfigUserPassword;

  /*
List containing additional auth configs.
Structure is documented below.
*/
  AdditionalVariables?: Array<ConnectionAuthConfigAdditionalVariable>;

  // The type of authentication configured.
  AuthKey?: string;
}
