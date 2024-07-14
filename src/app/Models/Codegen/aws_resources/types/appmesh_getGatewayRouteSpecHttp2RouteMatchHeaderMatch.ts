import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatchRange,
  appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatchRange_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatchRange";

export interface appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatch {
  //
  ranges?: Array<appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatchRange>;

  //
  regex?: string;

  //
  suffix?: string;

  //
  exact?: string;

  //
  prefix?: string;
}

export function appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ranges",
      "",
      appmesh_getGatewayRouteSpecHttp2RouteMatchHeaderMatchRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "regex", "", [], true, false),
    new DynamicUIProps(InputType.String, "suffix", "", [], true, false),
    new DynamicUIProps(InputType.String, "exact", "", [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", [], true, false),
  ];
}
