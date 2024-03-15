export interface ConnectionAuthConfigOauth2JwtBearerJwtClaims {
  // Value for the "iss" claim.
  Issuer?: string;

  // Value for the "sub" claim.
  Subject?: string;

  /*
Value for the "aud" claim.

<a name="nested_oauth2_client_credentials"></a>The `oauth2_client_credentials` block supports:
*/
  Audience?: string;
}
