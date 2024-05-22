import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas,
  compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas_GetTypes,
} from "./compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas";

export interface compute_RegionAutoscalerAutoscalingPolicyScaleDownControl {
  /*
A nested object resource
Structure is documented below.
*/
  maxScaledDownReplicas?: compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas;

  /*
How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
*/
  timeWindowSec?: number;
}

export function compute_RegionAutoscalerAutoscalingPolicyScaleDownControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "timeWindowSec",
      "How long back autoscaling should look when computing recommendations\nto include directives regarding slower scale down, as described above.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "maxScaledDownReplicas",
      "A nested object resource\nStructure is documented below.",
      compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas_GetTypes(),
      false,
      false,
    ),
  ];
}
