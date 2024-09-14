import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTl,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTl_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTl";

export interface appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicy {
  //
  tls?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTl>;
}

export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tls",
      "",
      () =>
        appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTl_GetTypes(),
      true,
      false,
    ),
  ];
}
