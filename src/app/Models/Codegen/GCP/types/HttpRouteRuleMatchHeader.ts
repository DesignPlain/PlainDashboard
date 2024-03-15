import { HttpRouteRuleMatchHeaderRangeMatch } from "./HttpRouteRuleMatchHeaderRangeMatch";

export interface HttpRouteRuleMatchHeader {
  // The name of the HTTP header to match against.
  Header?: string;

  // If specified, the match result will be inverted before checking. Default value is set to false.
  InvertMatch?: boolean;

  // The value of the header must start with the contents of prefixMatch.
  PrefixMatch?: string;

  // A header with headerName must exist. The match takes place whether or not the header has a value.
  PresentMatch?: boolean;

  /*
If specified, the rule will match if the request header value is within the range.
Structure is documented below.
*/
  RangeMatch?: HttpRouteRuleMatchHeaderRangeMatch;

  // The value of the header must match the regular expression specified in regexMatch.
  RegexMatch?: string;

  // The value of the header must end with the contents of suffixMatch.
  SuffixMatch?: string;

  // The value of the header should match exactly the content of exactMatch.
  ExactMatch?: string;
}
