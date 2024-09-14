import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort,
  compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort";
import {
  compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay,
  compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay";

export interface compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  abort?: compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  delay?: compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;
}

export function compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      () =>
        compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      () =>
        compute_URLMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
