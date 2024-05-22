import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls,
  appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls";

export interface appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicy {
  // Transport Layer Security (TLS) client policy.
  tls?: appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls;
}

export function appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "tls",
      "Transport Layer Security (TLS) client policy.",
      appmesh_VirtualNodeSpecBackendVirtualServiceClientPolicyTls_GetTypes(),
      false,
      false,
    ),
  ];
}
