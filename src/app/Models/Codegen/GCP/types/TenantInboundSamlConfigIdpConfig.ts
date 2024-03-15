import { TenantInboundSamlConfigIdpConfigIdpCertificate } from "./TenantInboundSamlConfigIdpConfigIdpCertificate";

export interface TenantInboundSamlConfigIdpConfig {
  // URL to send Authentication request to.
  SsoUrl?: string;

  /*
The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.
*/
  IdpCertificates?: Array<TenantInboundSamlConfigIdpConfigIdpCertificate>;

  // Unique identifier for all SAML entities
  IdpEntityId?: string;

  // Indicates if outbounding SAMLRequest should be signed.
  SignRequest?: boolean;
}
