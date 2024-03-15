import { RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas } from "./RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas";

export interface RegionAutoscalerAutoscalingPolicyScaleDownControl {
  /*
A nested object resource
Structure is documented below.
*/
  MaxScaledDownReplicas?: RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas;

  /*
How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
*/
  TimeWindowSec?: number;
}
