import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher,
  monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher_GetTypes,
} from "./monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher";

export interface monitoring_UptimeCheckConfigContentMatcher {
  // String or regex content to match (max 1024 bytes)
  content?: string;

  /*
Information needed to perform a JSONPath content match. Used for `ContentMatcherOption::MATCHES_JSON_PATH` and `ContentMatcherOption::NOT_MATCHES_JSON_PATH`.
Structure is documented below.
*/
  jsonPathMatcher?: monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher;

  /*
The type of content matcher that will be applied to the server output, compared to the content string when the check is run.
Default value is `CONTAINS_STRING`.
Possible values are: `CONTAINS_STRING`, `NOT_CONTAINS_STRING`, `MATCHES_REGEX`, `NOT_MATCHES_REGEX`, `MATCHES_JSON_PATH`, `NOT_MATCHES_JSON_PATH`.
*/
  matcher?: string;
}

export function monitoring_UptimeCheckConfigContentMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "content",
      "String or regex content to match (max 1024 bytes)",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonPathMatcher",
      "Information needed to perform a JSONPath content match. Used for `ContentMatcherOption::MATCHES_JSON_PATH` and `ContentMatcherOption::NOT_MATCHES_JSON_PATH`.\nStructure is documented below.",
      () =>
        monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "matcher",
      "The type of content matcher that will be applied to the server output, compared to the content string when the check is run.\nDefault value is `CONTAINS_STRING`.\nPossible values are: `CONTAINS_STRING`, `NOT_CONTAINS_STRING`, `MATCHES_REGEX`, `NOT_MATCHES_REGEX`, `MATCHES_JSON_PATH`, `NOT_MATCHES_JSON_PATH`.",
      () => [],
      false,
      false,
    ),
  ];
}
