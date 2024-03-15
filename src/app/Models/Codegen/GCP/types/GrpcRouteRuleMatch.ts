import { GrpcRouteRuleMatchHeader } from "./GrpcRouteRuleMatchHeader";
import { GrpcRouteRuleMatchMethod } from "./GrpcRouteRuleMatchMethod";

export interface GrpcRouteRuleMatch {
  /*
Specifies a list of HTTP request headers to match against.
Structure is documented below.
*/
  Headers?: Array<GrpcRouteRuleMatchHeader>;

  /*
A gRPC method to match against. If this field is empty or omitted, will match all methods.
Structure is documented below.
*/
  Method?: GrpcRouteRuleMatchMethod;
}
