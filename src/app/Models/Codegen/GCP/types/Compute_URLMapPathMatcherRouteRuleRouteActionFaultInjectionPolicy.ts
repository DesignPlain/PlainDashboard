import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay,
  Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay";
import {
  Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort,
  Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort";

export interface Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay;

  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort;
}

export function Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
  ];
}
