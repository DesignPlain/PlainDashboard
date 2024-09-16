import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_AttachedClusterOidcConfig {
  // A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://`
  issuerUrl?: string;

  // OIDC verification keys in JWKS format (RFC 7517).
  jwks?: string;
}

export function container_AttachedClusterOidcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'issuerUrl',
      'A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://`',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'jwks',
      'OIDC verification keys in JWKS format (RFC 7517).',
      () => [],
      false,
      true,
    ),
  ];
}
