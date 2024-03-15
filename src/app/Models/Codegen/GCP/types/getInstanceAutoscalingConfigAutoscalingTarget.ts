export interface getInstanceAutoscalingConfigAutoscalingTarget {
  /*
Specifies the target high priority cpu utilization percentage that the autoscaler
should be trying to achieve for the instance.
This number is on a scale from 0 (no utilization) to 100 (full utilization)..
*/
  HighPriorityCpuUtilizationPercent?: number;

  /*
Specifies the target storage utilization percentage that the autoscaler
should be trying to achieve for the instance.
This number is on a scale from 0 (no utilization) to 100 (full utilization).
*/
  StorageUtilizationPercent?: number;
}
