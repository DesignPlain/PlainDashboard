import { AutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas } from "./AutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas";

export interface AutoscalerAutoscalingPolicyScaleDownControl {
  /*
How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
*/
  TimeWindowSec?: number;

  /*
A nested object resource
Structure is documented below.
*/
  MaxScaledDownReplicas?: AutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas;
}