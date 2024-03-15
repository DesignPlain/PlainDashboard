export interface getInstanceGroupManagerVersionTargetSize {
  // The number of instances which are managed for this version. Conflicts with percent.
  Fixed?: number;

  // The number of instances (calculated as percentage) which are managed for this version. Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.
  Percent?: number;
}
