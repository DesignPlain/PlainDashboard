export interface UptimeCheckConfigContentMatcherJsonPathMatcher {
  /*
Options to perform JSONPath content matching.
Default value is `EXACT_MATCH`.
Possible values are: `EXACT_MATCH`, `REGEX_MATCH`.
*/
  JsonMatcher?: string;

  // JSONPath within the response output pointing to the expected `ContentMatcher::content` to match against.
  JsonPath?: string;
}
