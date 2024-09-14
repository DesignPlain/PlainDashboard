import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_GatewayRouteSpecGrpcRouteActionTargetVirtualService,
  appmesh_GatewayRouteSpecGrpcRouteActionTargetVirtualService_GetTypes,
} from "./appmesh_GatewayRouteSpecGrpcRouteActionTargetVirtualService";

export interface appmesh_GatewayRouteSpecGrpcRouteActionTarget {
  // The port number that corresponds to the target for Virtual Service provider port. This is required when the provider (router or node) of the Virtual Service has multiple listeners.
  port?: number;

  // Virtual service gateway route target.
  virtualService?: appmesh_GatewayRouteSpecGrpcRouteActionTargetVirtualService;
}

export function appmesh_GatewayRouteSpecGrpcRouteActionTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "virtualService",
      "Virtual service gateway route target.",
      () =>
        appmesh_GatewayRouteSpecGrpcRouteActionTargetVirtualService_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number that corresponds to the target for Virtual Service provider port. This is required when the provider (router or node) of the Virtual Service has multiple listeners.",
      () => [],
      false,
      false,
    ),
  ];
}
