import { HttpRouteRuleMatchHeader } from "./HttpRouteRuleMatchHeader";
import { HttpRouteRuleMatchQueryParameter } from "./HttpRouteRuleMatchQueryParameter";

export interface HttpRouteRuleMatch {
  // The HTTP request path value should exactly match this value.
  FullPathMatch?: string;

  /*
Specifies a list of HTTP request headers to match against.
Structure is documented below.
*/
  Headers?: Array<HttpRouteRuleMatchHeader>;

  // Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.
  IgnoreCase?: boolean;

  // The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.
  PrefixMatch?: string;

  /*
Specifies a list of query parameters to match against.
Structure is documented below.
*/
  QueryParameters?: Array<HttpRouteRuleMatchQueryParameter>;

  // The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax
  RegexMatch?: string;
}
