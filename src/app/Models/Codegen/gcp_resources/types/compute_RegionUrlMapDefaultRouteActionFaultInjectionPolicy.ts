import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort,
  compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort";
import {
  compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay,
  compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay";

export interface compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  abort?: compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  delay?: compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay;
}

export function compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
