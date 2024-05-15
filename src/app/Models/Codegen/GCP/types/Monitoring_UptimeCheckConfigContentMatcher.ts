import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher,
  Monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher_GetTypes,
} from "./Monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher";

export interface Monitoring_UptimeCheckConfigContentMatcher {
  // String or regex content to match (max 1024 bytes)
  Content?: string;

  /*
Information needed to perform a JSONPath content match. Used for `ContentMatcherOption::MATCHES_JSON_PATH` and `ContentMatcherOption::NOT_MATCHES_JSON_PATH`.
Structure is documented below.
*/
  JsonPathMatcher?: Monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher;

  /*
The type of content matcher that will be applied to the server output, compared to the content string when the check is run.
Default value is `CONTAINS_STRING`.
Possible values are: `CONTAINS_STRING`, `NOT_CONTAINS_STRING`, `MATCHES_REGEX`, `NOT_MATCHES_REGEX`, `MATCHES_JSON_PATH`, `NOT_MATCHES_JSON_PATH`.
*/
  Matcher?: string;
}

export function Monitoring_UptimeCheckConfigContentMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Content",
      "String or regex content to match (max 1024 bytes)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "JsonPathMatcher",
      "Information needed to perform a JSONPath content match. Used for `ContentMatcherOption::MATCHES_JSON_PATH` and `ContentMatcherOption::NOT_MATCHES_JSON_PATH`.\nStructure is documented below.",
      Monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Matcher",
      "The type of content matcher that will be applied to the server output, compared to the content string when the check is run.\nDefault value is `CONTAINS_STRING`.\nPossible values are: `CONTAINS_STRING`, `NOT_CONTAINS_STRING`, `MATCHES_REGEX`, `NOT_MATCHES_REGEX`, `MATCHES_JSON_PATH`, `NOT_MATCHES_JSON_PATH`.",
      [],
      false,
      false,
    ),
  ];
}
