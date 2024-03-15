export interface EdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd {
  // The name of the header to add.
  HeaderName?: string;

  // The value of the header to add.
  HeaderValue?: string;

  /*
Whether to replace all existing headers with the same name.
By default, added header values are appended
to the response or request headers with the
same field names. The added values are
separated by commas.
To overwrite existing values, set `replace` to `true`.
*/
  Replace?: boolean;
}
