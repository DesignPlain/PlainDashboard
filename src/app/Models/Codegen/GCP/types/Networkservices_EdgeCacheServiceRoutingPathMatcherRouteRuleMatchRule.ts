import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch,
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes,
} from "./networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch";
import {
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch,
  networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes,
} from "./networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch";

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule {
  // For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL.
  fullPathMatch?: string;

  /*
Specifies a list of header match criteria, all of which must match corresponding headers in the request.
Structure is documented below.
*/
  headerMatches?: Array<networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch>;

  // Specifies that prefixMatch and fullPathMatch matches are case sensitive.
  ignoreCase?: boolean;

  /*
For satisfying the matchRule condition, the path of the request
must match the wildcard pattern specified in pathTemplateMatch
after removing any query parameters and anchor that may be part
of the original URL.
pathTemplateMatch must be between 1 and 255 characters
(inclusive).  The pattern specified by pathTemplateMatch may
have at most 5 wildcard operators and at most 5 variable
captures in total.
*/
  pathTemplateMatch?: string;

  // For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. prefixMatch must begin with a /.
  prefixMatch?: string;

  /*
Specifies a list of query parameter match criteria, all of which must match corresponding query parameters in the request.
Structure is documented below.
*/
  queryParameterMatches?: Array<networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch>;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "ignoreCase",
      "Specifies that prefixMatch and fullPathMatch matches are case sensitive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pathTemplateMatch",
      "For satisfying the matchRule condition, the path of the request\nmust match the wildcard pattern specified in pathTemplateMatch\nafter removing any query parameters and anchor that may be part\nof the original URL.\npathTemplateMatch must be between 1 and 255 characters\n(inclusive).  The pattern specified by pathTemplateMatch may\nhave at most 5 wildcard operators and at most 5 variable\ncaptures in total.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixMatch",
      "For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. prefixMatch must begin with a /.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryParameterMatches",
      "Specifies a list of query parameter match criteria, all of which must match corresponding query parameters in the request.\nStructure is documented below.",
      networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fullPathMatch",
      "For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerMatches",
      "Specifies a list of header match criteria, all of which must match corresponding headers in the request.\nStructure is documented below.",
      networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
