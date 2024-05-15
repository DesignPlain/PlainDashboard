import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas,
  Compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas_GetTypes,
} from "./Compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas";

export interface Compute_RegionAutoscalerAutoscalingPolicyScaleDownControl {
  /*
How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
*/
  TimeWindowSec?: number;

  /*
A nested object resource
Structure is documented below.
*/
  MaxScaledDownReplicas?: Compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas;
}

export function Compute_RegionAutoscalerAutoscalingPolicyScaleDownControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "TimeWindowSec",
      "How long back autoscaling should look when computing recommendations\nto include directives regarding slower scale down, as described above.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MaxScaledDownReplicas",
      "A nested object resource\nStructure is documented below.",
      Compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas_GetTypes(),
      false,
      false,
    ),
  ];
}
