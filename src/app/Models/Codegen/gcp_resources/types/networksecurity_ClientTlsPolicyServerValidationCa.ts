import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networksecurity_ClientTlsPolicyServerValidationCaGrpcEndpoint,
  networksecurity_ClientTlsPolicyServerValidationCaGrpcEndpoint_GetTypes,
} from "./networksecurity_ClientTlsPolicyServerValidationCaGrpcEndpoint";
import {
  networksecurity_ClientTlsPolicyServerValidationCaCertificateProviderInstance,
  networksecurity_ClientTlsPolicyServerValidationCaCertificateProviderInstance_GetTypes,
} from "./networksecurity_ClientTlsPolicyServerValidationCaCertificateProviderInstance";

export interface networksecurity_ClientTlsPolicyServerValidationCa {
  /*
The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.
Structure is documented below.
*/
  certificateProviderInstance?: networksecurity_ClientTlsPolicyServerValidationCaCertificateProviderInstance;

  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  grpcEndpoint?: networksecurity_ClientTlsPolicyServerValidationCaGrpcEndpoint;
}

export function networksecurity_ClientTlsPolicyServerValidationCa_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "certificateProviderInstance",
      "The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information.\nStructure is documented below.",
      networksecurity_ClientTlsPolicyServerValidationCaCertificateProviderInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "grpcEndpoint",
      "gRPC specific configuration to access the gRPC server to obtain the cert and private key.\nStructure is documented below.",
      networksecurity_ClientTlsPolicyServerValidationCaGrpcEndpoint_GetTypes(),
      false,
      false,
    ),
  ];
}
