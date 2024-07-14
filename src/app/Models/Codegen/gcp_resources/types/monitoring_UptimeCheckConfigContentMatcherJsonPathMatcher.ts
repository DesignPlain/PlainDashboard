import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher {
  /*
Options to perform JSONPath content matching.
Default value is `EXACT_MATCH`.
Possible values are: `EXACT_MATCH`, `REGEX_MATCH`.
*/
  jsonMatcher?: string;

  // JSONPath within the response output pointing to the expected `ContentMatcher::content` to match against.
  jsonPath?: string;
}

export function monitoring_UptimeCheckConfigContentMatcherJsonPathMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "jsonMatcher",
      "Options to perform JSONPath content matching.\nDefault value is `EXACT_MATCH`.\nPossible values are: `EXACT_MATCH`, `REGEX_MATCH`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jsonPath",
      "JSONPath within the response output pointing to the expected `ContentMatcher::content` to match against.",
      [],
      true,
      false,
    ),
  ];
}
