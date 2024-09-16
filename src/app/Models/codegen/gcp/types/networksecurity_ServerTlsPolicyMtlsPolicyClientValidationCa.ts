import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint,
  networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint_GetTypes,
} from './networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint';
import {
  networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance,
  networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance_GetTypes,
} from './networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance';

export interface networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa {
  /*
gRPC specific configuration to access the gRPC server to obtain the cert and private key.
Structure is documented below.
*/
  grpcEndpoint?: networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint;

  /*
Optional if policy is to be used with Traffic Director. For external HTTPS load balancer must be empty.
Defines a mechanism to provision server identity (public and private keys). Cannot be combined with allowOpen as a permissive mode that allows both plain text and TLS is not supported.
Structure is documented below.
*/
  certificateProviderInstance?: networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance;
}

export function networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'grpcEndpoint',
      'gRPC specific configuration to access the gRPC server to obtain the cert and private key.\nStructure is documented below.',
      () =>
        networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'certificateProviderInstance',
      'Optional if policy is to be used with Traffic Director. For external HTTPS load balancer must be empty.\nDefines a mechanism to provision server identity (public and private keys). Cannot be combined with allowOpen as a permissive mode that allows both plain text and TLS is not supported.\nStructure is documented below.',
      () =>
        networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance_GetTypes(),
      false,
      false,
    ),
  ];
}
