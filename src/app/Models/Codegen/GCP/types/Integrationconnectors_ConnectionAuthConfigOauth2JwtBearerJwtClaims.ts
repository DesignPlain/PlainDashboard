import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims {
  /*
Value for the "aud" claim.

<a name="nested_oauth2_client_credentials"></a>The `oauth2_client_credentials` block supports:
*/
  Audience?: string;

  // Value for the "iss" claim.
  Issuer?: string;

  // Value for the "sub" claim.
  Subject?: string;
}

export function Integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Audience",
      'Value for the "aud" claim.\n\n<a name="nested_oauth2_client_credentials"></a>The `oauth2_client_credentials` block supports:',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Issuer",
      'Value for the "iss" claim.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Subject",
      'Value for the "sub" claim.',
      [],
      false,
      false,
    ),
  ];
}
