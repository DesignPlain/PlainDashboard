export interface HttpRouteRuleMatchQueryParameter {
  // The value of the query parameter must exactly match the contents of exactMatch.
  ExactMatch?: string;

  // Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.
  PresentMatch?: boolean;

  // The name of the query parameter to match.
  QueryParameter?: string;

  // The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax
  RegexMatch?: string;
}
