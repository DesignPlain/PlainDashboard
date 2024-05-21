import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_URLMapPathMatcherRouteRuleUrlRedirect {
  /*
The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters.
*/
  hostRedirect?: string;

  /*
If set to true, the URL scheme in the redirected request is set to https. If set
to false, the URL scheme of the redirected request will remain the same as that
of the request. This must only be set for UrlMaps used in TargetHttpProxys.
Setting this true for TargetHttpsProxy is not permitted. Defaults to false.
*/
  httpsRedirect?: boolean;

  /*
The path that will be used in the redirect response instead of the one that was
supplied in the request. Only one of pathRedirect or prefixRedirect must be
specified. The value must be between 1 and 1024 characters.
*/
  pathRedirect?: string;

  /*
The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
*/
  prefixRedirect?: string;

  /*
The HTTP Status code to use for this RedirectAction. Supported values are:
- MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
- FOUND, which corresponds to 302.
- SEE_OTHER which corresponds to 303.
- TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method will be retained.
- PERMANENT_REDIRECT, which corresponds to 308. In this case, the request method will be retained.
*/
  redirectResponseCode?: string;

  /*
If set to true, any accompanying query portion of the original URL is removed
prior to redirecting the request. If set to false, the query portion of the
original URL is retained. Defaults to false.
*/
  stripQuery?: boolean;
}

export function compute_URLMapPathMatcherRouteRuleUrlRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hostRedirect",
      "The host that will be used in the redirect response instead of the one that was\nsupplied in the request. The value must be between 1 and 255 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "httpsRedirect",
      "If set to true, the URL scheme in the redirected request is set to https. If set\nto false, the URL scheme of the redirected request will remain the same as that\nof the request. This must only be set for UrlMaps used in TargetHttpProxys.\nSetting this true for TargetHttpsProxy is not permitted. Defaults to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pathRedirect",
      "The path that will be used in the redirect response instead of the one that was\nsupplied in the request. Only one of pathRedirect or prefixRedirect must be\nspecified. The value must be between 1 and 1024 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixRedirect",
      "The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,\nretaining the remaining portion of the URL before redirecting the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redirectResponseCode",
      "The HTTP Status code to use for this RedirectAction. Supported values are:\n* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.\n* FOUND, which corresponds to 302.\n* SEE_OTHER which corresponds to 303.\n* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method will be retained.\n* PERMANENT_REDIRECT, which corresponds to 308. In this case, the request method will be retained.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "stripQuery",
      "If set to true, any accompanying query portion of the original URL is removed\nprior to redirecting the request. If set to false, the query portion of the\noriginal URL is retained. Defaults to false.",
      [],
      false,
      false,
    ),
  ];
}
