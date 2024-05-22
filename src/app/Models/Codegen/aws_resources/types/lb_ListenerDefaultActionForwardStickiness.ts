import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lb_ListenerDefaultActionForwardStickiness {
  /*
Time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).

The following arguments are optional:
*/
  duration?: number;

  // Whether target group stickiness is enabled. Default is `false`.
  enabled?: boolean;
}

export function lb_ListenerDefaultActionForwardStickiness_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "duration",
      "Time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether target group stickiness is enabled. Default is `false`.",
      [],
      false,
      false,
    ),
  ];
}
