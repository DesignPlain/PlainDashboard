import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint,
  Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint_GetTypes,
} from "./Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint";
import {
  Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance,
  Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance_GetTypes,
} from "./Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance";

export interface Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa {
  /*
Optional if policy is to be used with Traffic Director. For external HTTPS load balancer must be empty.
Defines a mechanism to provision server identity (public and private keys). Cannot be combined with allowOpen as a permissive mode that allows both plain text and TLS is not supported.
Structure is documented below.
*/
  CertificateProviderInstance?: Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance;

  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  GrpcEndpoint?: Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint;
}

export function Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CertificateProviderInstance",
      "Optional if policy is to be used with Traffic Director. For external HTTPS load balancer must be empty.\nDefines a mechanism to provision server identity (public and private keys). Cannot be combined with allowOpen as a permissive mode that allows both plain text and TLS is not supported.\nStructure is documented below.",
      Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GrpcEndpoint",
      "gRPC specific configuration to access the gRPC server to obtain the cert and private key.\nStructure is documented below.",
      Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint_GetTypes(),
      false,
      false,
    ),
  ];
}
