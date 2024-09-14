import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy,
  compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy_GetTypes,
} from "./compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy";
import {
  compute_RegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy,
  compute_RegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy_GetTypes,
} from "./compute_RegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy";
import {
  compute_RegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy,
  compute_RegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy_GetTypes,
} from "./compute_RegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy";
import {
  compute_RegionUrlMapPathMatcherPathRuleRouteActionTimeout,
  compute_RegionUrlMapPathMatcherPathRuleRouteActionTimeout_GetTypes,
} from "./compute_RegionUrlMapPathMatcherPathRuleRouteActionTimeout";
import {
  compute_RegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite,
  compute_RegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite_GetTypes,
} from "./compute_RegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite";
import {
  compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendService,
  compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendService_GetTypes,
} from "./compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendService";
import {
  compute_RegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy,
  compute_RegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy_GetTypes,
} from "./compute_RegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy";

export interface compute_RegionUrlMapPathMatcherPathRuleRouteAction {
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
  weightedBackendServices?: Array<compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendService>;

  /*
The specification for allowing client side cross-origin requests. Please see W3C
Recommendation for Cross Origin Resource Sharing
Structure is documented below.
*/
  corsPolicy?: compute_RegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy;

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
  faultInjectionPolicy?: compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy;

  /*
Specifies the policy on how requests intended for the route's backends are
shadowed to a separate mirrored backend service. Loadbalancer does not wait for
responses from the shadow service. Prior to sending traffic to the shadow
service, the host / authority header is suffixed with -shadow.
Structure is documented below.
*/
  requestMirrorPolicy?: compute_RegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  retryPolicy?: compute_RegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy;

  /*
Specifies the timeout for the selected route. Timeout is computed from the time
the request is has been fully processed (i.e. end-of-stream) up until the
response has been completely processed. Timeout includes all retries. If not
specified, the default value is 15 seconds.
Structure is documented below.
*/
  timeout?: compute_RegionUrlMapPathMatcherPathRuleRouteActionTimeout;

  /*
The spec to modify the URL of the request, prior to forwarding the request to
the matched service
Structure is documented below.
*/
  urlRewrite?: compute_RegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite;
}

export function compute_RegionUrlMapPathMatcherPathRuleRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "corsPolicy",
      "The specification for allowing client side cross-origin requests. Please see W3C\nRecommendation for Cross Origin Resource Sharing\nStructure is documented below.",
      () =>
        compute_RegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "faultInjectionPolicy",
      "The specification for fault injection introduced into traffic to test the\nresiliency of clients to backend service failure. As part of fault injection,\nwhen clients send requests to a backend service, delays can be introduced by\nLoadbalancer on a percentage of requests before sending those request to the\nbackend service. Similarly requests from clients can be aborted by the\nLoadbalancer for a percentage of requests. timeout and retry_policy will be\nignored by clients that are configured with a fault_injection_policy.\nStructure is documented below.",
      () =>
        compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "requestMirrorPolicy",
      "Specifies the policy on how requests intended for the route's backends are\nshadowed to a separate mirrored backend service. Loadbalancer does not wait for\nresponses from the shadow service. Prior to sending traffic to the shadow\nservice, the host / authority header is suffixed with -shadow.\nStructure is documented below.",
      () =>
        compute_RegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Specifies the retry policy associated with this route.\nStructure is documented below.",
      () =>
        compute_RegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Specifies the timeout for the selected route. Timeout is computed from the time\nthe request is has been fully processed (i.e. end-of-stream) up until the\nresponse has been completely processed. Timeout includes all retries. If not\nspecified, the default value is 15 seconds.\nStructure is documented below.",
      () =>
        compute_RegionUrlMapPathMatcherPathRuleRouteActionTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "urlRewrite",
      "The spec to modify the URL of the request, prior to forwarding the request to\nthe matched service\nStructure is documented below.",
      () =>
        compute_RegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "weightedBackendServices",
      "A list of weighted backend services to send traffic to when a route match\noccurs. The weights determine the fraction of traffic that flows to their\ncorresponding backend service. If all traffic needs to go to a single backend\nservice, there must be one  weightedBackendService with weight set to a non 0\nnumber. Once a backendService is identified and before forwarding the request to\nthe backend service, advanced routing actions like Url rewrites and header\ntransformations are applied depending on additional settings specified in this\nHttpRouteAction.\nStructure is documented below.",
      () =>
        compute_RegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendService_GetTypes(),
      false,
      false,
    ),
  ];
}
