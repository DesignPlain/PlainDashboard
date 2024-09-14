import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_getGatewayRouteSpecHttp2RouteMatchPath {
  //
  exact?: string;

  //
  regex?: string;
}

export function appmesh_getGatewayRouteSpecHttp2RouteMatchPath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "exact", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "regex", "", () => [], true, false),
  ];
}
