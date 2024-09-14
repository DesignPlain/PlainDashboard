import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter,
  appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter";
import {
  appmesh_getGatewayRouteSpecHttpRouteMatchHeader,
  appmesh_getGatewayRouteSpecHttpRouteMatchHeader_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteMatchHeader";
import {
  appmesh_getGatewayRouteSpecHttpRouteMatchHostname,
  appmesh_getGatewayRouteSpecHttpRouteMatchHostname_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteMatchHostname";
import {
  appmesh_getGatewayRouteSpecHttpRouteMatchPath,
  appmesh_getGatewayRouteSpecHttpRouteMatchPath_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteMatchPath";

export interface appmesh_getGatewayRouteSpecHttpRouteMatch {
  //
  queryParameters?: Array<appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter>;

  //
  headers?: Array<appmesh_getGatewayRouteSpecHttpRouteMatchHeader>;

  //
  hostnames?: Array<appmesh_getGatewayRouteSpecHttpRouteMatchHostname>;

  //
  paths?: Array<appmesh_getGatewayRouteSpecHttpRouteMatchPath>;

  //
  port?: number;

  //
  prefix?: string;
}

export function appmesh_getGatewayRouteSpecHttpRouteMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "queryParameters",
      "",
      () => appmesh_getGatewayRouteSpecHttpRouteMatchQueryParameter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "",
      () => appmesh_getGatewayRouteSpecHttpRouteMatchHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hostnames",
      "",
      () => appmesh_getGatewayRouteSpecHttpRouteMatchHostname_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "paths",
      "",
      () => appmesh_getGatewayRouteSpecHttpRouteMatchPath_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "port", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "prefix", "", () => [], true, false),
  ];
}
