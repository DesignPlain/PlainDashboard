import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  spanner_InstanceAutoscalingConfigAutoscalingTargets,
  spanner_InstanceAutoscalingConfigAutoscalingTargets_GetTypes,
} from "./spanner_InstanceAutoscalingConfigAutoscalingTargets";
import {
  spanner_InstanceAutoscalingConfigAutoscalingLimits,
  spanner_InstanceAutoscalingConfigAutoscalingLimits_GetTypes,
} from "./spanner_InstanceAutoscalingConfigAutoscalingLimits";

export interface spanner_InstanceAutoscalingConfig {
  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events
Structure is documented below.
*/
  autoscalingTargets?: spanner_InstanceAutoscalingConfigAutoscalingTargets;

  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events. Users can define the minimum and
maximum compute capacity allocated to the instance, and the autoscaler will
only scale within that range. Users can either use nodes or processing
units to specify the limits, but should use the same unit to set both the
min_limit and max_limit.
Structure is documented below.
*/
  autoscalingLimits?: spanner_InstanceAutoscalingConfigAutoscalingLimits;
}

export function spanner_InstanceAutoscalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "autoscalingTargets",
      "Defines scale in controls to reduce the risk of response latency\nand outages due to abrupt scale-in events\nStructure is documented below.",
      spanner_InstanceAutoscalingConfigAutoscalingTargets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "autoscalingLimits",
      "Defines scale in controls to reduce the risk of response latency\nand outages due to abrupt scale-in events. Users can define the minimum and\nmaximum compute capacity allocated to the instance, and the autoscaler will\nonly scale within that range. Users can either use nodes or processing\nunits to specify the limits, but should use the same unit to set both the\nmin_limit and max_limit.\nStructure is documented below.",
      spanner_InstanceAutoscalingConfigAutoscalingLimits_GetTypes(),
      false,
      false,
    ),
  ];
}
