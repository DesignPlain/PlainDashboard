import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay {
  // Specify a fixed delay before forwarding the request.
  fixedDelay?: string;

  // The percentage of traffic on which delay will be injected.
  percentage?: number;
}

export function networkservices_GrpcRouteRuleActionFaultInjectionPolicyDelay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fixedDelay",
      "Specify a fixed delay before forwarding the request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "percentage",
      "The percentage of traffic on which delay will be injected.",
      [],
      false,
      false,
    ),
  ];
}
