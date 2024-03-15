export interface ConfigBlockingFunctionsForwardInboundCredentials {
  // Whether to pass the user's OIDC identity provider's ID token.
  IdToken?: boolean;

  // Whether to pass the user's OAuth identity provider's refresh token.
  RefreshToken?: boolean;

  // Whether to pass the user's OAuth identity provider's access token.
  AccessToken?: boolean;
}
