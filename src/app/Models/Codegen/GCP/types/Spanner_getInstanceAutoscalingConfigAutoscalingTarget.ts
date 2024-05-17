import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Spanner_getInstanceAutoscalingConfigAutoscalingTarget {
  /*
Specifies the target storage utilization percentage that the autoscaler
should be trying to achieve for the instance.
This number is on a scale from 0 (no utilization) to 100 (full utilization).
*/
  StorageUtilizationPercent?: number;

  /*
Specifies the target high priority cpu utilization percentage that the autoscaler
should be trying to achieve for the instance.
This number is on a scale from 0 (no utilization) to 100 (full utilization)..
*/
  HighPriorityCpuUtilizationPercent?: number;
}

export function Spanner_getInstanceAutoscalingConfigAutoscalingTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "StorageUtilizationPercent",
      "Specifies the target storage utilization percentage that the autoscaler\nshould be trying to achieve for the instance.\nThis number is on a scale from 0 (no utilization) to 100 (full utilization).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "HighPriorityCpuUtilizationPercent",
      "Specifies the target high priority cpu utilization percentage that the autoscaler\nshould be trying to achieve for the instance.\nThis number is on a scale from 0 (no utilization) to 100 (full utilization)..",
      [],
      true,
      false,
    ),
  ];
}
