export interface StandardAppVersionAutomaticScalingStandardSchedulerSettings {
  // Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.
  MaxInstances?: number;

  // Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.
  MinInstances?: number;

  // Target CPU utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
  TargetCpuUtilization?: number;

  // Target throughput utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
  TargetThroughputUtilization?: number;
}
