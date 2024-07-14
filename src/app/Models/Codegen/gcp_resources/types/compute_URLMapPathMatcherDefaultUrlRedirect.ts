import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_URLMapPathMatcherDefaultUrlRedirect {
  /*
If set to true, any accompanying query portion of the original URL is removed prior
to redirecting the request. If set to false, the query portion of the original URL is
retained. The default is set to false.
This field is required to ensure an empty block is not set. The normal default value is false.
*/
  stripQuery?: boolean;

  /*
The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters.
*/
  hostRedirect?: string;

  /*
If set to true, the URL scheme in the redirected request is set to https. If set to
false, the URL scheme of the redirected request will remain the same as that of the
request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
true for TargetHttpsProxy is not permitted. The default is set to false.
*/
  httpsRedirect?: boolean;

  /*
The path that will be used in the redirect response instead of the one that was
supplied in the request. pathRedirect cannot be supplied together with
prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
original request will be used for the redirect. The value must be between 1 and 1024
characters.
*/
  pathRedirect?: string;

  /*
The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
neither. If neither is supplied, the path of the original request will be used for
the redirect. The value must be between 1 and 1024 characters.
*/
  prefixRedirect?: string;

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
  redirectResponseCode?: string;
}

export function compute_URLMapPathMatcherDefaultUrlRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "stripQuery",
      "If set to true, any accompanying query portion of the original URL is removed prior\nto redirecting the request. If set to false, the query portion of the original URL is\nretained. The default is set to false.\nThis field is required to ensure an empty block is not set. The normal default value is false.",
      [],
      true,
      false,
    ),
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
      "If set to true, the URL scheme in the redirected request is set to https. If set to\nfalse, the URL scheme of the redirected request will remain the same as that of the\nrequest. This must only be set for UrlMaps used in TargetHttpProxys. Setting this\ntrue for TargetHttpsProxy is not permitted. The default is set to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pathRedirect",
      "The path that will be used in the redirect response instead of the one that was\nsupplied in the request. pathRedirect cannot be supplied together with\nprefixRedirect. Supply one alone or neither. If neither is supplied, the path of the\noriginal request will be used for the redirect. The value must be between 1 and 1024\ncharacters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixRedirect",
      "The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,\nretaining the remaining portion of the URL before redirecting the request.\nprefixRedirect cannot be supplied together with pathRedirect. Supply one alone or\nneither. If neither is supplied, the path of the original request will be used for\nthe redirect. The value must be between 1 and 1024 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redirectResponseCode",
      "The HTTP Status code to use for this RedirectAction. Supported values are:\n* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.\n* FOUND, which corresponds to 302.\n* SEE_OTHER which corresponds to 303.\n* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method\nwill be retained.\n* PERMANENT_REDIRECT, which corresponds to 308. In this case,\nthe request method will be retained.",
      [],
      false,
      false,
    ),
  ];
}
