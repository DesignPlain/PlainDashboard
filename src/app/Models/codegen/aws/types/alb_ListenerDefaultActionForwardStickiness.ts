import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alb_ListenerDefaultActionForwardStickiness {
  // Whether target group stickiness is enabled. Default is `false`.
  enabled?: boolean;

  /*
Time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).

The following arguments are optional:
*/
  duration?: number;
}

export function alb_ListenerDefaultActionForwardStickiness_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'duration',
      'Time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether target group stickiness is enabled. Default is `false`.',
      () => [],
      false,
      false,
    ),
  ];
}
