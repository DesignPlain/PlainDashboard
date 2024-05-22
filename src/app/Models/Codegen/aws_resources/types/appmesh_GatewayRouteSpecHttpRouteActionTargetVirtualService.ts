import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_GatewayRouteSpecHttpRouteActionTargetVirtualService {
  // Name of the virtual service that traffic is routed to. Must be between 1 and 255 characters in length.
  virtualServiceName?: string;
}

export function appmesh_GatewayRouteSpecHttpRouteActionTargetVirtualService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "virtualServiceName",
      "Name of the virtual service that traffic is routed to. Must be between 1 and 255 characters in length.",
      [],
      true,
      false,
    ),
  ];
}
