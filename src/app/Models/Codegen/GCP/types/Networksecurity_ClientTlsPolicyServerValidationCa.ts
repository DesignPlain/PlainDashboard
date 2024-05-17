import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_ClientTlsPolicyServerValidationCaCertificateProviderInstance,
  Networksecurity_ClientTlsPolicyServerValidationCaCertificateProviderInstance_GetTypes,
} from "./Networksecurity_ClientTlsPolicyServerValidationCaCertificateProviderInstance";
import {
  Networksecurity_ClientTlsPolicyServerValidationCaGrpcEndpoint,
  Networksecurity_ClientTlsPolicyServerValidationCaGrpcEndpoint_GetTypes,
} from "./Networksecurity_ClientTlsPolicyServerValidationCaGrpcEndpoint";

export interface Networksecurity_ClientTlsPolicyServerValidationCa {
  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  GrpcEndpoint?: Networksecurity_ClientTlsPolicyServerValidationCaGrpcEndpoint;

  /*
The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.
Structure is documented below.
*/
  CertificateProviderInstance?: Networksecurity_ClientTlsPolicyServerValidationCaCertificateProviderInstance;
}

export function Networksecurity_ClientTlsPolicyServerValidationCa_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GrpcEndpoint",
      "gRPC specific configuration to access the gRPC server to obtain the cert and private key.\nStructure is documented below.",
      Networksecurity_ClientTlsPolicyServerValidationCaGrpcEndpoint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CertificateProviderInstance",
      "The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.\nStructure is documented below.",
      Networksecurity_ClientTlsPolicyServerValidationCaCertificateProviderInstance_GetTypes(),
      false,
      false,
    ),
  ];
}
