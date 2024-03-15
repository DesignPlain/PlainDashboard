import { TenantInboundSamlConfigSpConfigSpCertificate } from "./TenantInboundSamlConfigSpConfigSpCertificate";

export interface TenantInboundSamlConfigSpConfig {
  // Callback URI where responses from IDP are handled. Must start with `https://`.
  CallbackUri?: string;

  /*
(Output)
The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.


<a name="nested_sp_certificates"></a>The `sp_certificates` block contains:
*/
  SpCertificates?: Array<TenantInboundSamlConfigSpConfigSpCertificate>;

  // Unique identifier for all SAML entities.
  SpEntityId?: string;
}
