import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_HttpRouteRuleMatchHeaderRangeMatch,
  Networkservices_HttpRouteRuleMatchHeaderRangeMatch_GetTypes,
} from "./Networkservices_HttpRouteRuleMatchHeaderRangeMatch";

export interface Networkservices_HttpRouteRuleMatchHeader {
  // The name of the HTTP header to match against.
  Header?: string;

  // If specified, the match result will be inverted before checking. Default value is set to false.
  InvertMatch?: boolean;

  // The value of the header must start with the contents of prefixMatch.
  PrefixMatch?: string;

  // A header with headerName must exist. The match takes place whether or not the header has a value.
  PresentMatch?: boolean;

  /*
If specified, the rule will match if the request header value is within the range.
Structure is documented below.
*/
  RangeMatch?: Networkservices_HttpRouteRuleMatchHeaderRangeMatch;

  // The value of the header must match the regular expression specified in regexMatch.
  RegexMatch?: string;

  // The value of the header must end with the contents of suffixMatch.
  SuffixMatch?: string;

  // The value of the header should match exactly the content of exactMatch.
  ExactMatch?: string;
}

export function Networkservices_HttpRouteRuleMatchHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "RangeMatch",
      "If specified, the rule will match if the request header value is within the range.\nStructure is documented below.",
      Networkservices_HttpRouteRuleMatchHeaderRangeMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RegexMatch",
      "The value of the header must match the regular expression specified in regexMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SuffixMatch",
      "The value of the header must end with the contents of suffixMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExactMatch",
      "The value of the header should match exactly the content of exactMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Header",
      "The name of the HTTP header to match against.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "InvertMatch",
      "If specified, the match result will be inverted before checking. Default value is set to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrefixMatch",
      "The value of the header must start with the contents of prefixMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PresentMatch",
      "A header with headerName must exist. The match takes place whether or not the header has a value.",
      [],
      false,
      false,
    ),
  ];
}
