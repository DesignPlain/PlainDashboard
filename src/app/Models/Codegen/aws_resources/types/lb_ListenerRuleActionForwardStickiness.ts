import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lb_ListenerRuleActionForwardStickiness {
  // Indicates whether target group stickiness is enabled.
  enabled?: boolean;

  // The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).
  duration?: number;
}

export function lb_ListenerRuleActionForwardStickiness_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Indicates whether target group stickiness is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "duration",
      "The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).",
      [],
      true,
      false,
    ),
  ];
}
