import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile_GetTypes,
} from './appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile';
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds_GetTypes,
} from './appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds';

export interface appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate {
  // Local file certificate.
  file?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile;

  // A [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds;
}

export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'file',
      'Local file certificate.',
      () =>
        appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sds',
      'A [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.',
      () =>
        appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds_GetTypes(),
      false,
      false,
    ),
  ];
}
