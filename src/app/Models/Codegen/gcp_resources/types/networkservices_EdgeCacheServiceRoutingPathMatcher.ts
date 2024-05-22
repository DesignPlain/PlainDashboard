import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule,
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule_GetTypes,
} from "./networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule";

export interface networkservices_EdgeCacheServiceRoutingPathMatcher {
  // A human-readable description of the resource.
  description?: string;

  // The name to which this PathMatcher is referred by the HostRule.
  name?: string;

  /*
The routeRules to match against. routeRules support advanced routing behaviour, and can match on paths, headers and query parameters, as well as status codes and HTTP methods.
Structure is documented below.
*/
  routeRules?: Array<networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule>;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "A human-readable description of the resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name to which this PathMatcher is referred by the HostRule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "routeRules",
      "The routeRules to match against. routeRules support advanced routing behaviour, and can match on paths, headers and query parameters, as well as status codes and HTTP methods.\nStructure is documented below.",
      networkservices_EdgeCacheServiceRoutingPathMatcherRouteRule_GetTypes(),
      true,
      false,
    ),
  ];
}
