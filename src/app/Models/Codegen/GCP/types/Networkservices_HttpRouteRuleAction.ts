import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_HttpRouteRuleActionRedirect,
  Networkservices_HttpRouteRuleActionRedirect_GetTypes,
} from "./Networkservices_HttpRouteRuleActionRedirect";
import {
  Networkservices_HttpRouteRuleActionResponseHeaderModifier,
  Networkservices_HttpRouteRuleActionResponseHeaderModifier_GetTypes,
} from "./Networkservices_HttpRouteRuleActionResponseHeaderModifier";
import {
  Networkservices_HttpRouteRuleActionRequestMirrorPolicy,
  Networkservices_HttpRouteRuleActionRequestMirrorPolicy_GetTypes,
} from "./Networkservices_HttpRouteRuleActionRequestMirrorPolicy";
import {
  Networkservices_HttpRouteRuleActionCorsPolicy,
  Networkservices_HttpRouteRuleActionCorsPolicy_GetTypes,
} from "./Networkservices_HttpRouteRuleActionCorsPolicy";
import {
  Networkservices_HttpRouteRuleActionFaultInjectionPolicy,
  Networkservices_HttpRouteRuleActionFaultInjectionPolicy_GetTypes,
} from "./Networkservices_HttpRouteRuleActionFaultInjectionPolicy";
import {
  Networkservices_HttpRouteRuleActionRequestHeaderModifier,
  Networkservices_HttpRouteRuleActionRequestHeaderModifier_GetTypes,
} from "./Networkservices_HttpRouteRuleActionRequestHeaderModifier";
import {
  Networkservices_HttpRouteRuleActionDestination,
  Networkservices_HttpRouteRuleActionDestination_GetTypes,
} from "./Networkservices_HttpRouteRuleActionDestination";
import {
  Networkservices_HttpRouteRuleActionRetryPolicy,
  Networkservices_HttpRouteRuleActionRetryPolicy_GetTypes,
} from "./Networkservices_HttpRouteRuleActionRetryPolicy";
import {
  Networkservices_HttpRouteRuleActionUrlRewrite,
  Networkservices_HttpRouteRuleActionUrlRewrite_GetTypes,
} from "./Networkservices_HttpRouteRuleActionUrlRewrite";

export interface Networkservices_HttpRouteRuleAction {
  /*
The destination to which traffic should be forwarded.
Structure is documented below.
*/
  Destinations?: Array<Networkservices_HttpRouteRuleActionDestination>;

  /*
Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination.
Structure is documented below.
*/
  RequestMirrorPolicy?: Networkservices_HttpRouteRuleActionRequestMirrorPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  RetryPolicy?: Networkservices_HttpRouteRuleActionRetryPolicy;

  /*
The specification for rewrite URL before forwarding requests to the destination.
Structure is documented below.
*/
  UrlRewrite?: Networkservices_HttpRouteRuleActionUrlRewrite;

  // Specifies the timeout for selected route.
  Timeout?: string;

  /*
The specification for allowing client side cross-origin requests.
Structure is documented below.
*/
  CorsPolicy?: Networkservices_HttpRouteRuleActionCorsPolicy;

  /*
The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.
Structure is documented below.
*/
  FaultInjectionPolicy?: Networkservices_HttpRouteRuleActionFaultInjectionPolicy;

  /*
If set, the request is directed as configured by this field.
Structure is documented below.
*/
  Redirect?: Networkservices_HttpRouteRuleActionRedirect;

  /*
The specification for modifying the headers of a matching request prior to delivery of the request to the destination.
Structure is documented below.
*/
  RequestHeaderModifier?: Networkservices_HttpRouteRuleActionRequestHeaderModifier;

  /*
The specification for modifying the headers of a response prior to sending the response back to the client.
Structure is documented below.
*/
  ResponseHeaderModifier?: Networkservices_HttpRouteRuleActionResponseHeaderModifier;
}

export function Networkservices_HttpRouteRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "RequestMirrorPolicy",
      "Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionRequestMirrorPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Timeout",
      "Specifies the timeout for selected route.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CorsPolicy",
      "The specification for allowing client side cross-origin requests.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionCorsPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RequestHeaderModifier",
      "The specification for modifying the headers of a matching request prior to delivery of the request to the destination.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionRequestHeaderModifier_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Destinations",
      "The destination to which traffic should be forwarded.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UrlRewrite",
      "The specification for rewrite URL before forwarding requests to the destination.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionUrlRewrite_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FaultInjectionPolicy",
      "The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionFaultInjectionPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Redirect",
      "If set, the request is directed as configured by this field.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionRedirect_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ResponseHeaderModifier",
      "The specification for modifying the headers of a response prior to sending the response back to the client.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionResponseHeaderModifier_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RetryPolicy",
      "Specifies the retry policy associated with this route.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionRetryPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
