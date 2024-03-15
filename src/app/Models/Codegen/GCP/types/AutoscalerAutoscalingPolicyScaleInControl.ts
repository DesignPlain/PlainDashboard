import { AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas } from "./AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas";

export interface AutoscalerAutoscalingPolicyScaleInControl {
  /*
A nested object resource
Structure is documented below.
*/
  MaxScaledInReplicas?: AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;

  /*
How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
*/
  TimeWindowSec?: number;
}
