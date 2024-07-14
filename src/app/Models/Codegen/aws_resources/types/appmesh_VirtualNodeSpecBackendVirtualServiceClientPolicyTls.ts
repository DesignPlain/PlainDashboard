import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate";
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation";

export interface appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls {
  // Listener's TLS certificate.
  certificate?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate;

  // Whether the policy is enforced. Default is `true`.
  enforce?: boolean;

  // One or more ports that the policy is enforced for.
  ports?: Array<number>;

  // Listener's Transport Layer Security (TLS) validation context.
  validation?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation;
}

export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "certificate",
      "Listener's TLS certificate.",
      appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enforce",
      "Whether the policy is enforced. Default is `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "One or more ports that the policy is enforced for.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "validation",
      "Listener's Transport Layer Security (TLS) validation context.",
      appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation_GetTypes(),
      true,
      false,
    ),
  ];
}
