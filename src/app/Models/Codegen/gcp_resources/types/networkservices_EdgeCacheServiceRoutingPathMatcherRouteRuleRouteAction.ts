import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy,
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy_GetTypes,
} from "./networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy";
import {
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy,
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy_GetTypes,
} from "./networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy";
import {
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite,
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite_GetTypes,
} from "./networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite";

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction {
  /*
The policy to use for defining caching and signed request behaviour for requests that match this route.
Structure is documented below.
*/
  cdnPolicy?: networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy;

  /*
CORSPolicy defines Cross-Origin-Resource-Sharing configuration, including which CORS response headers will be set.
Structure is documented below.
*/
  corsPolicy?: networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy;

  /*
The URL rewrite configuration for requests that match this route.
Structure is documented below.
*/
  urlRewrite?: networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cdnPolicy",
      "The policy to use for defining caching and signed request behaviour for requests that match this route.\nStructure is documented below.",
      networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "corsPolicy",
      "CORSPolicy defines Cross-Origin-Resource-Sharing configuration, including which CORS response headers will be set.\nStructure is documented below.",
      networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "urlRewrite",
      "The URL rewrite configuration for requests that match this route.\nStructure is documented below.",
      networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
  ];
}
