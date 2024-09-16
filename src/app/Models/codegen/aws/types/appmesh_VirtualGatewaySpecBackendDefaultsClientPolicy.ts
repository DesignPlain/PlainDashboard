import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTls,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTls_GetTypes,
} from './appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTls';

export interface appmesh_VirtualGatewaySpecBackendDefaultsClientPolicy {
  // Transport Layer Security (TLS) client policy.
  tls?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTls;
}

export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'tls',
      'Transport Layer Security (TLS) client policy.',
      () => appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTls_GetTypes(),
      false,
      false,
    ),
  ];
}
