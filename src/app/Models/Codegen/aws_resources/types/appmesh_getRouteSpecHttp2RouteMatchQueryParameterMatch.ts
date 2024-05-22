import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getRouteSpecHttp2RouteMatchQueryParameterMatch {
  //
  exact?: string;
}

export function appmesh_getRouteSpecHttp2RouteMatchQueryParameterMatch_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.String, "exact", "", [], true, false)];
}
