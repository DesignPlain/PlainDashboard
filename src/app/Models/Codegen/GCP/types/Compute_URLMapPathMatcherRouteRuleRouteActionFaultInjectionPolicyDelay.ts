import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelayFixedDelay,
  Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelayFixedDelay_GetTypes,
} from "./Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelayFixedDelay";

export interface Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay {
  /*
Specifies the value of the fixed delay interval.
Structure is documented below.
*/
  FixedDelay?: Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelayFixedDelay;

  /*
The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive.
*/
  Percentage?: number;
}

export function Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "FixedDelay",
      "Specifies the value of the fixed delay interval.\nStructure is documented below.",
      Compute_URLMapPathMatcherRouteRuleRouteActionFaultInjectionPolicyDelayFixedDelay_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Percentage",
      "The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.\nThe value must be between 0.0 and 100.0 inclusive.",
      [],
      false,
      false,
    ),
  ];
}
