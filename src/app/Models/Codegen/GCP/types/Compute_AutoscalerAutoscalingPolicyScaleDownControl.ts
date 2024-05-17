import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_AutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas,
  Compute_AutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas_GetTypes,
} from "./Compute_AutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas";

export interface Compute_AutoscalerAutoscalingPolicyScaleDownControl {
  /*
A nested object resource
Structure is documented below.
*/
  MaxScaledDownReplicas?: Compute_AutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas;

  /*
How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
*/
  TimeWindowSec?: number;
}

export function Compute_AutoscalerAutoscalingPolicyScaleDownControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "MaxScaledDownReplicas",
      "A nested object resource\nStructure is documented below.",
      Compute_AutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeWindowSec",
      "How long back autoscaling should look when computing recommendations\nto include directives regarding slower scale down, as described above.",
      [],
      false,
      false,
    ),
  ];
}
