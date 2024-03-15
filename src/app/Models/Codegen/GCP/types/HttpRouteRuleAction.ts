import { HttpRouteRuleActionRedirect } from "./HttpRouteRuleActionRedirect";
import { HttpRouteRuleActionResponseHeaderModifier } from "./HttpRouteRuleActionResponseHeaderModifier";
import { HttpRouteRuleActionUrlRewrite } from "./HttpRouteRuleActionUrlRewrite";
import { HttpRouteRuleActionRequestMirrorPolicy } from "./HttpRouteRuleActionRequestMirrorPolicy";
import { HttpRouteRuleActionFaultInjectionPolicy } from "./HttpRouteRuleActionFaultInjectionPolicy";
import { HttpRouteRuleActionDestination } from "./HttpRouteRuleActionDestination";
import { HttpRouteRuleActionRequestHeaderModifier } from "./HttpRouteRuleActionRequestHeaderModifier";
import { HttpRouteRuleActionCorsPolicy } from "./HttpRouteRuleActionCorsPolicy";
import { HttpRouteRuleActionRetryPolicy } from "./HttpRouteRuleActionRetryPolicy";

export interface HttpRouteRuleAction {
  /*
The specification for allowing client side cross-origin requests.
Structure is documented below.
*/
  CorsPolicy?: HttpRouteRuleActionCorsPolicy;

  /*
Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination.
Structure is documented below.
*/
  RequestMirrorPolicy?: HttpRouteRuleActionRequestMirrorPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  RetryPolicy?: HttpRouteRuleActionRetryPolicy;

  // Specifies the timeout for selected route.
  Timeout?: string;

  /*
The destination to which traffic should be forwarded.
Structure is documented below.
*/
  Destinations?: Array<HttpRouteRuleActionDestination>;

  /*
The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.
Structure is documented below.
*/
  FaultInjectionPolicy?: HttpRouteRuleActionFaultInjectionPolicy;

  /*
If set, the request is directed as configured by this field.
Structure is documented below.
*/
  Redirect?: HttpRouteRuleActionRedirect;

  /*
The specification for modifying the headers of a matching request prior to delivery of the request to the destination.
Structure is documented below.
*/
  RequestHeaderModifier?: HttpRouteRuleActionRequestHeaderModifier;

  /*
The specification for modifying the headers of a response prior to sending the response back to the client.
Structure is documented below.
*/
  ResponseHeaderModifier?: HttpRouteRuleActionResponseHeaderModifier;

  /*
The specification for rewrite URL before forwarding requests to the destination.
Structure is documented below.
*/
  UrlRewrite?: HttpRouteRuleActionUrlRewrite;
}
