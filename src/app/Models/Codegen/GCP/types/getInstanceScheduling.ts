import { getInstanceSchedulingNodeAffinity } from "./getInstanceSchedulingNodeAffinity";
import { getInstanceSchedulingLocalSsdRecoveryTimeout } from "./getInstanceSchedulingLocalSsdRecoveryTimeout";
import { getInstanceSchedulingMaxRunDuration } from "./getInstanceSchedulingMaxRunDuration";

export interface getInstanceScheduling {
  // Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.
  NodeAffinities?: Array<getInstanceSchedulingNodeAffinity>;

  // Whether the instance is preemptible.
  Preemptible?: boolean;

  /*
Specifies if the instance should be
restarted if it was terminated by Compute Engine (not a user).
*/
  AutomaticRestart?: boolean;

  // Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  InstanceTerminationAction?: string;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeouts?: Array<getInstanceSchedulingLocalSsdRecoveryTimeout>;

  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  MaintenanceInterval?: string;

  // The timeout for new network connections to hosts.
  MaxRunDurations?: Array<getInstanceSchedulingMaxRunDuration>;

  //
  MinNodeCpus?: number;

  // Describe the type of preemptible VM.
  ProvisioningModel?: string;

  /*
Describes maintenance behavior for the
instance. One of `MIGRATE` or `TERMINATE`, for more info, read
[here](https://cloud.google.com/compute/docs/instances/setting-instance-scheduling-options)
*/
  OnHostMaintenance?: string;
}
