import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkservices_HttpRouteRuleMatchHeaderRangeMatch,
  networkservices_HttpRouteRuleMatchHeaderRangeMatch_GetTypes,
} from "./networkservices_HttpRouteRuleMatchHeaderRangeMatch";

export interface networkservices_HttpRouteRuleMatchHeader {
  // If specified, the match result will be inverted before checking. Default value is set to false.
  invertMatch?: boolean;

  // The value of the header must start with the contents of prefixMatch.
  prefixMatch?: string;

  // A header with headerName must exist. The match takes place whether or not the header has a value.
  presentMatch?: boolean;

  /*
If specified, the rule will match if the request header value is within the range.
Structure is documented below.
*/
  rangeMatch?: networkservices_HttpRouteRuleMatchHeaderRangeMatch;

  // The value of the header must match the regular expression specified in regexMatch.
  regexMatch?: string;

  // The value of the header must end with the contents of suffixMatch.
  suffixMatch?: string;

  // The value of the header should match exactly the content of exactMatch.
  exactMatch?: string;

  // The name of the HTTP header to match against.
  header?: string;
}

export function networkservices_HttpRouteRuleMatchHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "presentMatch",
      "A header with headerName must exist. The match takes place whether or not the header has a value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rangeMatch",
      "If specified, the rule will match if the request header value is within the range.\nStructure is documented below.",
      networkservices_HttpRouteRuleMatchHeaderRangeMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regexMatch",
      "The value of the header must match the regular expression specified in regexMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "suffixMatch",
      "The value of the header must end with the contents of suffixMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "exactMatch",
      "The value of the header should match exactly the content of exactMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "header",
      "The name of the HTTP header to match against.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "invertMatch",
      "If specified, the match result will be inverted before checking. Default value is set to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixMatch",
      "The value of the header must start with the contents of prefixMatch.",
      [],
      false,
      false,
    ),
  ];
}
