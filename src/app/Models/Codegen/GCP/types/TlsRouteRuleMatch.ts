export interface TlsRouteRuleMatch {
  // ALPN (Application-Layer Protocol Negotiation) to match against. Examples: "http/1.1", "h2". At least one of sniHost and alpn is required. Up to 5 alpns across all matches can be set.
  Alpns?: Array<string>;

  /*
SNI (server name indicator) to match against. SNI will be matched against all wildcard domains, i.e. www.example.com will be first matched against www.example.com, then -.example.com, then -.com.
Partial wildcards are not supported, and values like -w.example.com are invalid. At least one of sniHost and alpn is required. Up to 5 sni hosts across all matches can be set.
*/
  SniHosts?: Array<string>;
}
