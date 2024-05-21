import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay,
  compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay_GetTypes,
} from "./compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay";

export interface compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay {
  /*
Specifies the value of the fixed delay interval.
Structure is documented below.
*/
  fixedDelay?: compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay;

  /*
The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive.
*/
  percentage?: number;
}

export function compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "percentage",
      "The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.\nThe value must be between 0.0 and 100.0 inclusive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fixedDelay",
      "Specifies the value of the fixed delay interval.\nStructure is documented below.",
      compute_RegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay_GetTypes(),
      false,
      false,
    ),
  ];
}
