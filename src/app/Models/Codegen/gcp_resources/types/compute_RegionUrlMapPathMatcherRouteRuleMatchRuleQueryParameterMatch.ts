import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_RegionUrlMapPathMatcherRouteRuleMatchRuleQueryParameterMatch {
  /*
The name of the query parameter to match. The query parameter must exist in the
request, in the absence of which the request match fails.
*/
  name?: string;

  /*
Specifies that the queryParameterMatch matches if the request contains the query
parameter, irrespective of whether the parameter has a value or not. Only one of
presentMatch, exactMatch and regexMatch must be set.
*/
  presentMatch?: boolean;

  /*
The queryParameterMatch matches if the value of the parameter matches the
regular expression specified by regexMatch. For the regular expression grammar,
please see en.cppreference.com/w/cpp/regex/ecmascript  Only one of presentMatch,
exactMatch and regexMatch must be set.
*/
  regexMatch?: string;

  /*
The queryParameterMatch matches if the value of the parameter exactly matches
the contents of exactMatch. Only one of presentMatch, exactMatch and regexMatch
must be set.
*/
  exactMatch?: string;
}

export function compute_RegionUrlMapPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the query parameter to match. The query parameter must exist in the\nrequest, in the absence of which the request match fails.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "presentMatch",
      "Specifies that the queryParameterMatch matches if the request contains the query\nparameter, irrespective of whether the parameter has a value or not. Only one of\npresentMatch, exactMatch and regexMatch must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regexMatch",
      "The queryParameterMatch matches if the value of the parameter matches the\nregular expression specified by regexMatch. For the regular expression grammar,\nplease see en.cppreference.com/w/cpp/regex/ecmascript  Only one of presentMatch,\nexactMatch and regexMatch must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "exactMatch",
      "The queryParameterMatch matches if the value of the parameter exactly matches\nthe contents of exactMatch. Only one of presentMatch, exactMatch and regexMatch\nmust be set.",
      [],
      false,
      false,
    ),
  ];
}
