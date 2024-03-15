import { RegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas } from "./RegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas";

export interface RegionAutoscalerAutoscalingPolicyScaleInControl {
  /*
A nested object resource
Structure is documented below.
*/
  MaxScaledInReplicas?: RegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;

  /*
How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
*/
  TimeWindowSec?: number;
}
