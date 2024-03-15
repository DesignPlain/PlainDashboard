import { HttpRouteRuleActionRequestMirrorPolicyDestination } from "./HttpRouteRuleActionRequestMirrorPolicyDestination";

export interface HttpRouteRuleActionRequestMirrorPolicy {
  /*
The destination the requests will be mirrored to.
Structure is documented below.
*/
  Destination?: HttpRouteRuleActionRequestMirrorPolicyDestination;
}
