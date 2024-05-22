import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy,
  compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy_GetTypes,
} from "./compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy";
import {
  compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy,
  compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy_GetTypes,
} from "./compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy";
import {
  compute_URLMapPathMatcherPathRuleRouteActionRetryPolicy,
  compute_URLMapPathMatcherPathRuleRouteActionRetryPolicy_GetTypes,
} from "./compute_URLMapPathMatcherPathRuleRouteActionRetryPolicy";
import {
  compute_URLMapPathMatcherPathRuleRouteActionTimeout,
  compute_URLMapPathMatcherPathRuleRouteActionTimeout_GetTypes,
} from "./compute_URLMapPathMatcherPathRuleRouteActionTimeout";
import {
  compute_URLMapPathMatcherPathRuleRouteActionUrlRewrite,
  compute_URLMapPathMatcherPathRuleRouteActionUrlRewrite_GetTypes,
} from "./compute_URLMapPathMatcherPathRuleRouteActionUrlRewrite";
import {
  compute_URLMapPathMatcherPathRuleRouteActionWeightedBackendService,
  compute_URLMapPathMatcherPathRuleRouteActionWeightedBackendService_GetTypes,
} from "./compute_URLMapPathMatcherPathRuleRouteActionWeightedBackendService";
import {
  compute_URLMapPathMatcherPathRuleRouteActionCorsPolicy,
  compute_URLMapPathMatcherPathRuleRouteActionCorsPolicy_GetTypes,
} from "./compute_URLMapPathMatcherPathRuleRouteActionCorsPolicy";

export interface compute_URLMapPathMatcherPathRuleRouteAction {
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
  faultInjectionPolicy?: compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy;

  /*
Specifies the policy on how requests intended for the route's backends are
shadowed to a separate mirrored backend service. Loadbalancer does not wait for
responses from the shadow service. Prior to sending traffic to the shadow
service, the host / authority header is suffixed with -shadow.
Structure is documented below.
*/
  requestMirrorPolicy?: compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  retryPolicy?: compute_URLMapPathMatcherPathRuleRouteActionRetryPolicy;

  /*
Specifies the timeout for the selected route. Timeout is computed from the time
the request is has been fully processed (i.e. end-of-stream) up until the
response has been completely processed. Timeout includes all retries. If not
specified, the default value is 15 seconds.
Structure is documented below.
*/
  timeout?: compute_URLMapPathMatcherPathRuleRouteActionTimeout;

  /*
The spec to modify the URL of the request, prior to forwarding the request to
the matched service
Structure is documented below.
*/
  urlRewrite?: compute_URLMapPathMatcherPathRuleRouteActionUrlRewrite;

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
  weightedBackendServices?: Array<compute_URLMapPathMatcherPathRuleRouteActionWeightedBackendService>;

  /*
The specification for allowing client side cross-origin requests. Please see W3C
Recommendation for Cross Origin Resource Sharing
Structure is documented below.
*/
  corsPolicy?: compute_URLMapPathMatcherPathRuleRouteActionCorsPolicy;
}

export function compute_URLMapPathMatcherPathRuleRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "faultInjectionPolicy",
      "The specification for fault injection introduced into traffic to test the\nresiliency of clients to backend service failure. As part of fault injection,\nwhen clients send requests to a backend service, delays can be introduced by\nLoadbalancer on a percentage of requests before sending those request to the\nbackend service. Similarly requests from clients can be aborted by the\nLoadbalancer for a percentage of requests. timeout and retry_policy will be\nignored by clients that are configured with a fault_injection_policy.\nStructure is documented below.",
      compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "requestMirrorPolicy",
      "Specifies the policy on how requests intended for the route's backends are\nshadowed to a separate mirrored backend service. Loadbalancer does not wait for\nresponses from the shadow service. Prior to sending traffic to the shadow\nservice, the host / authority header is suffixed with -shadow.\nStructure is documented below.",
      compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Specifies the retry policy associated with this route.\nStructure is documented below.",
      compute_URLMapPathMatcherPathRuleRouteActionRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Specifies the timeout for the selected route. Timeout is computed from the time\nthe request is has been fully processed (i.e. end-of-stream) up until the\nresponse has been completely processed. Timeout includes all retries. If not\nspecified, the default value is 15 seconds.\nStructure is documented below.",
      compute_URLMapPathMatcherPathRuleRouteActionTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "urlRewrite",
      "The spec to modify the URL of the request, prior to forwarding the request to\nthe matched service\nStructure is documented below.",
      compute_URLMapPathMatcherPathRuleRouteActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "weightedBackendServices",
      "A list of weighted backend services to send traffic to when a route match\noccurs. The weights determine the fraction of traffic that flows to their\ncorresponding backend service. If all traffic needs to go to a single backend\nservice, there must be one  weightedBackendService with weight set to a non 0\nnumber. Once a backendService is identified and before forwarding the request to\nthe backend service, advanced routing actions like Url rewrites and header\ntransformations are applied depending on additional settings specified in this\nHttpRouteAction.\nStructure is documented below.",
      compute_URLMapPathMatcherPathRuleRouteActionWeightedBackendService_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "corsPolicy",
      "The specification for allowing client side cross-origin requests. Please see W3C\nRecommendation for Cross Origin Resource Sharing\nStructure is documented below.",
      compute_URLMapPathMatcherPathRuleRouteActionCorsPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
