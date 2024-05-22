import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  // Name of the secret for a virtual node's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
  secretName?: string;
}

export function appmesh_VirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secretName",
      "Name of the secret for a virtual node's Transport Layer Security (TLS) Secret Discovery Service validation context trust.",
      [],
      true,
      false,
    ),
  ];
}
