import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration {
  // Specifies the URL that IAM Identity Center uses for OpenID Discovery. OpenID Discovery is used to obtain the information required to verify the tokens that the trusted token issuer generates.
  issuerUrl?: string;

  // The method that the trusted token issuer can use to retrieve the JSON Web Key Set used to verify a JWT. Valid values are `OPEN_ID_DISCOVERY`
  jwksRetrievalOption?: string;

  // Specifies the path of the source attribute in the JWT from the trusted token issuer.
  claimAttributePath?: string;

  // Specifies path of the destination attribute in a JWT from IAM Identity Center. The attribute mapped by this JMESPath expression is compared against the attribute mapped by `claim_attribute_path` when a trusted token issuer token is exchanged for an IAM Identity Center token.
  identityStoreAttributePath?: string;
}

export function ssoadmin_TrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "issuerUrl",
      "Specifies the URL that IAM Identity Center uses for OpenID Discovery. OpenID Discovery is used to obtain the information required to verify the tokens that the trusted token issuer generates.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jwksRetrievalOption",
      "The method that the trusted token issuer can use to retrieve the JSON Web Key Set used to verify a JWT. Valid values are `OPEN_ID_DISCOVERY`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "claimAttributePath",
      "Specifies the path of the source attribute in the JWT from the trusted token issuer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "identityStoreAttributePath",
      "Specifies path of the destination attribute in a JWT from IAM Identity Center. The attribute mapped by this JMESPath expression is compared against the attribute mapped by `claim_attribute_path` when a trusted token issuer token is exchanged for an IAM Identity Center token.",
      [],
      true,
      false,
    ),
  ];
}
