import { InstanceAutoscalingConfigAutoscalingLimits } from "./InstanceAutoscalingConfigAutoscalingLimits";
import { InstanceAutoscalingConfigAutoscalingTargets } from "./InstanceAutoscalingConfigAutoscalingTargets";

export interface InstanceAutoscalingConfig {
  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events. Users can define the minimum and
maximum compute capacity allocated to the instance, and the autoscaler will
only scale within that range. Users can either use nodes or processing
units to specify the limits, but should use the same unit to set both the
min_limit and max_limit.
Structure is documented below.
*/
  AutoscalingLimits?: InstanceAutoscalingConfigAutoscalingLimits;

  /*
Defines scale in controls to reduce the risk of response latency
and outages due to abrupt scale-in events
Structure is documented below.
*/
  AutoscalingTargets?: InstanceAutoscalingConfigAutoscalingTargets;
}
