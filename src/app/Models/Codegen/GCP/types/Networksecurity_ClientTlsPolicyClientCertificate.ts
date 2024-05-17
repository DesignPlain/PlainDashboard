import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_ClientTlsPolicyClientCertificateCertificateProviderInstance,
  Networksecurity_ClientTlsPolicyClientCertificateCertificateProviderInstance_GetTypes,
} from "./Networksecurity_ClientTlsPolicyClientCertificateCertificateProviderInstance";
import {
  Networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint,
  Networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint_GetTypes,
} from "./Networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint";

export interface Networksecurity_ClientTlsPolicyClientCertificate {
  /*
The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.
Structure is documented below.
*/
  CertificateProviderInstance?: Networksecurity_ClientTlsPolicyClientCertificateCertificateProviderInstance;

  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  GrpcEndpoint?: Networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint;
}

export function Networksecurity_ClientTlsPolicyClientCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CertificateProviderInstance",
      "The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.\nStructure is documented below.",
      Networksecurity_ClientTlsPolicyClientCertificateCertificateProviderInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GrpcEndpoint",
      "gRPC specific configuration to access the gRPC server to obtain the cert and private key.\nStructure is documented below.",
      Networksecurity_ClientTlsPolicyClientCertificateGrpcEndpoint_GetTypes(),
      false,
      false,
    ),
  ];
}
