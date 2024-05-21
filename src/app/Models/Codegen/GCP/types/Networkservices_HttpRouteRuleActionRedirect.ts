import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkservices_HttpRouteRuleActionRedirect {
  // If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.
  stripQuery?: boolean;

  // The host that will be used in the redirect response instead of the one that was supplied in the request.
  hostRedirect?: string;

  // If set to true, the URL scheme in the redirected request is set to https.
  httpsRedirect?: boolean;

  // The path that will be used in the redirect response instead of the one that was supplied in the request. pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.
  pathRedirect?: string;

  // The port that will be used in the redirected request instead of the one that was supplied in the request.
  portRedirect?: number;

  // Indicates that during redirection, the matched prefix (or path) should be swapped with this value.
  prefixRewrite?: string;

  // The HTTP Status code to use for the redirect.
  responseCode?: string;
}

export function networkservices_HttpRouteRuleActionRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hostRedirect",
      "The host that will be used in the redirect response instead of the one that was supplied in the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "httpsRedirect",
      "If set to true, the URL scheme in the redirected request is set to https.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pathRedirect",
      "The path that will be used in the redirect response instead of the one that was supplied in the request. pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "portRedirect",
      "The port that will be used in the redirected request instead of the one that was supplied in the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixRewrite",
      "Indicates that during redirection, the matched prefix (or path) should be swapped with this value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "responseCode",
      "The HTTP Status code to use for the redirect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "stripQuery",
      "If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.",
      [],
      false,
      false,
    ),
  ];
}
