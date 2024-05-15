import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapDefaultRouteActionFaultInjectionPolicyAbort,
  Compute_URLMapDefaultRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./Compute_URLMapDefaultRouteActionFaultInjectionPolicyAbort";
import {
  Compute_URLMapDefaultRouteActionFaultInjectionPolicyDelay,
  Compute_URLMapDefaultRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./Compute_URLMapDefaultRouteActionFaultInjectionPolicyDelay";

export interface Compute_URLMapDefaultRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: Compute_URLMapDefaultRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: Compute_URLMapDefaultRouteActionFaultInjectionPolicyDelay;
}

export function Compute_URLMapDefaultRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      Compute_URLMapDefaultRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      Compute_URLMapDefaultRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
