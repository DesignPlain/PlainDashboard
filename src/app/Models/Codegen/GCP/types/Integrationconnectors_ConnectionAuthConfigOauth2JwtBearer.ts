import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerClientKey,
  Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerClientKey_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerClientKey";
import {
  Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims,
  Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims";

export interface Integrationconnectors_ConnectionAuthConfigOauth2JwtBearer {
  /*
Secret version reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate.
This private key will be used to sign JWTs used for the jwt-bearer authorization grant.
Specified in the form as: projects/-/secrets/-/versions/-.
Structure is documented below.
*/
  ClientKey?: Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerClientKey;

  /*
JwtClaims providers fields to generate the token.
Structure is documented below.
*/
  JwtClaims?: Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims;
}

export function Integrationconnectors_ConnectionAuthConfigOauth2JwtBearer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ClientKey",
      "Secret version reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate.\nThis private key will be used to sign JWTs used for the jwt-bearer authorization grant.\nSpecified in the form as: projects/*/secrets/*/versions/*.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerClientKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "JwtClaims",
      "JwtClaims providers fields to generate the token.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims_GetTypes(),
      false,
      false,
    ),
  ];
}
