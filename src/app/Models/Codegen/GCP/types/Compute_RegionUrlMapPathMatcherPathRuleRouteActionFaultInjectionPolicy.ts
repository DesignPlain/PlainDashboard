import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay,
  Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay";
import {
  Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort,
  Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort";

export interface Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;
}

export function Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      Compute_RegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
