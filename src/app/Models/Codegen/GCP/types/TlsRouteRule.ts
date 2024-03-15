import { TlsRouteRuleMatch } from "./TlsRouteRuleMatch";
import { TlsRouteRuleAction } from "./TlsRouteRuleAction";

export interface TlsRouteRule {
  /*
Required. A detailed rule defining how to route traffic.
Structure is documented below.
*/
  Action?: TlsRouteRuleAction;

  /*
Matches define the predicate used to match requests to a given action.
Structure is documented below.
*/
  Matches?: Array<TlsRouteRuleMatch>;
}
