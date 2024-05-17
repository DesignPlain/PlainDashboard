import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Spanner_getInstanceAutoscalingConfigAutoscalingLimit,
  Spanner_getInstanceAutoscalingConfigAutoscalingLimit_GetTypes,
} from "./Spanner_getInstanceAutoscalingConfigAutoscalingLimit";
import {
  Spanner_getInstanceAutoscalingConfigAutoscalingTarget,
  Spanner_getInstanceAutoscalingConfigAutoscalingTarget_GetTypes,
} from "./Spanner_getInstanceAutoscalingConfigAutoscalingTarget";

export interface Spanner_getInstanceAutoscalingConfig {
  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events. Users can define the minimum and
maximum compute capacity allocated to the instance, and the autoscaler will
only scale within that range. Users can either use nodes or processing
units to specify the limits, but should use the same unit to set both the
min_limit and max_limit.
*/
  AutoscalingLimits?: Array<Spanner_getInstanceAutoscalingConfigAutoscalingLimit>;

  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events
*/
  AutoscalingTargets?: Array<Spanner_getInstanceAutoscalingConfigAutoscalingTarget>;
}

export function Spanner_getInstanceAutoscalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AutoscalingLimits",
      "Defines scale in controls to reduce the risk of response latency\nand outages due to abrupt scale-in events. Users can define the minimum and\nmaximum compute capacity allocated to the instance, and the autoscaler will\nonly scale within that range. Users can either use nodes or processing\nunits to specify the limits, but should use the same unit to set both the\nmin_limit and max_limit.",
      Spanner_getInstanceAutoscalingConfigAutoscalingLimit_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AutoscalingTargets",
      "Defines scale in controls to reduce the risk of response latency\nand outages due to abrupt scale-in events",
      Spanner_getInstanceAutoscalingConfigAutoscalingTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
