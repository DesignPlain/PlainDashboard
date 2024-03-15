import { ConnectionAuthConfigOauth2ClientCredentialsClientSecret } from "./ConnectionAuthConfigOauth2ClientCredentialsClientSecret";

export interface ConnectionAuthConfigOauth2ClientCredentials {
  // Secret version of Password for Authentication.
  ClientId?: string;

  /*
Secret version reference containing the client secret.
Structure is documented below.
*/
  ClientSecret?: ConnectionAuthConfigOauth2ClientCredentialsClientSecret;
}
