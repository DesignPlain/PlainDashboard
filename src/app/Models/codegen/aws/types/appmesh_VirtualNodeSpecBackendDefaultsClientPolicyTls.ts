import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate_GetTypes,
} from './appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate';
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation_GetTypes,
} from './appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation';

export interface appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTls {
  // Listener's TLS certificate.
  certificate?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate;

  // Whether the policy is enforced. Default is `true`.
  enforce?: boolean;

  // One or more ports that the policy is enforced for.
  ports?: Array<number>;

  // Listener's Transport Layer Security (TLS) validation context.
  validation?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation;
}

export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enforce',
      'Whether the policy is enforced. Default is `true`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ports',
      'One or more ports that the policy is enforced for.',
      () => InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'validation',
      "Listener's Transport Layer Security (TLS) validation context.",
      () =>
        appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'certificate',
      "Listener's TLS certificate.",
      () =>
        appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate_GetTypes(),
      false,
      false,
    ),
  ];
}
