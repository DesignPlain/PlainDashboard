import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicy,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicy_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicy";

export interface appmesh_getVirtualNodeSpecBackendVirtualService {
  //
  clientPolicies?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicy>;

  //
  virtualServiceName?: string;
}

export function appmesh_getVirtualNodeSpecBackendVirtualService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "virtualServiceName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "clientPolicies",
      "",
      () =>
        appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
