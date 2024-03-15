export interface HttpRouteRuleActionUrlRewrite {
  // Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.
  HostRewrite?: string;

  // Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.
  PathPrefixRewrite?: string;
}
