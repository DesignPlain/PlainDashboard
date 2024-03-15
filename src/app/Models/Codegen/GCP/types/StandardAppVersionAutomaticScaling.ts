import { StandardAppVersionAutomaticScalingStandardSchedulerSettings } from "./StandardAppVersionAutomaticScalingStandardSchedulerSettings";

export interface StandardAppVersionAutomaticScaling {
  /*
Scheduler settings for standard environment.
Structure is documented below.
*/
  StandardSchedulerSettings?: StandardAppVersionAutomaticScalingStandardSchedulerSettings;

  /*
Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.
Defaults to a runtime-specific value.
*/
  MaxConcurrentRequests?: number;

  // Maximum number of idle instances that should be maintained for this version.
  MaxIdleInstances?: number;

  /*
Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  MaxPendingLatency?: string;

  // Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  MinIdleInstances?: number;

  /*
Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  MinPendingLatency?: string;
}
