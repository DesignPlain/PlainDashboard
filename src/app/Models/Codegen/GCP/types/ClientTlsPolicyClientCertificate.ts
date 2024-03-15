import { ClientTlsPolicyClientCertificateCertificateProviderInstance } from "./ClientTlsPolicyClientCertificateCertificateProviderInstance";
import { ClientTlsPolicyClientCertificateGrpcEndpoint } from "./ClientTlsPolicyClientCertificateGrpcEndpoint";

export interface ClientTlsPolicyClientCertificate {
  /*
The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.
Structure is documented below.
*/
  CertificateProviderInstance?: ClientTlsPolicyClientCertificateCertificateProviderInstance;

  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  GrpcEndpoint?: ClientTlsPolicyClientCertificateGrpcEndpoint;
}
