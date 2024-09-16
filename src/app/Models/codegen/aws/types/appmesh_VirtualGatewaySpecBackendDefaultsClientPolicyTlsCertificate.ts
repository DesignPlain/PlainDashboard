import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile_GetTypes,
} from './appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile';
import {
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds,
  appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds_GetTypes,
} from './appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds';

export interface appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {
  // Local file certificate.
  file?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile;

  // A [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds;
}

export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'sds',
      'A [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.',
      () =>
        appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'file',
      'Local file certificate.',
      () =>
        appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile_GetTypes(),
      false,
      false,
    ),
  ];
}
