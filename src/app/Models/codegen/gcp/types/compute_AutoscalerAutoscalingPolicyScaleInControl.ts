import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas,
  compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas_GetTypes,
} from "./compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas";

export interface compute_AutoscalerAutoscalingPolicyScaleInControl {
  /*
A nested object resource
Structure is documented below.
*/
  maxScaledInReplicas?: compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;

  /*
How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
*/
  timeWindowSec?: number;
}

export function compute_AutoscalerAutoscalingPolicyScaleInControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "maxScaledInReplicas",
      "A nested object resource\nStructure is documented below.",
      () =>
        compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeWindowSec",
      "How long back autoscaling should look when computing recommendations\nto include directives regarding slower scale down, as described above.",
      () => [],
      false,
      false,
    ),
  ];
}
