import { InboundSamlConfigIdpConfigIdpCertificate } from "./InboundSamlConfigIdpConfigIdpCertificate";

export interface InboundSamlConfigIdpConfig {
  /*
The IdP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.
*/
  IdpCertificates?: Array<InboundSamlConfigIdpConfigIdpCertificate>;

  // Unique identifier for all SAML entities
  IdpEntityId?: string;

  // Indicates if outbounding SAMLRequest should be signed.
  SignRequest?: boolean;

  // URL to send Authentication request to.
  SsoUrl?: string;
}
