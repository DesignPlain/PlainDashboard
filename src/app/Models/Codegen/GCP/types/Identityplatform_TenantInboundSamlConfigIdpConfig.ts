import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate,
  Identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate_GetTypes,
} from "./Identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate";

export interface Identityplatform_TenantInboundSamlConfigIdpConfig {
  /*
The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.
*/
  IdpCertificates?: Array<Identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate>;

  // Unique identifier for all SAML entities
  IdpEntityId?: string;

  // Indicates if outbounding SAMLRequest should be signed.
  SignRequest?: boolean;

  // URL to send Authentication request to.
  SsoUrl?: string;
}

export function Identityplatform_TenantInboundSamlConfigIdpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "IdpCertificates",
      "The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.\nStructure is documented below.",
      Identityplatform_TenantInboundSamlConfigIdpConfigIdpCertificate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IdpEntityId",
      "Unique identifier for all SAML entities",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "SignRequest",
      "Indicates if outbounding SAMLRequest should be signed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SsoUrl",
      "URL to send Authentication request to.",
      [],
      true,
      false,
    ),
  ];
}
