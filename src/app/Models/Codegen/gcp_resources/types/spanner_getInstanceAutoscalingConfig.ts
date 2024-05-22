import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  spanner_getInstanceAutoscalingConfigAutoscalingLimit,
  spanner_getInstanceAutoscalingConfigAutoscalingLimit_GetTypes,
} from "./spanner_getInstanceAutoscalingConfigAutoscalingLimit";
import {
  spanner_getInstanceAutoscalingConfigAutoscalingTarget,
  spanner_getInstanceAutoscalingConfigAutoscalingTarget_GetTypes,
} from "./spanner_getInstanceAutoscalingConfigAutoscalingTarget";

export interface spanner_getInstanceAutoscalingConfig {
  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events. Users can define the minimum and
maximum compute capacity allocated to the instance, and the autoscaler will
only scale within that range. Users can either use nodes or processing
units to specify the limits, but should use the same unit to set both the
min_limit and max_limit.
*/
  autoscalingLimits?: Array<spanner_getInstanceAutoscalingConfigAutoscalingLimit>;

  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events
*/
  autoscalingTargets?: Array<spanner_getInstanceAutoscalingConfigAutoscalingTarget>;
}

export function spanner_getInstanceAutoscalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "autoscalingLimits",
      "Defines scale in controls to reduce the risk of response latency\nand outages due to abrupt scale-in events. Users can define the minimum and\nmaximum compute capacity allocated to the instance, and the autoscaler will\nonly scale within that range. Users can either use nodes or processing\nunits to specify the limits, but should use the same unit to set both the\nmin_limit and max_limit.",
      spanner_getInstanceAutoscalingConfigAutoscalingLimit_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "autoscalingTargets",
      "Defines scale in controls to reduce the risk of response latency\nand outages due to abrupt scale-in events",
      spanner_getInstanceAutoscalingConfigAutoscalingTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
