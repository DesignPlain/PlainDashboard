export interface AttachedClusterOidcConfig {
  // A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://`
  IssuerUrl?: string;

  // OIDC verification keys in JWKS format (RFC 7517).
  Jwks?: string;
}
