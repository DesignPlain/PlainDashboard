import { ConnectionAuthConfigOauth2JwtBearerClientKey } from "./ConnectionAuthConfigOauth2JwtBearerClientKey";
import { ConnectionAuthConfigOauth2JwtBearerJwtClaims } from "./ConnectionAuthConfigOauth2JwtBearerJwtClaims";

export interface ConnectionAuthConfigOauth2JwtBearer {
  /*
Secret version reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate.
This private key will be used to sign JWTs used for the jwt-bearer authorization grant.
Specified in the form as: projects/-/secrets/-/versions/-.
Structure is documented below.
*/
  ClientKey?: ConnectionAuthConfigOauth2JwtBearerClientKey;

  /*
JwtClaims providers fields to generate the token.
Structure is documented below.
*/
  JwtClaims?: ConnectionAuthConfigOauth2JwtBearerJwtClaims;
}
