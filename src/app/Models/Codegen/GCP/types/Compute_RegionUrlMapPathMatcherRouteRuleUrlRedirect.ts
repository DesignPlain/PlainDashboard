import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionUrlMapPathMatcherRouteRuleUrlRedirect {
  /*
The prefix that replaces the prefixMatch specified in the
HttpRouteRuleMatch, retaining the remaining portion of the URL before
redirecting the request. prefixRedirect cannot be supplied together with
pathRedirect. Supply one alone or neither. If neither is supplied, the
path of the original request will be used for the redirect. The value
must be between 1 and 1024 characters.
*/
  PrefixRedirect?: string;

  /*
The HTTP Status code to use for this RedirectAction. Supported values are:
- MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
- FOUND, which corresponds to 302.
- SEE_OTHER which corresponds to 303.
- TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.
- PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained.
*/
  RedirectResponseCode?: string;

  /*
If set to true, any accompanying query portion of the original URL is removed
prior to redirecting the request. If set to false, the query portion of the
original URL is retained.
This field is required to ensure an empty block is not set. The normal default value is false.
*/
  StripQuery?: boolean;

  /*
The host that will be used in the redirect response instead of the one
that was supplied in the request. The value must be between 1 and 255
characters.
*/
  HostRedirect?: string;

  /*
If set to true, the URL scheme in the redirected request is set to https.
If set to false, the URL scheme of the redirected request will remain the
same as that of the request. This must only be set for UrlMaps used in
TargetHttpProxys. Setting this true for TargetHttpsProxy is not
permitted. The default is set to false.
*/
  HttpsRedirect?: boolean;

  /*
The path that will be used in the redirect response instead of the one
that was supplied in the request. pathRedirect cannot be supplied
together with prefixRedirect. Supply one alone or neither. If neither is
supplied, the path of the original request will be used for the redirect.
The value must be between 1 and 1024 characters.
*/
  PathRedirect?: string;
}

export function Compute_RegionUrlMapPathMatcherRouteRuleUrlRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RedirectResponseCode",
      "The HTTP Status code to use for this RedirectAction. Supported values are:\n* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.\n* FOUND, which corresponds to 302.\n* SEE_OTHER which corresponds to 303.\n* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method\nwill be retained.\n* PERMANENT_REDIRECT, which corresponds to 308. In this case,\nthe request method will be retained.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "StripQuery",
      "If set to true, any accompanying query portion of the original URL is removed\nprior to redirecting the request. If set to false, the query portion of the\noriginal URL is retained.\nThis field is required to ensure an empty block is not set. The normal default value is false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HostRedirect",
      "The host that will be used in the redirect response instead of the one\nthat was supplied in the request. The value must be between 1 and 255\ncharacters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "HttpsRedirect",
      "If set to true, the URL scheme in the redirected request is set to https.\nIf set to false, the URL scheme of the redirected request will remain the\nsame as that of the request. This must only be set for UrlMaps used in\nTargetHttpProxys. Setting this true for TargetHttpsProxy is not\npermitted. The default is set to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PathRedirect",
      "The path that will be used in the redirect response instead of the one\nthat was supplied in the request. pathRedirect cannot be supplied\ntogether with prefixRedirect. Supply one alone or neither. If neither is\nsupplied, the path of the original request will be used for the redirect.\nThe value must be between 1 and 1024 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrefixRedirect",
      "The prefix that replaces the prefixMatch specified in the\nHttpRouteRuleMatch, retaining the remaining portion of the URL before\nredirecting the request. prefixRedirect cannot be supplied together with\npathRedirect. Supply one alone or neither. If neither is supplied, the\npath of the original request will be used for the redirect. The value\nmust be between 1 and 1024 characters.",
      [],
      false,
      false,
    ),
  ];
}
