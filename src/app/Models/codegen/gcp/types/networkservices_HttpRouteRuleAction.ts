import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkservices_HttpRouteRuleActionCorsPolicy,
  networkservices_HttpRouteRuleActionCorsPolicy_GetTypes,
} from "./networkservices_HttpRouteRuleActionCorsPolicy";
import {
  networkservices_HttpRouteRuleActionRequestMirrorPolicy,
  networkservices_HttpRouteRuleActionRequestMirrorPolicy_GetTypes,
} from "./networkservices_HttpRouteRuleActionRequestMirrorPolicy";
import {
  networkservices_HttpRouteRuleActionRetryPolicy,
  networkservices_HttpRouteRuleActionRetryPolicy_GetTypes,
} from "./networkservices_HttpRouteRuleActionRetryPolicy";
import {
  networkservices_HttpRouteRuleActionRedirect,
  networkservices_HttpRouteRuleActionRedirect_GetTypes,
} from "./networkservices_HttpRouteRuleActionRedirect";
import {
  networkservices_HttpRouteRuleActionRequestHeaderModifier,
  networkservices_HttpRouteRuleActionRequestHeaderModifier_GetTypes,
} from "./networkservices_HttpRouteRuleActionRequestHeaderModifier";
import {
  networkservices_HttpRouteRuleActionResponseHeaderModifier,
  networkservices_HttpRouteRuleActionResponseHeaderModifier_GetTypes,
} from "./networkservices_HttpRouteRuleActionResponseHeaderModifier";
import {
  networkservices_HttpRouteRuleActionUrlRewrite,
  networkservices_HttpRouteRuleActionUrlRewrite_GetTypes,
} from "./networkservices_HttpRouteRuleActionUrlRewrite";
import {
  networkservices_HttpRouteRuleActionDestination,
  networkservices_HttpRouteRuleActionDestination_GetTypes,
} from "./networkservices_HttpRouteRuleActionDestination";
import {
  networkservices_HttpRouteRuleActionFaultInjectionPolicy,
  networkservices_HttpRouteRuleActionFaultInjectionPolicy_GetTypes,
} from "./networkservices_HttpRouteRuleActionFaultInjectionPolicy";

export interface networkservices_HttpRouteRuleAction {
  /*
The specification for allowing client side cross-origin requests.
Structure is documented below.
*/
  corsPolicy?: networkservices_HttpRouteRuleActionCorsPolicy;

  /*
The specification for modifying the headers of a matching request prior to delivery of the request to the destination.
Structure is documented below.
*/
  requestHeaderModifier?: networkservices_HttpRouteRuleActionRequestHeaderModifier;

  /*
The specification for modifying the headers of a response prior to sending the response back to the client.
Structure is documented below.
*/
  responseHeaderModifier?: networkservices_HttpRouteRuleActionResponseHeaderModifier;

  /*
The specification for rewrite URL before forwarding requests to the destination.
Structure is documented below.
*/
  urlRewrite?: networkservices_HttpRouteRuleActionUrlRewrite;

  /*
The destination to which traffic should be forwarded.
Structure is documented below.
*/
  destinations?: Array<networkservices_HttpRouteRuleActionDestination>;

  /*
The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.
Structure is documented below.
*/
  faultInjectionPolicy?: networkservices_HttpRouteRuleActionFaultInjectionPolicy;

  /*
If set, the request is directed as configured by this field.
Structure is documented below.
*/
  redirect?: networkservices_HttpRouteRuleActionRedirect;

  /*
Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination.
Structure is documented below.
*/
  requestMirrorPolicy?: networkservices_HttpRouteRuleActionRequestMirrorPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  retryPolicy?: networkservices_HttpRouteRuleActionRetryPolicy;

  // Specifies the timeout for selected route.
  timeout?: string;
}

export function networkservices_HttpRouteRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "requestHeaderModifier",
      "The specification for modifying the headers of a matching request prior to delivery of the request to the destination.\nStructure is documented below.",
      () => networkservices_HttpRouteRuleActionRequestHeaderModifier_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "responseHeaderModifier",
      "The specification for modifying the headers of a response prior to sending the response back to the client.\nStructure is documented below.",
      () =>
        networkservices_HttpRouteRuleActionResponseHeaderModifier_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "urlRewrite",
      "The specification for rewrite URL before forwarding requests to the destination.\nStructure is documented below.",
      () => networkservices_HttpRouteRuleActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Specifies the retry policy associated with this route.\nStructure is documented below.",
      () => networkservices_HttpRouteRuleActionRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeout",
      "Specifies the timeout for selected route.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "corsPolicy",
      "The specification for allowing client side cross-origin requests.\nStructure is documented below.",
      () => networkservices_HttpRouteRuleActionCorsPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      "The destination to which traffic should be forwarded.\nStructure is documented below.",
      () => networkservices_HttpRouteRuleActionDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "faultInjectionPolicy",
      "The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.\nStructure is documented below.",
      () => networkservices_HttpRouteRuleActionFaultInjectionPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redirect",
      "If set, the request is directed as configured by this field.\nStructure is documented below.",
      () => networkservices_HttpRouteRuleActionRedirect_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "requestMirrorPolicy",
      "Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination.\nStructure is documented below.",
      () => networkservices_HttpRouteRuleActionRequestMirrorPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
