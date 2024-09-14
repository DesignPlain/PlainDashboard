import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface spanner_getInstanceAutoscalingConfigAutoscalingTarget {
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

export function spanner_getInstanceAutoscalingConfigAutoscalingTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "highPriorityCpuUtilizationPercent",
      "Specifies the target high priority cpu utilization percentage that the autoscaler\nshould be trying to achieve for the instance.\nThis number is on a scale from 0 (no utilization) to 100 (full utilization)..",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "storageUtilizationPercent",
      "Specifies the target storage utilization percentage that the autoscaler\nshould be trying to achieve for the instance.\nThis number is on a scale from 0 (no utilization) to 100 (full utilization).",
      () => [],
      true,
      false,
    ),
  ];
}
