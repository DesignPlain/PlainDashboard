import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay {
  // Specify a fixed delay before forwarding the request.
  fixedDelay?: string;

  // The percentage of traffic on which delay will be injected.
  percentage?: number;
}

export function networkservices_HttpRouteRuleActionFaultInjectionPolicyDelay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "percentage",
      "The percentage of traffic on which delay will be injected.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fixedDelay",
      "Specify a fixed delay before forwarding the request.",
      () => [],
      false,
      false,
    ),
  ];
}
