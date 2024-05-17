import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort,
  Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort";
import {
  Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay,
  Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay";

export interface Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  Abort?: Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  Delay?: Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay;
}

export function Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      Compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
