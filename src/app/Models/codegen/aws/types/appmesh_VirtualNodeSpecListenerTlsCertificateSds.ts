import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_VirtualNodeSpecListenerTlsCertificateSds {
  // Name of the secret for a virtual node's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
  secretName?: string;
}

export function appmesh_VirtualNodeSpecListenerTlsCertificateSds_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'secretName',
      "Name of the secret for a virtual node's Transport Layer Security (TLS) Secret Discovery Service validation context trust.",
      () => [],
      true,
      false,
    ),
  ];
}
