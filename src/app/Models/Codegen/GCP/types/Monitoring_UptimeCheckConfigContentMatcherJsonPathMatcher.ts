import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher {
  /*
Options to perform JSONPath content matching.
Default value is `EXACT_MATCH`.
Possible values are: `EXACT_MATCH`, `REGEX_MATCH`.
*/
  JsonMatcher?: string;

  // JSONPath within the response output pointing to the expected `ContentMatcher::content` to match against.
  JsonPath?: string;
}

export function Monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "JsonMatcher",
      "Options to perform JSONPath content matching.\nDefault value is `EXACT_MATCH`.\nPossible values are: `EXACT_MATCH`, `REGEX_MATCH`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "JsonPath",
      "JSONPath within the response output pointing to the expected `ContentMatcher::content` to match against.",
      [],
      true,
      false,
    ),
  ];
}
