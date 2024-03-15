import { FlexibleAppVersionAutomaticScalingDiskUtilization } from "./FlexibleAppVersionAutomaticScalingDiskUtilization";
import { FlexibleAppVersionAutomaticScalingRequestUtilization } from "./FlexibleAppVersionAutomaticScalingRequestUtilization";
import { FlexibleAppVersionAutomaticScalingNetworkUtilization } from "./FlexibleAppVersionAutomaticScalingNetworkUtilization";
import { FlexibleAppVersionAutomaticScalingCpuUtilization } from "./FlexibleAppVersionAutomaticScalingCpuUtilization";

export interface FlexibleAppVersionAutomaticScaling {
  /*
Target scaling by disk usage.
Structure is documented below.
*/
  DiskUtilization?: FlexibleAppVersionAutomaticScalingDiskUtilization;

  // Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
  MaxPendingLatency?: string;

  // Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  MinIdleInstances?: number;

  // Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
  MinPendingLatency?: string;

  /*
Target scaling by request utilization.
Structure is documented below.
*/
  RequestUtilization?: FlexibleAppVersionAutomaticScalingRequestUtilization;

  // Minimum number of running instances that should be maintained for this version. Default: 2
  MinTotalInstances?: number;

  /*
Target scaling by network usage.
Structure is documented below.
*/
  NetworkUtilization?: FlexibleAppVersionAutomaticScalingNetworkUtilization;

  /*
The time period that the Autoscaler should wait before it starts collecting information from a new instance.
This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s
*/
  CoolDownPeriod?: string;

  /*
Target scaling by CPU usage.
Structure is documented below.
*/
  CpuUtilization?: FlexibleAppVersionAutomaticScalingCpuUtilization;

  /*
Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.
Defaults to a runtime-specific value.
*/
  MaxConcurrentRequests?: number;

  // Maximum number of idle instances that should be maintained for this version.
  MaxIdleInstances?: number;

  // Maximum number of instances that should be started to handle requests for this version. Default: 20
  MaxTotalInstances?: number;
}
