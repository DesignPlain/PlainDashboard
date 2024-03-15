export interface HttpRouteRuleActionCorsPolicy {
  // Specifies the content for Access-Control-Expose-Headers header.
  ExposeHeaders?: Array<string>;

  // Specifies how long result of a preflight request can be cached in seconds.
  MaxAge?: string;

  // In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
  AllowCredentials?: boolean;

  // Specifies the content for Access-Control-Allow-Headers header.
  AllowHeaders?: Array<string>;

  // Specifies the content for Access-Control-Allow-Methods header.
  AllowMethods?: Array<string>;

  // Specifies the regular expression patterns that match allowed origins.
  AllowOriginRegexes?: Array<string>;

  // Specifies the list of origins that will be allowed to do CORS requests.
  AllowOrigins?: Array<string>;

  /*
If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.

- - -
*/
  Disabled?: boolean;
}
