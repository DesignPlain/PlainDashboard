import { GrpcRouteRuleMatch } from "./GrpcRouteRuleMatch";
import { GrpcRouteRuleAction } from "./GrpcRouteRuleAction";

export interface GrpcRouteRule {
  /*
Required. A detailed rule defining how to route traffic.
Structure is documented below.
*/
  Action?: GrpcRouteRuleAction;

  /*
Matches define conditions used for matching the rule against incoming gRPC requests.
Structure is documented below.
*/
  Matches?: Array<GrpcRouteRuleMatch>;
}
