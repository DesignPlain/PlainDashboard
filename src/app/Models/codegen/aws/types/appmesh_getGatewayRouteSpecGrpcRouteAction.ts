import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getGatewayRouteSpecGrpcRouteActionTarget,
  appmesh_getGatewayRouteSpecGrpcRouteActionTarget_GetTypes,
} from "./appmesh_getGatewayRouteSpecGrpcRouteActionTarget";

export interface appmesh_getGatewayRouteSpecGrpcRouteAction {
  //
  targets?: Array<appmesh_getGatewayRouteSpecGrpcRouteActionTarget>;
}

export function appmesh_getGatewayRouteSpecGrpcRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targets",
      "",
      () => appmesh_getGatewayRouteSpecGrpcRouteActionTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
