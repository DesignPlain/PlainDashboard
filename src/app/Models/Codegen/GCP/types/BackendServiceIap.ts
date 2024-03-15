export interface BackendServiceIap {
  // OAuth2 Client ID for IAP
  Oauth2ClientId?: string;

  /*
OAuth2 Client Secret for IAP
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Oauth2ClientSecret?: string;

  /*
(Output)
OAuth2 Client Secret SHA-256 for IAP
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Oauth2ClientSecretSha256?: string;
}
