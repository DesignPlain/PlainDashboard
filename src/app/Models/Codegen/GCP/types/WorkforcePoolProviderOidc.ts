import { WorkforcePoolProviderOidcClientSecret } from "./WorkforcePoolProviderOidcClientSecret";
import { WorkforcePoolProviderOidcWebSsoConfig } from "./WorkforcePoolProviderOidcWebSsoConfig";

export interface WorkforcePoolProviderOidc {
  // The client ID. Must match the audience claim of the JWT issued by the identity provider.
  ClientId?: string;

  /*
The optional client secret. Required to enable Authorization Code flow for web sign-in.
Structure is documented below.
*/
  ClientSecret?: WorkforcePoolProviderOidcClientSecret;

  // The OIDC issuer URI. Must be a valid URI using the 'https' scheme.
  IssuerUri?: string;

  /*
OIDC JWKs in JSON String format. For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the `jwks_uri` from the discovery document fetched from the
.well-known path for the `issuer_uri`. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:
*/
  JwksJson?: string;

  /*
Configuration for web single sign-on for the OIDC provider. Here, web sign-in refers to console sign-in and gcloud sign-in through the browser.
Structure is documented below.
*/
  WebSsoConfig?: WorkforcePoolProviderOidcWebSsoConfig;
}
