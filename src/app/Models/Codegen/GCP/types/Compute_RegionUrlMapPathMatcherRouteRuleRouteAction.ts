import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionRequestMirrorPolicy,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionRequestMirrorPolicy_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionRequestMirrorPolicy";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicy,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicy_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicy";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionTimeout,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionTimeout_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionTimeout";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionUrlRewrite,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionUrlRewrite_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionUrlRewrite";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendService,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendService_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendService";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionCorsPolicy,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionCorsPolicy_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionCorsPolicy";

export interface compute_RegionUrlMapPathMatcherRouteRuleRouteAction {
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
  faultInjectionPolicy?: compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy;

  /*
Specifies the policy on how requests intended for the route's backends are
shadowed to a separate mirrored backend service. Loadbalancer does not wait for
responses from the shadow service. Prior to sending traffic to the shadow
service, the host / authority header is suffixed with -shadow.
Structure is documented below.
*/
  requestMirrorPolicy?: compute_RegionUrlMapPathMatcherRouteRuleRouteActionRequestMirrorPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  retryPolicy?: compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicy;

  /*
Specifies the timeout for the selected route. Timeout is computed from the time
the request is has been fully processed (i.e. end-of-stream) up until the
response has been completely processed. Timeout includes all retries. If not
specified, the default value is 15 seconds.
Structure is documented below.
*/
  timeout?: compute_RegionUrlMapPathMatcherRouteRuleRouteActionTimeout;

  /*
The spec to modify the URL of the request, prior to forwarding the request to
the matched service
Structure is documented below.
*/
  urlRewrite?: compute_RegionUrlMapPathMatcherRouteRuleRouteActionUrlRewrite;

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
  weightedBackendServices?: Array<compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendService>;

  /*
The specification for allowing client side cross-origin requests. Please see W3C
Recommendation for Cross Origin Resource Sharing
Structure is documented below.
*/
  corsPolicy?: compute_RegionUrlMapPathMatcherRouteRuleRouteActionCorsPolicy;
}

export function compute_RegionUrlMapPathMatcherRouteRuleRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "weightedBackendServices",
      "A list of weighted backend services to send traffic to when a route match\noccurs. The weights determine the fraction of traffic that flows to their\ncorresponding backend service. If all traffic needs to go to a single backend\nservice, there must be one  weightedBackendService with weight set to a non 0\nnumber. Once a backendService is identified and before forwarding the request to\nthe backend service, advanced routing actions like Url rewrites and header\ntransformations are applied depending on additional settings specified in this\nHttpRouteAction.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionWeightedBackendService_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "corsPolicy",
      "The specification for allowing client side cross-origin requests. Please see W3C\nRecommendation for Cross Origin Resource Sharing\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionCorsPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "faultInjectionPolicy",
      "The specification for fault injection introduced into traffic to test the\nresiliency of clients to backend service failure. As part of fault injection,\nwhen clients send requests to a backend service, delays can be introduced by\nLoadbalancer on a percentage of requests before sending those request to the\nbackend service. Similarly requests from clients can be aborted by the\nLoadbalancer for a percentage of requests. timeout and retry_policy will be\nignored by clients that are configured with a fault_injection_policy.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "requestMirrorPolicy",
      "Specifies the policy on how requests intended for the route's backends are\nshadowed to a separate mirrored backend service. Loadbalancer does not wait for\nresponses from the shadow service. Prior to sending traffic to the shadow\nservice, the host / authority header is suffixed with -shadow.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionRequestMirrorPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Specifies the retry policy associated with this route.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Specifies the timeout for the selected route. Timeout is computed from the time\nthe request is has been fully processed (i.e. end-of-stream) up until the\nresponse has been completely processed. Timeout includes all retries. If not\nspecified, the default value is 15 seconds.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "urlRewrite",
      "The spec to modify the URL of the request, prior to forwarding the request to\nthe matched service\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
  ];
}
