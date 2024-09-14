import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl";

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicy {
  //
  tls?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tls",
      "",
      () =>
        appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl_GetTypes(),
      true,
      false,
    ),
  ];
}
