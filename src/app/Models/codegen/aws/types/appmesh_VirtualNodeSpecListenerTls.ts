import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecListenerTlsCertificate,
  appmesh_VirtualNodeSpecListenerTlsCertificate_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTlsCertificate';
import {
  appmesh_VirtualNodeSpecListenerTlsValidation,
  appmesh_VirtualNodeSpecListenerTlsValidation_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTlsValidation';

export interface appmesh_VirtualNodeSpecListenerTls {
  // Listener's TLS certificate.
  certificate?: appmesh_VirtualNodeSpecListenerTlsCertificate;

  // Listener's TLS mode. Valid values: `DISABLED`, `PERMISSIVE`, `STRICT`.
  mode?: string;

  // Listener's Transport Layer Security (TLS) validation context.
  validation?: appmesh_VirtualNodeSpecListenerTlsValidation;
}

export function appmesh_VirtualNodeSpecListenerTls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'certificate',
      "Listener's TLS certificate.",
      () => appmesh_VirtualNodeSpecListenerTlsCertificate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mode',
      "Listener's TLS mode. Valid values: `DISABLED`, `PERMISSIVE`, `STRICT`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'validation',
      "Listener's Transport Layer Security (TLS) validation context.",
      () => appmesh_VirtualNodeSpecListenerTlsValidation_GetTypes(),
      false,
      false,
    ),
  ];
}
