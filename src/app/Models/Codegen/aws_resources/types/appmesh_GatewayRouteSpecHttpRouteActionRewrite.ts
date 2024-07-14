import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_GatewayRouteSpecHttpRouteActionRewriteHostname,
  appmesh_GatewayRouteSpecHttpRouteActionRewriteHostname_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteActionRewriteHostname";
import {
  appmesh_GatewayRouteSpecHttpRouteActionRewritePath,
  appmesh_GatewayRouteSpecHttpRouteActionRewritePath_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteActionRewritePath";
import {
  appmesh_GatewayRouteSpecHttpRouteActionRewritePrefix,
  appmesh_GatewayRouteSpecHttpRouteActionRewritePrefix_GetTypes,
} from "./appmesh_GatewayRouteSpecHttpRouteActionRewritePrefix";

export interface appmesh_GatewayRouteSpecHttpRouteActionRewrite {
  // Host name to rewrite.
  hostname?: appmesh_GatewayRouteSpecHttpRouteActionRewriteHostname;

  // Exact path to rewrite.
  path?: appmesh_GatewayRouteSpecHttpRouteActionRewritePath;

  // Specified beginning characters to rewrite.
  prefix?: appmesh_GatewayRouteSpecHttpRouteActionRewritePrefix;
}

export function appmesh_GatewayRouteSpecHttpRouteActionRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "hostname",
      "Host name to rewrite.",
      appmesh_GatewayRouteSpecHttpRouteActionRewriteHostname_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "path",
      "Exact path to rewrite.",
      appmesh_GatewayRouteSpecHttpRouteActionRewritePath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "prefix",
      "Specified beginning characters to rewrite.",
      appmesh_GatewayRouteSpecHttpRouteActionRewritePrefix_GetTypes(),
      false,
      false,
    ),
  ];
}
