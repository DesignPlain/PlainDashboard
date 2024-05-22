import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_URLMapDefaultRouteActionRequestMirrorPolicy,
  compute_URLMapDefaultRouteActionRequestMirrorPolicy_GetTypes,
} from "./compute_URLMapDefaultRouteActionRequestMirrorPolicy";
import {
  compute_URLMapDefaultRouteActionRetryPolicy,
  compute_URLMapDefaultRouteActionRetryPolicy_GetTypes,
} from "./compute_URLMapDefaultRouteActionRetryPolicy";
import {
  compute_URLMapDefaultRouteActionTimeout,
  compute_URLMapDefaultRouteActionTimeout_GetTypes,
} from "./compute_URLMapDefaultRouteActionTimeout";
import {
  compute_URLMapDefaultRouteActionUrlRewrite,
  compute_URLMapDefaultRouteActionUrlRewrite_GetTypes,
} from "./compute_URLMapDefaultRouteActionUrlRewrite";
import {
  compute_URLMapDefaultRouteActionWeightedBackendService,
  compute_URLMapDefaultRouteActionWeightedBackendService_GetTypes,
} from "./compute_URLMapDefaultRouteActionWeightedBackendService";
import {
  compute_URLMapDefaultRouteActionCorsPolicy,
  compute_URLMapDefaultRouteActionCorsPolicy_GetTypes,
} from "./compute_URLMapDefaultRouteActionCorsPolicy";
import {
  compute_URLMapDefaultRouteActionFaultInjectionPolicy,
  compute_URLMapDefaultRouteActionFaultInjectionPolicy_GetTypes,
} from "./compute_URLMapDefaultRouteActionFaultInjectionPolicy";

export interface compute_URLMapDefaultRouteAction {
  /*
The spec to modify the URL of the request, prior to forwarding the request to the matched service.
Structure is documented below.
*/
  urlRewrite?: compute_URLMapDefaultRouteActionUrlRewrite;

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
  weightedBackendServices?: Array<compute_URLMapDefaultRouteActionWeightedBackendService>;

  /*
The specification for allowing client side cross-origin requests. Please see
[W3C Recommendation for Cross Origin Resource Sharing](https://www.w3.org/TR/cors/)
Structure is documented below.
*/
  corsPolicy?: compute_URLMapDefaultRouteActionCorsPolicy;

  /*
The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.
As part of fault injection, when clients send requests to a backend service, delays can be introduced by Loadbalancer on a
percentage of requests before sending those request to the backend service. Similarly requests from clients can be aborted
by the Loadbalancer for a percentage of requests.
timeout and retryPolicy will be ignored by clients that are configured with a faultInjectionPolicy.
Structure is documented below.
*/
  faultInjectionPolicy?: compute_URLMapDefaultRouteActionFaultInjectionPolicy;

  /*
Specifies the policy on how requests intended for the route's backends are shadowed to a separate mirrored backend service.
Loadbalancer does not wait for responses from the shadow service. Prior to sending traffic to the shadow service,
the host / authority header is suffixed with -shadow.
Structure is documented below.
*/
  requestMirrorPolicy?: compute_URLMapDefaultRouteActionRequestMirrorPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  retryPolicy?: compute_URLMapDefaultRouteActionRetryPolicy;

  /*
Specifies the timeout for the selected route. Timeout is computed from the time the request has been
fully processed (i.e. end-of-stream) up until the response has been completely processed. Timeout includes all retries.
If not specified, will use the largest timeout among all backend services associated with the route.
Structure is documented below.
*/
  timeout?: compute_URLMapDefaultRouteActionTimeout;
}

export function compute_URLMapDefaultRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "urlRewrite",
      "The spec to modify the URL of the request, prior to forwarding the request to the matched service.\nStructure is documented below.",
      compute_URLMapDefaultRouteActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "weightedBackendServices",
      "A list of weighted backend services to send traffic to when a route match occurs.\nThe weights determine the fraction of traffic that flows to their corresponding backend service.\nIf all traffic needs to go to a single backend service, there must be one weightedBackendService\nwith weight set to a non 0 number.\nOnce a backendService is identified and before forwarding the request to the backend service,\nadvanced routing actions like Url rewrites and header transformations are applied depending on\nadditional settings specified in this HttpRouteAction.\nStructure is documented below.",
      compute_URLMapDefaultRouteActionWeightedBackendService_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "corsPolicy",
      "The specification for allowing client side cross-origin requests. Please see\n[W3C Recommendation for Cross Origin Resource Sharing](https://www.w3.org/TR/cors/)\nStructure is documented below.",
      compute_URLMapDefaultRouteActionCorsPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "faultInjectionPolicy",
      "The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.\nAs part of fault injection, when clients send requests to a backend service, delays can be introduced by Loadbalancer on a\npercentage of requests before sending those request to the backend service. Similarly requests from clients can be aborted\nby the Loadbalancer for a percentage of requests.\ntimeout and retryPolicy will be ignored by clients that are configured with a faultInjectionPolicy.\nStructure is documented below.",
      compute_URLMapDefaultRouteActionFaultInjectionPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "requestMirrorPolicy",
      "Specifies the policy on how requests intended for the route's backends are shadowed to a separate mirrored backend service.\nLoadbalancer does not wait for responses from the shadow service. Prior to sending traffic to the shadow service,\nthe host / authority header is suffixed with -shadow.\nStructure is documented below.",
      compute_URLMapDefaultRouteActionRequestMirrorPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Specifies the retry policy associated with this route.\nStructure is documented below.",
      compute_URLMapDefaultRouteActionRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Specifies the timeout for the selected route. Timeout is computed from the time the request has been\nfully processed (i.e. end-of-stream) up until the response has been completely processed. Timeout includes all retries.\nIf not specified, will use the largest timeout among all backend services associated with the route.\nStructure is documented below.",
      compute_URLMapDefaultRouteActionTimeout_GetTypes(),
      false,
      false,
    ),
  ];
}
