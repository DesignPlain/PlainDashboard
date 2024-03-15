export interface URLMapPathMatcherPathRuleRouteActionWeightedBackendServiceHeaderActionResponseHeadersToAdd {
  // The name of the header to add.
  HeaderName?: string;

  // The value of the header to add.
  HeaderValue?: string;

  /*
If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header.
*/
  Replace?: boolean;
}
