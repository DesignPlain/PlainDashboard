export interface URLMapPathMatcherRouteRuleRouteActionCorsPolicy {
  // Specifies the content for the Access-Control-Allow-Methods header.
  AllowMethods?: Array<string>;

  /*
Specifies the regular expression patterns that match allowed origins. For regular expression grammar
please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
*/
  AllowOriginRegexes?: Array<string>;

  /*
Specifies the list of origins that will be allowed to do CORS requests.
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
*/
  AllowOrigins?: Array<string>;

  // If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
  Disabled?: boolean;

  // Specifies the content for the Access-Control-Expose-Headers header.
  ExposeHeaders?: Array<string>;

  /*
Specifies how long results of a preflight request can be cached in seconds.
This translates to the Access-Control-Max-Age header.
*/
  MaxAge?: number;

  /*
In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials header.
*/
  AllowCredentials?: boolean;

  // Specifies the content for the Access-Control-Allow-Headers header.
  AllowHeaders?: Array<string>;
}
