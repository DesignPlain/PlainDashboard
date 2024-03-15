export interface URLMapPathMatcherRouteRuleUrlRedirect {
  /*
The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters.
*/
  HostRedirect?: string;

  /*
If set to true, the URL scheme in the redirected request is set to https. If set
to false, the URL scheme of the redirected request will remain the same as that
of the request. This must only be set for UrlMaps used in TargetHttpProxys.
Setting this true for TargetHttpsProxy is not permitted. Defaults to false.
*/
  HttpsRedirect?: boolean;

  /*
The path that will be used in the redirect response instead of the one that was
supplied in the request. Only one of pathRedirect or prefixRedirect must be
specified. The value must be between 1 and 1024 characters.
*/
  PathRedirect?: string;

  /*
The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
*/
  PrefixRedirect?: string;

  /*
The HTTP Status code to use for this RedirectAction. Supported values are:
- MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
- FOUND, which corresponds to 302.
- SEE_OTHER which corresponds to 303.
- TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method will be retained.
- PERMANENT_REDIRECT, which corresponds to 308. In this case, the request method will be retained.
*/
  RedirectResponseCode?: string;

  /*
If set to true, any accompanying query portion of the original URL is removed
prior to redirecting the request. If set to false, the query portion of the
original URL is retained. Defaults to false.
*/
  StripQuery?: boolean;
}
