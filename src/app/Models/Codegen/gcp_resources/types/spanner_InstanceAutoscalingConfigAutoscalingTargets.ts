import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface spanner_InstanceAutoscalingConfigAutoscalingTargets {
  /*
Specifies the target high priority cpu utilization percentage that the autoscaler
should be trying to achieve for the instance.
This number is on a scale from 0 (no utilization) to 100 (full utilization)..
*/
  highPriorityCpuUtilizationPercent?: number;

  /*
Specifies the target storage utilization percentage that the autoscaler
should be trying to achieve for the instance.
This number is on a scale from 0 (no utilization) to 100 (full utilization).
*/
  storageUtilizationPercent?: number;
}

export function spanner_InstanceAutoscalingConfigAutoscalingTargets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "highPriorityCpuUtilizationPercent",
      "Specifies the target high priority cpu utilization percentage that the autoscaler\nshould be trying to achieve for the instance.\nThis number is on a scale from 0 (no utilization) to 100 (full utilization)..",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "storageUtilizationPercent",
      "Specifies the target storage utilization percentage that the autoscaler\nshould be trying to achieve for the instance.\nThis number is on a scale from 0 (no utilization) to 100 (full utilization).",
      [],
      false,
      false,
    ),
  ];
}
