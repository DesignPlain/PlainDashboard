import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_getGatewayRouteSpecHttpRouteActionTargetVirtualService {
  //
  virtualServiceName?: string;
}

export function appmesh_getGatewayRouteSpecHttpRouteActionTargetVirtualService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "virtualServiceName",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
