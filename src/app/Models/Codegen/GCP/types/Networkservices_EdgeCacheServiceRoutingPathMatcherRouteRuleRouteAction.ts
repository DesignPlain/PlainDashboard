import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite";

export interface Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction {
  /*
The policy to use for defining caching and signed request behaviour for requests that match this route.
Structure is documented below.
*/
  CdnPolicy?: Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy;

  /*
CORSPolicy defines Cross-Origin-Resource-Sharing configuration, including which CORS response headers will be set.
Structure is documented below.
*/
  CorsPolicy?: Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy;

  /*
The URL rewrite configuration for requests that match this route.
Structure is documented below.
*/
  UrlRewrite?: Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite;
}

export function Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CdnPolicy",
      "The policy to use for defining caching and signed request behaviour for requests that match this route.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CorsPolicy",
      "CORSPolicy defines Cross-Origin-Resource-Sharing configuration, including which CORS response headers will be set.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UrlRewrite",
      "The URL rewrite configuration for requests that match this route.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
  ];
}
