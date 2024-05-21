import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identityplatform_InboundSamlConfigIdpConfigIdpCertificate,
  identityplatform_InboundSamlConfigIdpConfigIdpCertificate_GetTypes,
} from "./identityplatform_InboundSamlConfigIdpConfigIdpCertificate";

export interface identityplatform_InboundSamlConfigIdpConfig {
  /*
The IdP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.
*/
  idpCertificates?: Array<identityplatform_InboundSamlConfigIdpConfigIdpCertificate>;

  // Unique identifier for all SAML entities
  idpEntityId?: string;

  // Indicates if outbounding SAMLRequest should be signed.
  signRequest?: boolean;

  // URL to send Authentication request to.
  ssoUrl?: string;
}

export function identityplatform_InboundSamlConfigIdpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "idpCertificates",
      "The IdP's certificate data to verify the signature in the SAMLResponse issued by the IDP.\nStructure is documented below.",
      identityplatform_InboundSamlConfigIdpConfigIdpCertificate_GetTypes(),
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
  ];
}
