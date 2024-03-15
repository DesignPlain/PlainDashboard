import { TcpRouteRuleAction } from "./TcpRouteRuleAction";
import { TcpRouteRuleMatch } from "./TcpRouteRuleMatch";

export interface TcpRouteRule {
  /*
A detailed rule defining how to route traffic.
Structure is documented below.
*/
  Action?: TcpRouteRuleAction;

  /*
RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation.
If no routeMatch field is specified, this rule will unconditionally match traffic.
Structure is documented below.
*/
  Matches?: Array<TcpRouteRuleMatch>;
}
