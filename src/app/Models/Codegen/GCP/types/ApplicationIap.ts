export interface ApplicationIap {
  // OAuth2 client ID to use for the authentication flow.
  Oauth2ClientId?: string;

  /*
OAuth2 client secret to use for the authentication flow.
The SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field.
*/
  Oauth2ClientSecret?: string;

  // Hex-encoded SHA-256 hash of the client secret.
  Oauth2ClientSecretSha256?: string;

  /*
(Optional) Whether the serving infrastructure will authenticate and authorize all incoming requests. 
(default is false)
*/
  Enabled?: boolean;
}
