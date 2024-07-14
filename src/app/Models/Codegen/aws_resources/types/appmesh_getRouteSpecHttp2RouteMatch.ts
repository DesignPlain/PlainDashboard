import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getRouteSpecHttp2RouteMatchPath,
  appmesh_getRouteSpecHttp2RouteMatchPath_GetTypes,
} from "./appmesh_getRouteSpecHttp2RouteMatchPath";
import {
  appmesh_getRouteSpecHttp2RouteMatchQueryParameter,
  appmesh_getRouteSpecHttp2RouteMatchQueryParameter_GetTypes,
} from "./appmesh_getRouteSpecHttp2RouteMatchQueryParameter";
import {
  appmesh_getRouteSpecHttp2RouteMatchHeader,
  appmesh_getRouteSpecHttp2RouteMatchHeader_GetTypes,
} from "./appmesh_getRouteSpecHttp2RouteMatchHeader";

export interface appmesh_getRouteSpecHttp2RouteMatch {
  //
  paths?: Array<appmesh_getRouteSpecHttp2RouteMatchPath>;

  //
  port?: number;

  //
  prefix?: string;

  //
  queryParameters?: Array<appmesh_getRouteSpecHttp2RouteMatchQueryParameter>;

  //
  scheme?: string;

  //
  headers?: Array<appmesh_getRouteSpecHttp2RouteMatchHeader>;

  //
  method?: string;
}

export function appmesh_getRouteSpecHttp2RouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "paths",
      "",
      appmesh_getRouteSpecHttp2RouteMatchPath_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "port", "", [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "queryParameters",
      "",
      appmesh_getRouteSpecHttp2RouteMatchQueryParameter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "scheme", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "",
      appmesh_getRouteSpecHttp2RouteMatchHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "method", "", [], true, false),
  ];
}
