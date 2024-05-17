import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas,
  Compute_RegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas_GetTypes,
} from "./Compute_RegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas";

export interface Compute_RegionAutoscalerAutoscalingPolicyScaleInControl {
  /*
A nested object resource
Structure is documented below.
*/
  MaxScaledInReplicas?: Compute_RegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;

  /*
How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
*/
  TimeWindowSec?: number;
}

export function Compute_RegionAutoscalerAutoscalingPolicyScaleInControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "MaxScaledInReplicas",
      "A nested object resource\nStructure is documented below.",
      Compute_RegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas_GetTypes(),
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
