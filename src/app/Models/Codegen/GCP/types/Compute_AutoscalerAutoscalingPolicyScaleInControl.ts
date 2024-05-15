import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas,
  Compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas_GetTypes,
} from "./Compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas";

export interface Compute_AutoscalerAutoscalingPolicyScaleInControl {
  /*
A nested object resource
Structure is documented below.
*/
  MaxScaledInReplicas?: Compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;

  /*
How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
*/
  TimeWindowSec?: number;
}

export function Compute_AutoscalerAutoscalingPolicyScaleInControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "MaxScaledInReplicas",
      "A nested object resource\nStructure is documented below.",
      Compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas_GetTypes(),
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
