import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch,
  compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch_GetTypes,
} from "./compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch";

export interface compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatch {
  /*
A header with the contents of headerName must exist. The match takes place
whether or not the request's header has a value or not. Only one of exactMatch,
prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
*/
  presentMatch?: boolean;

  /*
The header value must be an integer and its value must be in the range specified
in rangeMatch. If the header does not contain an integer, number or is empty,
the match fails. For example for a range [-5, 0]   - -3 will match.  - 0 will
not match.  - 0.25 will not match.  - -3someString will not match.   Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set.
Structure is documented below.
*/
  rangeMatch?: compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch;

  /*
The value of the header must match the regular expression specified in
regexMatch. For regular expression grammar, please see:
en.cppreference.com/w/cpp/regex/ecmascript  For matching against a port
specified in the HTTP request, use a headerMatch with headerName set to PORT and
a regular expression that satisfies the RFC2616 Host header's port specifier.
Only one of exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or
rangeMatch must be set.
*/
  regexMatch?: string;

  /*
The value of the header must end with the contents of suffixMatch. Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set.
*/
  suffixMatch?: string;

  /*
The value should exactly match contents of exactMatch. Only one of exactMatch,
prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
*/
  exactMatch?: string;

  /*
The name of the HTTP header to match. For matching against the HTTP request's
authority, use a headerMatch with the header name ":authority". For matching a
request's method, use the headerName ":method".
*/
  headerName?: string;

  /*
If set to false, the headerMatch is considered a match if the match criteria
above are met. If set to true, the headerMatch is considered a match if the
match criteria above are NOT met. Defaults to false.
*/
  invertMatch?: boolean;

  /*
The value of the header must start with the contents of prefixMatch. Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set.
*/
  prefixMatch?: string;
}

export function compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "regexMatch",
      "The value of the header must match the regular expression specified in\nregexMatch. For regular expression grammar, please see:\nen.cppreference.com/w/cpp/regex/ecmascript  For matching against a port\nspecified in the HTTP request, use a headerMatch with headerName set to PORT and\na regular expression that satisfies the RFC2616 Host header's port specifier.\nOnly one of exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or\nrangeMatch must be set.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "suffixMatch",
      "The value of the header must end with the contents of suffixMatch. Only one of\nexactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch\nmust be set.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "exactMatch",
      "The value should exactly match contents of exactMatch. Only one of exactMatch,\nprefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "headerName",
      'The name of the HTTP header to match. For matching against the HTTP request\'s\nauthority, use a headerMatch with the header name ":authority". For matching a\nrequest\'s method, use the headerName ":method".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "invertMatch",
      "If set to false, the headerMatch is considered a match if the match criteria\nabove are met. If set to true, the headerMatch is considered a match if the\nmatch criteria above are NOT met. Defaults to false.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixMatch",
      "The value of the header must start with the contents of prefixMatch. Only one of\nexactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch\nmust be set.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "presentMatch",
      "A header with the contents of headerName must exist. The match takes place\nwhether or not the request's header has a value or not. Only one of exactMatch,\nprefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rangeMatch",
      "The header value must be an integer and its value must be in the range specified\nin rangeMatch. If the header does not contain an integer, number or is empty,\nthe match fails. For example for a range [-5, 0]   - -3 will match.  - 0 will\nnot match.  - 0.25 will not match.  - -3someString will not match.   Only one of\nexactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch\nmust be set.\nStructure is documented below.",
      () =>
        compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
