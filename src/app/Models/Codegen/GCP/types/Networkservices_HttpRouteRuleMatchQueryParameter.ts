import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_HttpRouteRuleMatchQueryParameter {
  // The value of the query parameter must exactly match the contents of exactMatch.
  ExactMatch?: string;

  // Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.
  PresentMatch?: boolean;

  // The name of the query parameter to match.
  QueryParameter?: string;

  // The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax
  RegexMatch?: string;
}

export function Networkservices_HttpRouteRuleMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExactMatch",
      "The value of the query parameter must exactly match the contents of exactMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PresentMatch",
      "Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "QueryParameter",
      "The name of the query parameter to match.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RegexMatch",
      "The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax",
      [],
      false,
      false,
    ),
  ];
}
