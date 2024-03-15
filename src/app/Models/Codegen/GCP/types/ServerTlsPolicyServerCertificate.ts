import { ServerTlsPolicyServerCertificateCertificateProviderInstance } from "./ServerTlsPolicyServerCertificateCertificateProviderInstance";
import { ServerTlsPolicyServerCertificateGrpcEndpoint } from "./ServerTlsPolicyServerCertificateGrpcEndpoint";

export interface ServerTlsPolicyServerCertificate {
  /*
Optional if policy is to be used with Traffic Director. For external HTTPS load balancer must be empty.
Defines a mechanism to provision server identity (public and private keys). Cannot be combined with allowOpen as a permissive mode that allows both plain text and TLS is not supported.
Structure is documented below.
*/
  CertificateProviderInstance?: ServerTlsPolicyServerCertificateCertificateProviderInstance;

  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  GrpcEndpoint?: ServerTlsPolicyServerCertificateGrpcEndpoint;
}
