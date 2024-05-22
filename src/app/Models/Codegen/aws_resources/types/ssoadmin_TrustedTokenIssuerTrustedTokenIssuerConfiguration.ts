import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration,
  ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration_GetTypes,
} from "./ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration";

export interface ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfiguration {
  // A block that describes the settings for a trusted token issuer that works with OpenID Connect (OIDC) by using JSON Web Tokens (JWT). See Documented below below.
  oidcJwtConfiguration?: ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration;
}

export function ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "oidcJwtConfiguration",
      "A block that describes the settings for a trusted token issuer that works with OpenID Connect (OIDC) by using JSON Web Tokens (JWT). See Documented below below.",
      ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
