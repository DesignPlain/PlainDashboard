import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigatewayv2_AuthorizerJwtConfiguration {
  // List of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list.
  audiences?: Array<string>;

  // Base domain of the identity provider that issues JSON Web Tokens, such as the `endpoint` attribute of the `aws.cognito.UserPool` resource.
  issuer?: string;
}

export function apigatewayv2_AuthorizerJwtConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'audiences',
      'List of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'issuer',
      'Base domain of the identity provider that issues JSON Web Tokens, such as the `endpoint` attribute of the `aws.cognito.UserPool` resource.',
      () => [],
      false,
      false,
    ),
  ];
}
