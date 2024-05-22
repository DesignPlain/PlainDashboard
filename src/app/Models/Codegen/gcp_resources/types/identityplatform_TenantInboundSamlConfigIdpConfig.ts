import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate,
  identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate_GetTypes,
} from "./identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate";

export interface identityplatform_TenantInboundSamlConfigIdpConfig {
  // Unique identifier for all SAML entities
  idpEntityId?: string;

  // Indicates if outbounding SAMLRequest should be signed.
  signRequest?: boolean;

  // URL to send Authentication request to.
  ssoUrl?: string;

  /*
The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.
*/
  idpCertificates?: Array<identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate>;
}

export function identityplatform_TenantInboundSamlConfigIdpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "signRequest",
      "Indicates if outbounding SAMLRequest should be signed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ssoUrl",
      "URL to send Authentication request to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "idpCertificates",
      "The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.\nStructure is documented below.",
      identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "idpEntityId",
      "Unique identifier for all SAML entities",
      [],
      true,
      false,
    ),
  ];
}
