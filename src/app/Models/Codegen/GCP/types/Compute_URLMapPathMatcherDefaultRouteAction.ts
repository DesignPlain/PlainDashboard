import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherDefaultRouteActionCorsPolicy,
  Compute_URLMapPathMatcherDefaultRouteActionCorsPolicy_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultRouteActionCorsPolicy";
import {
  Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy,
  Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy";
import {
  Compute_URLMapPathMatcherDefaultRouteActionRequestMirrorPolicy,
  Compute_URLMapPathMatcherDefaultRouteActionRequestMirrorPolicy_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultRouteActionRequestMirrorPolicy";
import {
  Compute_URLMapPathMatcherDefaultRouteActionRetryPolicy,
  Compute_URLMapPathMatcherDefaultRouteActionRetryPolicy_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultRouteActionRetryPolicy";
import {
  Compute_URLMapPathMatcherDefaultRouteActionTimeout,
  Compute_URLMapPathMatcherDefaultRouteActionTimeout_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultRouteActionTimeout";
import {
  Compute_URLMapPathMatcherDefaultRouteActionUrlRewrite,
  Compute_URLMapPathMatcherDefaultRouteActionUrlRewrite_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultRouteActionUrlRewrite";
import {
  Compute_URLMapPathMatcherDefaultRouteActionWeightedBackendService,
  Compute_URLMapPathMatcherDefaultRouteActionWeightedBackendService_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultRouteActionWeightedBackendService";

export interface Compute_URLMapPathMatcherDefaultRouteAction {
  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  RetryPolicy?: Compute_URLMapPathMatcherDefaultRouteActionRetryPolicy;

  /*
Specifies the timeout for the selected route. Timeout is computed from the time the request has been
fully processed (i.e. end-of-stream) up until the response has been completely processed. Timeout includes all retries.
If not specified, will use the largest timeout among all backend services associated with the route.
Structure is documented below.
*/
  Timeout?: Compute_URLMapPathMatcherDefaultRouteActionTimeout;

  /*
The spec to modify the URL of the request, prior to forwarding the request to the matched service.
Structure is documented below.
*/
  UrlRewrite?: Compute_URLMapPathMatcherDefaultRouteActionUrlRewrite;

  /*
A list of weighted backend services to send traffic to when a route match occurs.
The weights determine the fraction of traffic that flows to their corresponding backend service.
If all traffic needs to go to a single backend service, there must be one weightedBackendService
with weight set to a non 0 number.
Once a backendService is identified and before forwarding the request to the backend service,
advanced routing actions like Url rewrites and header transformations are applied depending on
additional settings specified in this HttpRouteAction.
Structure is documented below.
*/
  WeightedBackendServices?: Array<Compute_URLMapPathMatcherDefaultRouteActionWeightedBackendService>;

  /*
The specification for allowing client side cross-origin requests. Please see
[W3C Recommendation for Cross Origin Resource Sharing](https://www.w3.org/TR/cors/)
Structure is documented below.
*/
  CorsPolicy?: Compute_URLMapPathMatcherDefaultRouteActionCorsPolicy;

  /*
The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.
As part of fault injection, when clients send requests to a backend service, delays can be introduced by Loadbalancer on a
percentage of requests before sending those request to the backend service. Similarly requests from clients can be aborted
by the Loadbalancer for a percentage of requests.
timeout and retryPolicy will be ignored by clients that are configured with a faultInjectionPolicy.
Structure is documented below.
*/
  FaultInjectionPolicy?: Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy;

  /*
Specifies the policy on how requests intended for the route's backends are shadowed to a separate mirrored backend service.
Loadbalancer does not wait for responses from the shadow service. Prior to sending traffic to the shadow service,
the host / authority header is suffixed with -shadow.
Structure is documented below.
*/
  RequestMirrorPolicy?: Compute_URLMapPathMatcherDefaultRouteActionRequestMirrorPolicy;
}

export function Compute_URLMapPathMatcherDefaultRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "RetryPolicy",
      "Specifies the retry policy associated with this route.\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultRouteActionRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Timeout",
      "Specifies the timeout for the selected route. Timeout is computed from the time the request has been\nfully processed (i.e. end-of-stream) up until the response has been completely processed. Timeout includes all retries.\nIf not specified, will use the largest timeout among all backend services associated with the route.\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultRouteActionTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UrlRewrite",
      "The spec to modify the URL of the request, prior to forwarding the request to the matched service.\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultRouteActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WeightedBackendServices",
      "A list of weighted backend services to send traffic to when a route match occurs.\nThe weights determine the fraction of traffic that flows to their corresponding backend service.\nIf all traffic needs to go to a single backend service, there must be one weightedBackendService\nwith weight set to a non 0 number.\nOnce a backendService is identified and before forwarding the request to the backend service,\nadvanced routing actions like Url rewrites and header transformations are applied depending on\nadditional settings specified in this HttpRouteAction.\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultRouteActionWeightedBackendService_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CorsPolicy",
      "The specification for allowing client side cross-origin requests. Please see\n[W3C Recommendation for Cross Origin Resource Sharing](https://www.w3.org/TR/cors/)\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultRouteActionCorsPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FaultInjectionPolicy",
      "The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.\nAs part of fault injection, when clients send requests to a backend service, delays can be introduced by Loadbalancer on a\npercentage of requests before sending those request to the backend service. Similarly requests from clients can be aborted\nby the Loadbalancer for a percentage of requests.\ntimeout and retryPolicy will be ignored by clients that are configured with a faultInjectionPolicy.\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RequestMirrorPolicy",
      "Specifies the policy on how requests intended for the route's backends are shadowed to a separate mirrored backend service.\nLoadbalancer does not wait for responses from the shadow service. Prior to sending traffic to the shadow service,\nthe host / authority header is suffixed with -shadow.\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultRouteActionRequestMirrorPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
