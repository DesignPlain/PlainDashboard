import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatch,
  Compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatch";
import {
  Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilter,
  Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilter_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilter";
import {
  Compute_URLMapPathMatcherRouteRuleMatchRuleQueryParameterMatch,
  Compute_URLMapPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleMatchRuleQueryParameterMatch";

export interface Compute_URLMapPathMatcherRouteRuleMatchRule {
  /*
Specifies a list of query parameter match criteria, all of which must match
corresponding query parameters in the request.
Structure is documented below.
*/
  QueryParameterMatches?: Array<Compute_URLMapPathMatcherRouteRuleMatchRuleQueryParameterMatch>;

  /*
For satisfying the matchRule condition, the path of the request must satisfy the
regular expression specified in regexMatch after removing any query parameters
and anchor supplied with the original URL. For regular expression grammar please
see en.cppreference.com/w/cpp/regex/ecmascript  Only one of prefixMatch,
fullPathMatch or regexMatch must be specified.
*/
  RegexMatch?: string;

  /*
For satisfying the matchRule condition, the path of the request must exactly
match the value specified in fullPathMatch after removing any query parameters
and anchor that may be part of the original URL. FullPathMatch must be between 1
and 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must
be specified.
*/
  FullPathMatch?: string;

  /*
Specifies a list of header match criteria, all of which must match corresponding
headers in the request.
Structure is documented below.
*/
  HeaderMatches?: Array<Compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatch>;

  /*
Specifies that prefixMatch and fullPathMatch matches are case sensitive.
Defaults to false.
*/
  IgnoreCase?: boolean;

  /*
Opaque filter criteria used by Loadbalancer to restrict routing configuration to
a limited set xDS compliant clients. In their xDS requests to Loadbalancer, xDS
clients present node metadata. If a match takes place, the relevant routing
configuration is made available to those proxies. For each metadataFilter in
this list, if its filterMatchCriteria is set to MATCH_ANY, at least one of the
filterLabels must match the corresponding label provided in the metadata. If its
filterMatchCriteria is set to MATCH_ALL, then all of its filterLabels must match
with corresponding labels in the provided metadata. metadataFilters specified
here can be overrides those specified in ForwardingRule that refers to this
UrlMap. metadataFilters only applies to Loadbalancers that have their
loadBalancingScheme set to INTERNAL_SELF_MANAGED.
Structure is documented below.
*/
  MetadataFilters?: Array<Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilter>;

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

  /*
For satisfying the matchRule condition, the request's path must begin with the
specified prefixMatch. prefixMatch must begin with a /. The value must be
between 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or
regexMatch must be specified.
*/
  PrefixMatch?: string;
}

export function Compute_URLMapPathMatcherRouteRuleMatchRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FullPathMatch",
      "For satisfying the matchRule condition, the path of the request must exactly\nmatch the value specified in fullPathMatch after removing any query parameters\nand anchor that may be part of the original URL. FullPathMatch must be between 1\nand 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must\nbe specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HeaderMatches",
      "Specifies a list of header match criteria, all of which must match corresponding\nheaders in the request.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IgnoreCase",
      "Specifies that prefixMatch and fullPathMatch matches are case sensitive.\nDefaults to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MetadataFilters",
      "Opaque filter criteria used by Loadbalancer to restrict routing configuration to\na limited set xDS compliant clients. In their xDS requests to Loadbalancer, xDS\nclients present node metadata. If a match takes place, the relevant routing\nconfiguration is made available to those proxies. For each metadataFilter in\nthis list, if its filterMatchCriteria is set to MATCH_ANY, at least one of the\nfilterLabels must match the corresponding label provided in the metadata. If its\nfilterMatchCriteria is set to MATCH_ALL, then all of its filterLabels must match\nwith corresponding labels in the provided metadata. metadataFilters specified\nhere can be overrides those specified in ForwardingRule that refers to this\nUrlMap. metadataFilters only applies to Loadbalancers that have their\nloadBalancingScheme set to INTERNAL_SELF_MANAGED.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilter_GetTypes(),
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
      "For satisfying the matchRule condition, the request's path must begin with the\nspecified prefixMatch. prefixMatch must begin with a /. The value must be\nbetween 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or\nregexMatch must be specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "QueryParameterMatches",
      "Specifies a list of query parameter match criteria, all of which must match\ncorresponding query parameters in the request.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RegexMatch",
      "For satisfying the matchRule condition, the path of the request must satisfy the\nregular expression specified in regexMatch after removing any query parameters\nand anchor supplied with the original URL. For regular expression grammar please\nsee en.cppreference.com/w/cpp/regex/ecmascript  Only one of prefixMatch,\nfullPathMatch or regexMatch must be specified.",
      [],
      false,
      false,
    ),
  ];
}
