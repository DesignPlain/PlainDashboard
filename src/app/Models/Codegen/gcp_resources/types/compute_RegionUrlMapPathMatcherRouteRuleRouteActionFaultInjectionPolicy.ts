import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort";
import {
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay,
  compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay_GetTypes,
} from "./compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay";

export interface compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy {
  /*
The specification for how client requests are aborted as part of fault injection.
Structure is documented below.
*/
  abort?: compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort;

  /*
The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.
Structure is documented below.
*/
  delay?: compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay;
}

export function compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "abort",
      "The specification for how client requests are aborted as part of fault injection.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyAbort_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "delay",
      "The specification for how client requests are delayed as part of fault injection, before being sent to a backend service.\nStructure is documented below.",
      compute_RegionUrlMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
