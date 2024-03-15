import { ConnectionAuthConfigOauth2AuthCodeFlowClientSecret } from "./ConnectionAuthConfigOauth2AuthCodeFlowClientSecret";

export interface ConnectionAuthConfigOauth2AuthCodeFlow {
  // Secret version of Password for Authentication.
  ClientId?: string;

  /*
Secret version reference containing the client secret.
Structure is documented below.
*/
  ClientSecret?: ConnectionAuthConfigOauth2AuthCodeFlowClientSecret;

  // Whether to enable PKCE when the user performs the auth code flow.
  EnablePkce?: boolean;

  // Scopes the connection will request when the user performs the auth code flow.
  Scopes?: Array<string>;

  // Auth URL for Authorization Code Flow.
  AuthUri?: string;
}
