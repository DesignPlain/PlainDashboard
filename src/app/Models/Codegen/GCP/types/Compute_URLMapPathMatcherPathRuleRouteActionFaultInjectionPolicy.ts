import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort,
  Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort";
import {
  Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay,
  Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay";

export interface Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;
}

export function Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      Compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
