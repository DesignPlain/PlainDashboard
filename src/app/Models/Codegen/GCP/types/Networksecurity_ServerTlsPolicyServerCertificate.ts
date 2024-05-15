import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_ServerTlsPolicyServerCertificateCertificateProviderInstance,
  Networksecurity_ServerTlsPolicyServerCertificateCertificateProviderInstance_GetTypes,
} from "./Networksecurity_ServerTlsPolicyServerCertificateCertificateProviderInstance";
import {
  Networksecurity_ServerTlsPolicyServerCertificateGrpcEndpoint,
  Networksecurity_ServerTlsPolicyServerCertificateGrpcEndpoint_GetTypes,
} from "./Networksecurity_ServerTlsPolicyServerCertificateGrpcEndpoint";

export interface Networksecurity_ServerTlsPolicyServerCertificate {
  /*
Optional if policy is to be used with Traffic Director. For external HTTPS load balancer must be empty.
Defines a mechanism to provision server identity (public and private keys). Cannot be combined with allowOpen as a permissive mode that allows both plain text and TLS is not supported.
Structure is documented below.
*/
  CertificateProviderInstance?: Networksecurity_ServerTlsPolicyServerCertificateCertificateProviderInstance;

  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  GrpcEndpoint?: Networksecurity_ServerTlsPolicyServerCertificateGrpcEndpoint;
}

export function Networksecurity_ServerTlsPolicyServerCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GrpcEndpoint",
      "gRPC specific configuration to access the gRPC server to obtain the cert and private key.\nStructure is documented below.",
      Networksecurity_ServerTlsPolicyServerCertificateGrpcEndpoint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CertificateProviderInstance",
      "Optional if policy is to be used with Traffic Director. For external HTTPS load balancer must be empty.\nDefines a mechanism to provision server identity (public and private keys). Cannot be combined with allowOpen as a permissive mode that allows both plain text and TLS is not supported.\nStructure is documented below.",
      Networksecurity_ServerTlsPolicyServerCertificateCertificateProviderInstance_GetTypes(),
      false,
      false,
    ),
  ];
}
