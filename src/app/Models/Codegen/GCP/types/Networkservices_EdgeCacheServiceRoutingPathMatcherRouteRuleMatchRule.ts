import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch,
  Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch";

export interface Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule {
  // For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. prefixMatch must begin with a /.
  PrefixMatch?: string;

  /*
Specifies a list of query parameter match criteria, all of which must match corresponding query parameters in the request.
Structure is documented below.
*/
  QueryParameterMatches?: Array<Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch>;

  // For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL.
  FullPathMatch?: string;

  /*
Specifies a list of header match criteria, all of which must match corresponding headers in the request.
Structure is documented below.
*/
  HeaderMatches?: Array<Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch>;

  // Specifies that prefixMatch and fullPathMatch matches are case sensitive.
  IgnoreCase?: boolean;

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
  PathTemplateMatch?: string;
}

export function Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "QueryParameterMatches",
      "Specifies a list of query parameter match criteria, all of which must match corresponding query parameters in the request.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FullPathMatch",
      "For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HeaderMatches",
      "Specifies a list of header match criteria, all of which must match corresponding headers in the request.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IgnoreCase",
      "Specifies that prefixMatch and fullPathMatch matches are case sensitive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PathTemplateMatch",
      "For satisfying the matchRule condition, the path of the request\nmust match the wildcard pattern specified in pathTemplateMatch\nafter removing any query parameters and anchor that may be part\nof the original URL.\npathTemplateMatch must be between 1 and 255 characters\n(inclusive).  The pattern specified by pathTemplateMatch may\nhave at most 5 wildcard operators and at most 5 variable\ncaptures in total.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrefixMatch",
      "For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. prefixMatch must begin with a /.",
      [],
      false,
      false,
    ),
  ];
}
