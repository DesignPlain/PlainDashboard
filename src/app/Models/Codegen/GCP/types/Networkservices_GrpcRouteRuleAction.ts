import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_GrpcRouteRuleActionDestination,
  Networkservices_GrpcRouteRuleActionDestination_GetTypes,
} from "./Networkservices_GrpcRouteRuleActionDestination";
import {
  Networkservices_GrpcRouteRuleActionFaultInjectionPolicy,
  Networkservices_GrpcRouteRuleActionFaultInjectionPolicy_GetTypes,
} from "./Networkservices_GrpcRouteRuleActionFaultInjectionPolicy";
import {
  Networkservices_GrpcRouteRuleActionRetryPolicy,
  Networkservices_GrpcRouteRuleActionRetryPolicy_GetTypes,
} from "./Networkservices_GrpcRouteRuleActionRetryPolicy";

export interface Networkservices_GrpcRouteRuleAction {
  /*
The destination to which traffic should be forwarded.
Structure is documented below.
*/
  Destinations?: Array<Networkservices_GrpcRouteRuleActionDestination>;

  /*
The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.
Structure is documented below.
*/
  FaultInjectionPolicy?: Networkservices_GrpcRouteRuleActionFaultInjectionPolicy;

  /*
Specifies the retry policy associated with this route.
Structure is documented below.
*/
  RetryPolicy?: Networkservices_GrpcRouteRuleActionRetryPolicy;

  // Specifies the timeout for selected route.
  Timeout?: string;
}

export function Networkservices_GrpcRouteRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Destinations",
      "The destination to which traffic should be forwarded.\nStructure is documented below.",
      Networkservices_GrpcRouteRuleActionDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FaultInjectionPolicy",
      "The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure.\nStructure is documented below.",
      Networkservices_GrpcRouteRuleActionFaultInjectionPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RetryPolicy",
      "Specifies the retry policy associated with this route.\nStructure is documented below.",
      Networkservices_GrpcRouteRuleActionRetryPolicy_GetTypes(),
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
  ];
}
