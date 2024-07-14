import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networksecurity_ServerTlsPolicyServerCertificateCertificateProviderInstance,
  networksecurity_ServerTlsPolicyServerCertificateCertificateProviderInstance_GetTypes,
} from "./networksecurity_ServerTlsPolicyServerCertificateCertificateProviderInstance";
import {
  networksecurity_ServerTlsPolicyServerCertificateGrpcEndpoint,
  networksecurity_ServerTlsPolicyServerCertificateGrpcEndpoint_GetTypes,
} from "./networksecurity_ServerTlsPolicyServerCertificateGrpcEndpoint";

export interface networksecurity_ServerTlsPolicyServerCertificate {
  /*
Optional if policy is to be used with Traffic Director. For external HTTPS load balancer must be empty.
Defines a mechanism to provision server identity (public and private keys). Cannot be combined with allowOpen as a permissive mode that allows both plain text and TLS is not supported.
Structure is documented below.
*/
  certificateProviderInstance?: networksecurity_ServerTlsPolicyServerCertificateCertificateProviderInstance;

  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  grpcEndpoint?: networksecurity_ServerTlsPolicyServerCertificateGrpcEndpoint;
}

export function networksecurity_ServerTlsPolicyServerCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "certificateProviderInstance",
      "Optional if policy is to be used with Traffic Director. For external HTTPS load balancer must be empty.\nDefines a mechanism to provision server identity (public and private keys). Cannot be combined with allowOpen as a permissive mode that allows both plain text and TLS is not supported.\nStructure is documented below.",
      networksecurity_ServerTlsPolicyServerCertificateCertificateProviderInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "grpcEndpoint",
      "gRPC specific configuration to access the gRPC server to obtain the cert and private key.\nStructure is documented below.",
      networksecurity_ServerTlsPolicyServerCertificateGrpcEndpoint_GetTypes(),
      false,
      false,
    ),
  ];
}
