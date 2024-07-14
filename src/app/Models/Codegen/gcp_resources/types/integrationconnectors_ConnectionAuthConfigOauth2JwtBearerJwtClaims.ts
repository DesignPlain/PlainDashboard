import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims {
  /*
Value for the "aud" claim.

<a name="nested_oauth2_client_credentials"></a>The `oauth2_client_credentials` block supports:
*/
  audience?: string;

  // Value for the "iss" claim.
  issuer?: string;

  // Value for the "sub" claim.
  subject?: string;
}

export function integrationconnectors_ConnectionAuthConfigOauth2JwtBearerJwtClaims_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "audience",
      'Value for the "aud" claim.\n\n<a name="nested_oauth2_client_credentials"></a>The `oauth2_client_credentials` block supports:',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuer",
      'Value for the "iss" claim.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subject",
      'Value for the "sub" claim.',
      [],
      false,
      false,
    ),
  ];
}
