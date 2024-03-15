import { UptimeCheckConfigContentMatcherJsonPathMatcher } from "./UptimeCheckConfigContentMatcherJsonPathMatcher";

export interface UptimeCheckConfigContentMatcher {
  /*
The type of content matcher that will be applied to the server output, compared to the content string when the check is run.
Default value is `CONTAINS_STRING`.
Possible values are: `CONTAINS_STRING`, `NOT_CONTAINS_STRING`, `MATCHES_REGEX`, `NOT_MATCHES_REGEX`, `MATCHES_JSON_PATH`, `NOT_MATCHES_JSON_PATH`.
*/
  Matcher?: string;

  // String or regex content to match (max 1024 bytes)
  Content?: string;

  /*
Information needed to perform a JSONPath content match. Used for `ContentMatcherOption::MATCHES_JSON_PATH` and `ContentMatcherOption::NOT_MATCHES_JSON_PATH`.
Structure is documented below.
*/
  JsonPathMatcher?: UptimeCheckConfigContentMatcherJsonPathMatcher;
}
