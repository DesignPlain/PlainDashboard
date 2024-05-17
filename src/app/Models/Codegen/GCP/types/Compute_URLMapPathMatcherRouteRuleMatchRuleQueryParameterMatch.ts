import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_URLMapPathMatcherRouteRuleMatchRuleQueryParameterMatch {
  /*
The queryParameterMatch matches if the value of the parameter exactly matches
the contents of exactMatch. Only one of presentMatch, exactMatch and regexMatch
must be set.
*/
  ExactMatch?: string;

  /*
The name of the query parameter to match. The query parameter must exist in the
request, in the absence of which the request match fails.
*/
  Name?: string;

  /*
Specifies that the queryParameterMatch matches if the request contains the query
parameter, irrespective of whether the parameter has a value or not. Only one of
presentMatch, exactMatch and regexMatch must be set.
*/
  PresentMatch?: boolean;

  /*
The queryParameterMatch matches if the value of the parameter matches the
regular expression specified by regexMatch. For the regular expression grammar,
please see en.cppreference.com/w/cpp/regex/ecmascript  Only one of presentMatch,
exactMatch and regexMatch must be set.
*/
  RegexMatch?: string;
}

export function Compute_URLMapPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "PresentMatch",
      "Specifies that the queryParameterMatch matches if the request contains the query\nparameter, irrespective of whether the parameter has a value or not. Only one of\npresentMatch, exactMatch and regexMatch must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RegexMatch",
      "The queryParameterMatch matches if the value of the parameter matches the\nregular expression specified by regexMatch. For the regular expression grammar,\nplease see en.cppreference.com/w/cpp/regex/ecmascript  Only one of presentMatch,\nexactMatch and regexMatch must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExactMatch",
      "The queryParameterMatch matches if the value of the parameter exactly matches\nthe contents of exactMatch. Only one of presentMatch, exactMatch and regexMatch\nmust be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the query parameter to match. The query parameter must exist in the\nrequest, in the absence of which the request match fails.",
      [],
      true,
      false,
    ),
  ];
}
