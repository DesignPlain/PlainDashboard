import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  integrationconnectors_ConnectionAuthConfigOauth2JwtBearerClientKey,
  integrationconnectors_ConnectionAuthConfigOauth2JwtBearerClientKey_GetTypes,
} from './integrationconnectors_ConnectionAuthConfigOauth2JwtBearerClientKey';
import {
  integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims,
  integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims_GetTypes,
} from './integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims';

export interface integrationconnectors_ConnectionAuthConfigOauth2JwtBearer {
  /*
JwtClaims providers fields to generate the token.
Structure is documented below.
*/
  jwtClaims?: integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims;

  /*
Secret version reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate.
This private key will be used to sign JWTs used for the jwt-bearer authorization grant.
Specified in the form as: projects/-/secrets/-/versions/-.
Structure is documented below.
*/
  clientKey?: integrationconnectors_ConnectionAuthConfigOauth2JwtBearerClientKey;
}

export function integrationconnectors_ConnectionAuthConfigOauth2JwtBearer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'jwtClaims',
      'JwtClaims providers fields to generate the token.\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'clientKey',
      'Secret version reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate.\nThis private key will be used to sign JWTs used for the jwt-bearer authorization grant.\nSpecified in the form as: projects/*/secrets/*/versions/*.\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionAuthConfigOauth2JwtBearerClientKey_GetTypes(),
      false,
      false,
    ),
  ];
}
