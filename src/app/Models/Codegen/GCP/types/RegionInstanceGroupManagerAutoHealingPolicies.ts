export interface RegionInstanceGroupManagerAutoHealingPolicies {
  /*
The number of seconds that the managed instance group waits before
it applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600.
*/
  InitialDelaySec?: number;

  // The health check resource that signals autohealing.
  HealthCheck?: string;
}
