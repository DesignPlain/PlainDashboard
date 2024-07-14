import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService,
  appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService_GetTypes,
} from "./appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService";

export interface appmesh_getGatewayRouteSpecGrpcRouteActionTarget {
  //
  port?: number;

  //
  virtualServices?: Array<appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService>;
}

export function appmesh_getGatewayRouteSpecGrpcRouteActionTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "virtualServices",
      "",
      appmesh_getGatewayRouteSpecGrpcRouteActionTargetVirtualService_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "port", "", [], true, false),
  ];
}
