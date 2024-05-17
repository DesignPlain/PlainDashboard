import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay {
  // Specify a fixed delay before forwarding the request.
  FixedDelay?: string;

  // The percentage of traffic on which delay will be injected.
  Percentage?: number;
}

export function Networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FixedDelay",
      "Specify a fixed delay before forwarding the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Percentage",
      "The percentage of traffic on which delay will be injected.",
      [],
      false,
      false,
    ),
  ];
}
