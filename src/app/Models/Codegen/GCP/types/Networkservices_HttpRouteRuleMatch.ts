import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_HttpRouteRuleMatchHeader,
  Networkservices_HttpRouteRuleMatchHeader_GetTypes,
} from "./Networkservices_HttpRouteRuleMatchHeader";
import {
  Networkservices_HttpRouteRuleMatchQueryParameter,
  Networkservices_HttpRouteRuleMatchQueryParameter_GetTypes,
} from "./Networkservices_HttpRouteRuleMatchQueryParameter";

export interface Networkservices_HttpRouteRuleMatch {
  /*
Specifies a list of HTTP request headers to match against.
Structure is documented below.
*/
  Headers?: Array<Networkservices_HttpRouteRuleMatchHeader>;

  // Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.
  IgnoreCase?: boolean;

  // The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.
  PrefixMatch?: string;

  /*
Specifies a list of query parameters to match against.
Structure is documented below.
*/
  QueryParameters?: Array<Networkservices_HttpRouteRuleMatchQueryParameter>;

  // The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax
  RegexMatch?: string;

  // The HTTP request path value should exactly match this value.
  FullPathMatch?: string;
}

export function Networkservices_HttpRouteRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Headers",
      "Specifies a list of HTTP request headers to match against.\nStructure is documented below.",
      Networkservices_HttpRouteRuleMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IgnoreCase",
      "Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrefixMatch",
      "The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "QueryParameters",
      "Specifies a list of query parameters to match against.\nStructure is documented below.",
      Networkservices_HttpRouteRuleMatchQueryParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RegexMatch",
      "The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FullPathMatch",
      "The HTTP request path value should exactly match this value.",
      [],
      false,
      false,
    ),
  ];
}
