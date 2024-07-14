import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkservices_GrpcRouteRuleActionFaultInjectionPolicy,
  networkservices_GrpcRouteRuleActionFaultInjectionPolicy_GetTypes,
} from "./networkservices_GrpcRouteRuleActionFaultInjectionPolicy";
import {
  networkservices_GrpcRouteRuleActionRetryPolicy,
  networkservices_GrpcRouteRuleActionRetryPolicy_GetTypes,
} from "./networkservices_GrpcRouteRuleActionRetryPolicy";
import {
  networkservices_GrpcRouteRuleActionDestination,
  networkservices_GrpcRouteRuleActionDestination_GetTypes,
} from "./networkservices_GrpcRouteRuleActionDestination";

export interface networkservices_GrpcRouteRuleAction {
  /*
The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.
Structure is documented below.
*/
  faultInjectionPolicy?: networkservices_GrpcRouteRuleActionFaultInjectionPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  retryPolicy?: networkservices_GrpcRouteRuleActionRetryPolicy;

  // Specifies the timeout for selected route.
  timeout?: string;

  /*
The destination to which traffic should be forwarded.
Structure is documented below.
*/
  destinations?: Array<networkservices_GrpcRouteRuleActionDestination>;
}

export function networkservices_GrpcRouteRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "faultInjectionPolicy",
      "The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.\nStructure is documented below.",
      networkservices_GrpcRouteRuleActionFaultInjectionPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Specifies the retry policy associated with this route.\nStructure is documented below.",
      networkservices_GrpcRouteRuleActionRetryPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeout",
      "Specifies the timeout for selected route.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      "The destination to which traffic should be forwarded.\nStructure is documented below.",
      networkservices_GrpcRouteRuleActionDestination_GetTypes(),
      false,
      false,
    ),
  ];
}
