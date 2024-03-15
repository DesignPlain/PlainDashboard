export interface EdgeCacheOriginOriginOverrideActionUrlRewrite {
  /*
Prior to forwarding the request to the selected
origin, the request's host header is replaced with
contents of the hostRewrite.
This value must be between 1 and 255 characters.
*/
  HostRewrite?: string;
}
