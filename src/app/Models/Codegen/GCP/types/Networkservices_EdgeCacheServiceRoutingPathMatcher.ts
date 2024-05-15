import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule";

export interface Networkservices_EdgeCacheServiceRoutingPathMatcher {
  // A human-readable description of the resource.
  Description?: string;

  // The name to which this PathMatcher is referred by the HostRule.
  Name?: string;

  /*
The routeRules to match against. routeRules support advanced routing behaviour, and can match on paths, headers and query parameters, as well as status codes and HTTP methods.
Structure is documented below.
*/
  RouteRules?: Array<Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule>;
}

export function Networkservices_EdgeCacheServiceRoutingPathMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A human-readable description of the resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name to which this PathMatcher is referred by the HostRule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RouteRules",
      "The routeRules to match against. routeRules support advanced routing behaviour, and can match on paths, headers and query parameters, as well as status codes and HTTP methods.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule_GetTypes(),
      true,
      false,
    ),
  ];
}
