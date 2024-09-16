import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualGatewaySpecListenerTlsCertificateAcm,
  appmesh_VirtualGatewaySpecListenerTlsCertificateAcm_GetTypes,
} from './appmesh_VirtualGatewaySpecListenerTlsCertificateAcm';
import {
  appmesh_VirtualGatewaySpecListenerTlsCertificateFile,
  appmesh_VirtualGatewaySpecListenerTlsCertificateFile_GetTypes,
} from './appmesh_VirtualGatewaySpecListenerTlsCertificateFile';
import {
  appmesh_VirtualGatewaySpecListenerTlsCertificateSds,
  appmesh_VirtualGatewaySpecListenerTlsCertificateSds_GetTypes,
} from './appmesh_VirtualGatewaySpecListenerTlsCertificateSds';

export interface appmesh_VirtualGatewaySpecListenerTlsCertificate {
  // An AWS Certificate Manager (ACM) certificate.
  acm?: appmesh_VirtualGatewaySpecListenerTlsCertificateAcm;

  // Local file certificate.
  file?: appmesh_VirtualGatewaySpecListenerTlsCertificateFile;

  // A [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualGatewaySpecListenerTlsCertificateSds;
}

export function appmesh_VirtualGatewaySpecListenerTlsCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'acm',
      'An AWS Certificate Manager (ACM) certificate.',
      () => appmesh_VirtualGatewaySpecListenerTlsCertificateAcm_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'file',
      'Local file certificate.',
      () => appmesh_VirtualGatewaySpecListenerTlsCertificateFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sds',
      'A [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.',
      () => appmesh_VirtualGatewaySpecListenerTlsCertificateSds_GetTypes(),
      false,
      false,
    ),
  ];
}
