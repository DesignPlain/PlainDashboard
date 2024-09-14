import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation";
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate";

export interface appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls {
  // Listener's Transport Layer Security (TLS) validation context.
  validation?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation;

  // Listener's TLS certificate.
  certificate?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate;

  // Whether the policy is enforced. Default is `true`.
  enforce?: boolean;

  // One or more ports that the policy is enforced for.
  ports?: Array<number>;
}

export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "validation",
      "Listener's Transport Layer Security (TLS) validation context.",
      () =>
        appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "certificate",
      "Listener's TLS certificate.",
      () =>
        appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enforce",
      "Whether the policy is enforced. Default is `true`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "One or more ports that the policy is enforced for.",
      () => InputType_Number_GetTypes(),
      false,
      false,
    ),
  ];
}
