import { TlsRouteRuleActionDestination } from "./TlsRouteRuleActionDestination";

export interface TlsRouteRuleAction {
  /*
The destination to which traffic should be forwarded.
Structure is documented below.
*/
  Destinations?: Array<TlsRouteRuleActionDestination>;
}
