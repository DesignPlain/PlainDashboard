export interface HttpRouteRuleActionRedirect {
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

  // The path that will be used in the redirect response instead of the one that was supplied in the request. pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.
  PathRedirect?: string;

  // The port that will be used in the redirected request instead of the one that was supplied in the request.
  PortRedirect?: number;
}
