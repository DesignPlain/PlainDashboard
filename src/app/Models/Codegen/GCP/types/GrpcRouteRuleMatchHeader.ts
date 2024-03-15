export interface GrpcRouteRuleMatchHeader {
  // Required. The value of the header.
  Value?: string;

  // Required. The key of the header.
  Key?: string;

  /*
The type of match.
Default value is `EXACT`.
Possible values are: `TYPE_UNSPECIFIED`, `EXACT`, `REGULAR_EXPRESSION`.
*/
  Type?: string;
}
