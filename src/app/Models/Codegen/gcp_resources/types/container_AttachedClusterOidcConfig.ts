import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      "issuerUrl",
      "A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://`",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "jwks",
      "OIDC verification keys in JWKS format (RFC 7517).",
      [],
      false,
      true,
    ),
  ];
}
