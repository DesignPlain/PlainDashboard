import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_HttpRouteRuleMatchQueryParameter,
  networkservices_HttpRouteRuleMatchQueryParameter_GetTypes,
} from "./networkservices_HttpRouteRuleMatchQueryParameter";
import {
  networkservices_HttpRouteRuleMatchHeader,
  networkservices_HttpRouteRuleMatchHeader_GetTypes,
} from "./networkservices_HttpRouteRuleMatchHeader";

export interface networkservices_HttpRouteRuleMatch {
  // The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.
  prefixMatch?: string;

  /*
Specifies a list of query parameters to match against.
Structure is documented below.
*/
  queryParameters?: Array<networkservices_HttpRouteRuleMatchQueryParameter>;

  // The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax
  regexMatch?: string;

  // The HTTP request path value should exactly match this value.
  fullPathMatch?: string;

  /*
Specifies a list of HTTP request headers to match against.
Structure is documented below.
*/
  headers?: Array<networkservices_HttpRouteRuleMatchHeader>;

  // Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.
  ignoreCase?: boolean;
}

export function networkservices_HttpRouteRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefixMatch",
      "The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryParameters",
      "Specifies a list of query parameters to match against.\nStructure is documented below.",
      networkservices_HttpRouteRuleMatchQueryParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regexMatch",
      "The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fullPathMatch",
      "The HTTP request path value should exactly match this value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Specifies a list of HTTP request headers to match against.\nStructure is documented below.",
      networkservices_HttpRouteRuleMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ignoreCase",
      "Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.",
      [],
      false,
      false,
    ),
  ];
}
