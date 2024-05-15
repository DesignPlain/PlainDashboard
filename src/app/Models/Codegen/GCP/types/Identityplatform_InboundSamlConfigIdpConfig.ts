import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_InboundSamlConfigIdpConfigIdpCertificate,
  Identityplatform_InboundSamlConfigIdpConfigIdpCertificate_GetTypes,
} from "./Identityplatform_InboundSamlConfigIdpConfigIdpCertificate";

export interface Identityplatform_InboundSamlConfigIdpConfig {
  /*
The IdP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.
*/
  IdpCertificates?: Array<Identityplatform_InboundSamlConfigIdpConfigIdpCertificate>;

  // Unique identifier for all SAML entities
  IdpEntityId?: string;

  // Indicates if outbounding SAMLRequest should be signed.
  SignRequest?: boolean;

  // URL to send Authentication request to.
  SsoUrl?: string;
}

export function Identityplatform_InboundSamlConfigIdpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SsoUrl",
      "URL to send Authentication request to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IdpCertificates",
      "The IdP's certificate data to verify the signature in the SAMLResponse issued by the IDP.\nStructure is documented below.",
      Identityplatform_InboundSamlConfigIdpConfigIdpCertificate_GetTypes(),
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
  ];
}
