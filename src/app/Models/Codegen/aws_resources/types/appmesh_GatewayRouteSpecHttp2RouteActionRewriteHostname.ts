import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname {
  // Default target host name to write to. Valid values: `ENABLED`, `DISABLED`.
  defaultTargetHostname?: string;
}

export function appmesh_GatewayRouteSpecHttp2RouteActionRewriteHostname_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "defaultTargetHostname",
      "Default target host name to write to. Valid values: `ENABLED`, `DISABLED`.",
      [],
      true,
      false,
    ),
  ];
}
