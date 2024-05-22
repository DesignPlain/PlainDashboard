import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_GatewayRouteSpecHttp2RouteActionRewritePath {
  // The exact path to match on.
  exact?: string;
}

export function appmesh_GatewayRouteSpecHttp2RouteActionRewritePath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "exact",
      "The exact path to match on.",
      [],
      true,
      false,
    ),
  ];
}
