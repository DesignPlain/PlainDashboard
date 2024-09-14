import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkservices_HttpRouteRuleMatchQueryParameter {
  // The value of the query parameter must exactly match the contents of exactMatch.
  exactMatch?: string;

  // Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.
  presentMatch?: boolean;

  // The name of the query parameter to match.
  queryParameter?: string;

  // The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax
  regexMatch?: string;
}

export function networkservices_HttpRouteRuleMatchQueryParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "exactMatch",
      "The value of the query parameter must exactly match the contents of exactMatch.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "presentMatch",
      "Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queryParameter",
      "The name of the query parameter to match.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regexMatch",
      "The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax",
      () => [],
      false,
      false,
    ),
  ];
}
