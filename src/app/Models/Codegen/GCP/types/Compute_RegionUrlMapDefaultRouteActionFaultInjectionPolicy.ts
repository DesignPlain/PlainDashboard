import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort,
  Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort";
import {
  Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay,
  Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay";

export interface Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay;
}

export function Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      Compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
