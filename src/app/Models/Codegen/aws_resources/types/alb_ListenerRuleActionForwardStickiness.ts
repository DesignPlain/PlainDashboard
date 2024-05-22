import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alb_ListenerRuleActionForwardStickiness {
  // The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).
  duration?: number;

  // Indicates whether target group stickiness is enabled.
  enabled?: boolean;
}

export function alb_ListenerRuleActionForwardStickiness_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "duration",
      "The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Indicates whether target group stickiness is enabled.",
      [],
      false,
      false,
    ),
  ];
}
