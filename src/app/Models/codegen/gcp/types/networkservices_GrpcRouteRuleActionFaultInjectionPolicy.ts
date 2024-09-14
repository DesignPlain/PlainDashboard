import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort,
  networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort_GetTypes,
} from "./networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort";
import {
  networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay,
  networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay_GetTypes,
} from "./networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay";

export interface networkservices_GrpcRouteRuleActionFaultInjectionPolicy {
  /*
Specification of how client requests are aborted as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  abort?: networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort;

  /*
Specification of how client requests are delayed as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  delay?: networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay;
}

export function networkservices_GrpcRouteRuleActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "abort",
      "Specification of how client requests are aborted as part of fault injection before being sent to a destination.\nStructure is documented below.",
      () =>
        networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "delay",
      "Specification of how client requests are delayed as part of fault injection before being sent to a destination.\nStructure is documented below.",
      () =>
        networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
