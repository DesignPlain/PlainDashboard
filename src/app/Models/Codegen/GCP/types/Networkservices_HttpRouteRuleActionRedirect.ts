import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_HttpRouteRuleActionRedirect {
  // The path that will be used in the redirect response instead of the one that was supplied in the request. pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.
  PathRedirect?: string;

  // The port that will be used in the redirected request instead of the one that was supplied in the request.
  PortRedirect?: number;

  // Indicates that during redirection, the matched prefix (or path) should be swapped with this value.
  PrefixRewrite?: string;

  // The HTTP Status code to use for the redirect.
  ResponseCode?: string;

  // If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.
  StripQuery?: boolean;

  // The host that will be used in the redirect response instead of the one that was supplied in the request.
  HostRedirect?: string;

  // If set to true, the URL scheme in the redirected request is set to https.
  HttpsRedirect?: boolean;
}

export function Networkservices_HttpRouteRuleActionRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PathRedirect",
      "The path that will be used in the redirect response instead of the one that was supplied in the request. pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PortRedirect",
      "The port that will be used in the redirected request instead of the one that was supplied in the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrefixRewrite",
      "Indicates that during redirection, the matched prefix (or path) should be swapped with this value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResponseCode",
      "The HTTP Status code to use for the redirect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "StripQuery",
      "If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HostRedirect",
      "The host that will be used in the redirect response instead of the one that was supplied in the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "HttpsRedirect",
      "If set to true, the URL scheme in the redirected request is set to https.",
      [],
      false,
      false,
    ),
  ];
}
