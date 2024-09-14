import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getGatewayRouteSpecHttpRouteActionRewriteHostname,
  appmesh_getGatewayRouteSpecHttpRouteActionRewriteHostname_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteActionRewriteHostname";
import {
  appmesh_getGatewayRouteSpecHttpRouteActionRewritePath,
  appmesh_getGatewayRouteSpecHttpRouteActionRewritePath_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteActionRewritePath";
import {
  appmesh_getGatewayRouteSpecHttpRouteActionRewritePrefix,
  appmesh_getGatewayRouteSpecHttpRouteActionRewritePrefix_GetTypes,
} from "./appmesh_getGatewayRouteSpecHttpRouteActionRewritePrefix";

export interface appmesh_getGatewayRouteSpecHttpRouteActionRewrite {
  //
  hostnames?: Array<appmesh_getGatewayRouteSpecHttpRouteActionRewriteHostname>;

  //
  paths?: Array<appmesh_getGatewayRouteSpecHttpRouteActionRewritePath>;

  //
  prefixes?: Array<appmesh_getGatewayRouteSpecHttpRouteActionRewritePrefix>;
}

export function appmesh_getGatewayRouteSpecHttpRouteActionRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "hostnames",
      "",
      () =>
        appmesh_getGatewayRouteSpecHttpRouteActionRewriteHostname_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "paths",
      "",
      () => appmesh_getGatewayRouteSpecHttpRouteActionRewritePath_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "prefixes",
      "",
      () => appmesh_getGatewayRouteSpecHttpRouteActionRewritePrefix_GetTypes(),
      true,
      false,
    ),
  ];
}
