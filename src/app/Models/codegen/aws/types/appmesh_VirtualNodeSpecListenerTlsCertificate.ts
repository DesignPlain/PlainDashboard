import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecListenerTlsCertificateAcm,
  appmesh_VirtualNodeSpecListenerTlsCertificateAcm_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTlsCertificateAcm';
import {
  appmesh_VirtualNodeSpecListenerTlsCertificateFile,
  appmesh_VirtualNodeSpecListenerTlsCertificateFile_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTlsCertificateFile';
import {
  appmesh_VirtualNodeSpecListenerTlsCertificateSds,
  appmesh_VirtualNodeSpecListenerTlsCertificateSds_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTlsCertificateSds';

export interface appmesh_VirtualNodeSpecListenerTlsCertificate {
  // An AWS Certificate Manager (ACM) certificate.
  acm?: appmesh_VirtualNodeSpecListenerTlsCertificateAcm;

  // Local file certificate.
  file?: appmesh_VirtualNodeSpecListenerTlsCertificateFile;

  // A [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualNodeSpecListenerTlsCertificateSds;
}

export function appmesh_VirtualNodeSpecListenerTlsCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'acm',
      'An AWS Certificate Manager (ACM) certificate.',
      () => appmesh_VirtualNodeSpecListenerTlsCertificateAcm_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'file',
      'Local file certificate.',
      () => appmesh_VirtualNodeSpecListenerTlsCertificateFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sds',
      'A [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.',
      () => appmesh_VirtualNodeSpecListenerTlsCertificateSds_GetTypes(),
      false,
      false,
    ),
  ];
}
