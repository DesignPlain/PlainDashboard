import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networksecurity_ClientTlsPolicyClientCertificateCertificateProviderInstance,
  networksecurity_ClientTlsPolicyClientCertificateCertificateProviderInstance_GetTypes,
} from "./networksecurity_ClientTlsPolicyClientCertificateCertificateProviderInstance";
import {
  networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint,
  networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint_GetTypes,
} from "./networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint";

export interface networksecurity_ClientTlsPolicyClientCertificate {
  /*
The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.
Structure is documented below.
*/
  certificateProviderInstance?: networksecurity_ClientTlsPolicyClientCertificateCertificateProviderInstance;

  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  grpcEndpoint?: networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint;
}

export function networksecurity_ClientTlsPolicyClientCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "certificateProviderInstance",
      "The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.\nStructure is documented below.",
      networksecurity_ClientTlsPolicyClientCertificateCertificateProviderInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "grpcEndpoint",
      "gRPC specific configuration to access the gRPC server to obtain the cert and private key.\nStructure is documented below.",
      networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint_GetTypes(),
      false,
      false,
    ),
  ];
}
