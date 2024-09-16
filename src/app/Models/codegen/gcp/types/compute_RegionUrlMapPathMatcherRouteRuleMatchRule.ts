import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionUrlMapPathMatcherRouteRuleMatchRuleHeaderMatch,
  compute_RegionUrlMapPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes,
} from './compute_RegionUrlMapPathMatcherRouteRuleMatchRuleHeaderMatch';
import {
  compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilter,
  compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilter_GetTypes,
} from './compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilter';
import {
  compute_RegionUrlMapPathMatcherRouteRuleMatchRuleQueryParameterMatch,
  compute_RegionUrlMapPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes,
} from './compute_RegionUrlMapPathMatcherRouteRuleMatchRuleQueryParameterMatch';

export interface compute_RegionUrlMapPathMatcherRouteRuleMatchRule {
  /*
Specifies a list of header match criteria, all of which must match corresponding
headers in the request.
Structure is documented below.
*/
  headerMatches?: Array<compute_RegionUrlMapPathMatcherRouteRuleMatchRuleHeaderMatch>;

  /*
Specifies that prefixMatch and fullPathMatch matches are case sensitive.
Defaults to false.
*/
  ignoreCase?: boolean;

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
  metadataFilters?: Array<compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilter>;

  /*
For satisfying the matchRule condition, the request's path must begin with the
specified prefixMatch. prefixMatch must begin with a /. The value must be
between 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or
regexMatch must be specified.
*/
  prefixMatch?: string;

  /*
Specifies a list of query parameter match criteria, all of which must match
corresponding query parameters in the request.
Structure is documented below.
*/
  queryParameterMatches?: Array<compute_RegionUrlMapPathMatcherRouteRuleMatchRuleQueryParameterMatch>;

  /*
For satisfying the matchRule condition, the path of the request must satisfy the
regular expression specified in regexMatch after removing any query parameters
and anchor supplied with the original URL. For regular expression grammar please
see en.cppreference.com/w/cpp/regex/ecmascript  Only one of prefixMatch,
fullPathMatch or regexMatch must be specified.
*/
  regexMatch?: string;

  /*
For satisfying the matchRule condition, the path of the request must exactly
match the value specified in fullPathMatch after removing any query parameters
and anchor that may be part of the original URL. FullPathMatch must be between 1
and 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must
be specified.
*/
  fullPathMatch?: string;
}

export function compute_RegionUrlMapPathMatcherRouteRuleMatchRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'metadataFilters',
      'Opaque filter criteria used by Loadbalancer to restrict routing configuration to\na limited set xDS compliant clients. In their xDS requests to Loadbalancer, xDS\nclients present node metadata. If a match takes place, the relevant routing\nconfiguration is made available to those proxies. For each metadataFilter in\nthis list, if its filterMatchCriteria is set to MATCH_ANY, at least one of the\nfilterLabels must match the corresponding label provided in the metadata. If its\nfilterMatchCriteria is set to MATCH_ALL, then all of its filterLabels must match\nwith corresponding labels in the provided metadata. metadataFilters specified\nhere can be overrides those specified in ForwardingRule that refers to this\nUrlMap. metadataFilters only applies to Loadbalancers that have their\nloadBalancingScheme set to INTERNAL_SELF_MANAGED.\nStructure is documented below.',
      () =>
        compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'prefixMatch',
      "For satisfying the matchRule condition, the request's path must begin with the\nspecified prefixMatch. prefixMatch must begin with a /. The value must be\nbetween 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or\nregexMatch must be specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'queryParameterMatches',
      'Specifies a list of query parameter match criteria, all of which must match\ncorresponding query parameters in the request.\nStructure is documented below.',
      () =>
        compute_RegionUrlMapPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'regexMatch',
      'For satisfying the matchRule condition, the path of the request must satisfy the\nregular expression specified in regexMatch after removing any query parameters\nand anchor supplied with the original URL. For regular expression grammar please\nsee en.cppreference.com/w/cpp/regex/ecmascript  Only one of prefixMatch,\nfullPathMatch or regexMatch must be specified.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fullPathMatch',
      'For satisfying the matchRule condition, the path of the request must exactly\nmatch the value specified in fullPathMatch after removing any query parameters\nand anchor that may be part of the original URL. FullPathMatch must be between 1\nand 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must\nbe specified.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'headerMatches',
      'Specifies a list of header match criteria, all of which must match corresponding\nheaders in the request.\nStructure is documented below.',
      () =>
        compute_RegionUrlMapPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'ignoreCase',
      'Specifies that prefixMatch and fullPathMatch matches are case sensitive.\nDefaults to false.',
      () => [],
      false,
      false,
    ),
  ];
}
