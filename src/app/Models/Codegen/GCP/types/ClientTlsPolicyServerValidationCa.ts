import { ClientTlsPolicyServerValidationCaCertificateProviderInstance } from "./ClientTlsPolicyServerValidationCaCertificateProviderInstance";
import { ClientTlsPolicyServerValidationCaGrpcEndpoint } from "./ClientTlsPolicyServerValidationCaGrpcEndpoint";

export interface ClientTlsPolicyServerValidationCa {
  /*
The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.
Structure is documented below.
*/
  CertificateProviderInstance?: ClientTlsPolicyServerValidationCaCertificateProviderInstance;

  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  GrpcEndpoint?: ClientTlsPolicyServerValidationCaGrpcEndpoint;
}
