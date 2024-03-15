export interface FlexibleAppVersionAutomaticScalingCpuUtilization {
  // Period of time over which CPU utilization is calculated.
  AggregationWindowLength?: string;

  // Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
  TargetUtilization?: number;
}
