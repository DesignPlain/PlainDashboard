import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay,
  Networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay_GetTypes,
} from "./Networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay";
import {
  Networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort,
  Networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort_GetTypes,
} from "./Networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort";

export interface Networkservices_GrpcRouteRuleActionFaultInjectionPolicy {
  /*
Specification of how client requests are delayed as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  Delay?: Networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay;

  /*
Specification of how client requests are aborted as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  Abort?: Networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort;
}

export function Networkservices_GrpcRouteRuleActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Abort",
      "Specification of how client requests are aborted as part of fault injection before being sent to a destination.\nStructure is documented below.",
      Networkservices_GrpcRouteRuleActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Delay",
      "Specification of how client requests are delayed as part of fault injection before being sent to a destination.\nStructure is documented below.",
      Networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
