import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getGatewayRouteSpecHttp2RouteMatchPath {
  //
  exact?: string;

  //
  regex?: string;
}

export function appmesh_getGatewayRouteSpecHttp2RouteMatchPath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "exact", "", [], true, false),
    new DynamicUIProps(InputType.String, "regex", "", [], true, false),
  ];
}
