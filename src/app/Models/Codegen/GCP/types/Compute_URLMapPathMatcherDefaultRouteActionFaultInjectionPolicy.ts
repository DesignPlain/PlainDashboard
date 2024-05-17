import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort,
  Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort";
import {
  Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay,
  Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay";

export interface Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay;
}

export function Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      Compute_URLMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
