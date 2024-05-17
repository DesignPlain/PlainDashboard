import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AttachedClusterOidcConfig {
  // A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://`
  IssuerUrl?: string;

  // OIDC verification keys in JWKS format (RFC 7517).
  Jwks?: string;
}

export function Container_AttachedClusterOidcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IssuerUrl",
      "A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://`",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Jwks",
      "OIDC verification keys in JWKS format (RFC 7517).",
      [],
      false,
      true,
    ),
  ];
}
