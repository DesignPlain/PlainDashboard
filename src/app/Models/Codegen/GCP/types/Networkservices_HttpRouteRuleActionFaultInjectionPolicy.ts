import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort,
  Networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort_GetTypes,
} from "./Networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort";
import {
  Networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay,
  Networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay_GetTypes,
} from "./Networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay";

export interface Networkservices_HttpRouteRuleActionFaultInjectionPolicy {
  /*
Specification of how client requests are aborted as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  Abort?: Networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort;

  /*
Specification of how client requests are delayed as part of fault injection before being sent to a destination.
Structure is documented below.
*/
  Delay?: Networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay;
}

export function Networkservices_HttpRouteRuleActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Abort",
      "Specification of how client requests are aborted as part of fault injection before being sent to a destination.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Delay",
      "Specification of how client requests are delayed as part of fault injection before being sent to a destination.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
