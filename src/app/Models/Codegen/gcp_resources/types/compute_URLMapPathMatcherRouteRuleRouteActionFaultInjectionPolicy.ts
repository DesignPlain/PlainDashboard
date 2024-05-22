import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort,
  compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort";
import {
  compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay,
  compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay";

export interface compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  abort?: compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  delay?: compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay;
}

export function compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
