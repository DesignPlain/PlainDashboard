import { getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout } from "./getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout";
import { getRegionInstanceTemplateSchedulingMaxRunDuration } from "./getRegionInstanceTemplateSchedulingMaxRunDuration";
import { getRegionInstanceTemplateSchedulingNodeAffinity } from "./getRegionInstanceTemplateSchedulingNodeAffinity";

export interface getRegionInstanceTemplateScheduling {
  /*
Allows instance to be preempted. This defaults to
false. Read more on this
[here](https://cloud.google.com/compute/docs/instances/preemptible).
*/
  Preemptible?: boolean;

  /*
Specifies whether the instance should be
automatically restarted if it is terminated by Compute Engine (not
terminated by a user). This defaults to true.
*/
  AutomaticRestart?: boolean;

  // Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  InstanceTerminationAction?: string;

  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  MaintenanceInterval?: string;

  // Minimum number of cpus for the instance.
  MinNodeCpus?: number;

  // Describe the type of preemptible VM.
  ProvisioningModel?: string;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeouts?: Array<getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout>;

  // The timeout for new network connections to hosts.
  MaxRunDurations?: Array<getRegionInstanceTemplateSchedulingMaxRunDuration>;

  /*
Specifies node affinities or anti-affinities
to determine which sole-tenant nodes your instances and managed instance
groups will use as host systems. Read more on sole-tenant node creation
[here](https://cloud.google.com/compute/docs/nodes/create-nodes).
Structure documented below.
*/
  NodeAffinities?: Array<getRegionInstanceTemplateSchedulingNodeAffinity>;

  /*
Defines the maintenance behavior for this
instance.
*/
  OnHostMaintenance?: string;
}
