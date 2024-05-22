import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_GatewayRouteSpecHttpRouteActionTargetVirtualService,
  appmesh_GatewayRouteSpecHttpRouteActionTargetVirtualService_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteActionTargetVirtualService";

export interface appmesh_GatewayRouteSpecHttpRouteActionTarget {
  // The port number that corresponds to the target for Virtual Service provider port. This is required when the provider (router or node) of the Virtual Service has multiple listeners.
  port?: number;

  // Virtual service gateway route target.
  virtualService?: appmesh_GatewayRouteSpecHttpRouteActionTargetVirtualService;
}

export function appmesh_GatewayRouteSpecHttpRouteActionTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number that corresponds to the target for Virtual Service provider port. This is required when the provider (router or node) of the Virtual Service has multiple listeners.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "virtualService",
      "Virtual service gateway route target.",
      appmesh_GatewayRouteSpecHttpRouteActionTargetVirtualService_GetTypes(),
      true,
      false,
    ),
  ];
}
