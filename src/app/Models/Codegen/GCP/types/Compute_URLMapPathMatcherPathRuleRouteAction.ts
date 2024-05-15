import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherPathRuleRouteActionTimeout,
  Compute_URLMapPathMatcherPathRuleRouteActionTimeout_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleRouteActionTimeout";
import {
  Compute_URLMapPathMatcherPathRuleRouteActionUrlRewrite,
  Compute_URLMapPathMatcherPathRuleRouteActionUrlRewrite_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleRouteActionUrlRewrite";
import {
  Compute_URLMapPathMatcherPathRuleRouteActionWeightedBackendService,
  Compute_URLMapPathMatcherPathRuleRouteActionWeightedBackendService_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleRouteActionWeightedBackendService";
import {
  Compute_URLMapPathMatcherPathRuleRouteActionCorsPolicy,
  Compute_URLMapPathMatcherPathRuleRouteActionCorsPolicy_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleRouteActionCorsPolicy";
import {
  Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy,
  Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy";
import {
  Compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy,
  Compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy";
import {
  Compute_URLMapPathMatcherPathRuleRouteActionRetryPolicy,
  Compute_URLMapPathMatcherPathRuleRouteActionRetryPolicy_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleRouteActionRetryPolicy";

export interface Compute_URLMapPathMatcherPathRuleRouteAction {
  /*
A list of weighted backend services to send traffic to when a route match
occurs. The weights determine the fraction of traffic that flows to their
corresponding backend service. If all traffic needs to go to a single backend
service, there must be one  weightedBackendService with weight set to a non 0
number. Once a backendService is identified and before forwarding the request to
the backend service, advanced routing actions like Url rewrites and header
transformations are applied depending on additional settings specified in this
HttpRouteAction.
Structure is documented below.
*/
  WeightedBackendServices?: Array<Compute_URLMapPathMatcherPathRuleRouteActionWeightedBackendService>;

  /*
The specification for allowing client side cross-origin requests. Please see W3C
Recommendation for Cross Origin Resource Sharing
Structure is documented below.
*/
  CorsPolicy?: Compute_URLMapPathMatcherPathRuleRouteActionCorsPolicy;

  /*
The specification for fault injection introduced into traffic to test the
resiliency of clients to backend service failure. As part of fault injection,
when clients send requests to a backend service, delays can be introduced by
Loadbalancer on a percentage of requests before sending those request to the
backend service. Similarly requests from clients can be aborted by the
Loadbalancer for a percentage of requests. timeout and retry_policy will be
ignored by clients that are configured with a fault_injection_policy.
Structure is documented below.
*/
  FaultInjectionPolicy?: Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy;

  /*
Specifies the policy on how requests intended for the route's backends are
shadowed to a separate mirrored backend service. Loadbalancer does not wait for
responses from the shadow service. Prior to sending traffic to the shadow
service, the host / authority header is suffixed with -shadow.
Structure is documented below.
*/
  RequestMirrorPolicy?: Compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  RetryPolicy?: Compute_URLMapPathMatcherPathRuleRouteActionRetryPolicy;

  /*
Specifies the timeout for the selected route. Timeout is computed from the time
the request is has been fully processed (i.e. end-of-stream) up until the
response has been completely processed. Timeout includes all retries. If not
specified, the default value is 15 seconds.
Structure is documented below.
*/
  Timeout?: Compute_URLMapPathMatcherPathRuleRouteActionTimeout;

  /*
The spec to modify the URL of the request, prior to forwarding the request to
the matched service
Structure is documented below.
*/
  UrlRewrite?: Compute_URLMapPathMatcherPathRuleRouteActionUrlRewrite;
}

export function Compute_URLMapPathMatcherPathRuleRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CorsPolicy",
      "The specification for allowing client side cross-origin requests. Please see W3C\nRecommendation for Cross Origin Resource Sharing\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRuleRouteActionCorsPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FaultInjectionPolicy",
      "The specification for fault injection introduced into traffic to test the\nresiliency of clients to backend service failure. As part of fault injection,\nwhen clients send requests to a backend service, delays can be introduced by\nLoadbalancer on a percentage of requests before sending those request to the\nbackend service. Similarly requests from clients can be aborted by the\nLoadbalancer for a percentage of requests. timeout and retry_policy will be\nignored by clients that are configured with a fault_injection_policy.\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RequestMirrorPolicy",
      "Specifies the policy on how requests intended for the route's backends are\nshadowed to a separate mirrored backend service. Loadbalancer does not wait for\nresponses from the shadow service. Prior to sending traffic to the shadow\nservice, the host / authority header is suffixed with -shadow.\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RetryPolicy",
      "Specifies the retry policy associated with this route.\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRuleRouteActionRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Timeout",
      "Specifies the timeout for the selected route. Timeout is computed from the time\nthe request is has been fully processed (i.e. end-of-stream) up until the\nresponse has been completely processed. Timeout includes all retries. If not\nspecified, the default value is 15 seconds.\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRuleRouteActionTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UrlRewrite",
      "The spec to modify the URL of the request, prior to forwarding the request to\nthe matched service\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRuleRouteActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WeightedBackendServices",
      "A list of weighted backend services to send traffic to when a route match\noccurs. The weights determine the fraction of traffic that flows to their\ncorresponding backend service. If all traffic needs to go to a single backend\nservice, there must be one  weightedBackendService with weight set to a non 0\nnumber. Once a backendService is identified and before forwarding the request to\nthe backend service, advanced routing actions like Url rewrites and header\ntransformations are applied depending on additional settings specified in this\nHttpRouteAction.\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRuleRouteActionWeightedBackendService_GetTypes(),
      false,
      false,
    ),
  ];
}
