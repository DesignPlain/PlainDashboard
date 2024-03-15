import { TcpRouteRuleActionDestination } from "./TcpRouteRuleActionDestination";

export interface TcpRouteRuleAction {
  /*
The destination services to which traffic should be forwarded. At least one destination service is required.
Structure is documented below.
*/
  Destinations?: Array<TcpRouteRuleActionDestination>;

  // If true, Router will use the destination IP and port of the original connection as the destination of the request.
  OriginalDestination?: boolean;
}
