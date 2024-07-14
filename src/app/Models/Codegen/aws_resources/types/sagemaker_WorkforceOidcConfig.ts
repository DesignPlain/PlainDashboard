import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_WorkforceOidcConfig {
  // The OIDC IdP client secret used to configure your private workforce.
  clientSecret?: string;

  // The OIDC IdP issuer used to configure your private workforce.
  issuer?: string;

  // The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.
  jwksUri?: string;

  // The OIDC IdP logout endpoint used to configure your private workforce.
  logoutEndpoint?: string;

  // The OIDC IdP token endpoint used to configure your private workforce.
  tokenEndpoint?: string;

  // The OIDC IdP user information endpoint used to configure your private workforce.
  userInfoEndpoint?: string;

  // The OIDC IdP authorization endpoint used to configure your private workforce.
  authorizationEndpoint?: string;

  // The OIDC IdP client ID used to configure your private workforce.
  clientId?: string;
}

export function sagemaker_WorkforceOidcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientSecret",
      "The OIDC IdP client secret used to configure your private workforce.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuer",
      "The OIDC IdP issuer used to configure your private workforce.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jwksUri",
      "The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logoutEndpoint",
      "The OIDC IdP logout endpoint used to configure your private workforce.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tokenEndpoint",
      "The OIDC IdP token endpoint used to configure your private workforce.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userInfoEndpoint",
      "The OIDC IdP user information endpoint used to configure your private workforce.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authorizationEndpoint",
      "The OIDC IdP authorization endpoint used to configure your private workforce.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "The OIDC IdP client ID used to configure your private workforce.",
      [],
      true,
      false,
    ),
  ];
}
