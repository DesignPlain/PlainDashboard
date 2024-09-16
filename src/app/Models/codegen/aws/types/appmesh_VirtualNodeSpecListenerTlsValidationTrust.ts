import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecListenerTlsValidationTrustSds,
  appmesh_VirtualNodeSpecListenerTlsValidationTrustSds_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTlsValidationTrustSds';
import {
  appmesh_VirtualNodeSpecListenerTlsValidationTrustFile,
  appmesh_VirtualNodeSpecListenerTlsValidationTrustFile_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTlsValidationTrustFile';

export interface appmesh_VirtualNodeSpecListenerTlsValidationTrust {
  // TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.
  sds?: appmesh_VirtualNodeSpecListenerTlsValidationTrustSds;

  // TLS validation context trust for a local file certificate.
  file?: appmesh_VirtualNodeSpecListenerTlsValidationTrustFile;
}

export function appmesh_VirtualNodeSpecListenerTlsValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'sds',
      'TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate.',
      () => appmesh_VirtualNodeSpecListenerTlsValidationTrustSds_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'file',
      'TLS validation context trust for a local file certificate.',
      () => appmesh_VirtualNodeSpecListenerTlsValidationTrustFile_GetTypes(),
      false,
      false,
    ),
  ];
}
