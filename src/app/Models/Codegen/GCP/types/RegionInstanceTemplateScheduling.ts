import { RegionInstanceTemplateSchedulingNodeAffinity } from "./RegionInstanceTemplateSchedulingNodeAffinity";
import { RegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout } from "./RegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout";
import { RegionInstanceTemplateSchedulingMaxRunDuration } from "./RegionInstanceTemplateSchedulingMaxRunDuration";

export interface RegionInstanceTemplateScheduling {
  /*
Specifies node affinities or anti-affinities
to determine which sole-tenant nodes your instances and managed instance
groups will use as host systems. Read more on sole-tenant node creation
[here](https://cloud.google.com/compute/docs/nodes/create-nodes).
Structure documented below.
*/
  NodeAffinities?: Array<RegionInstanceTemplateSchedulingNodeAffinity>;

  /*
Allows instance to be preempted. This defaults to
false. Read more on this
[here](https://cloud.google.com/compute/docs/instances/preemptible).
*/
  Preemptible?: boolean;

  /*
Describe the type of preemptible VM. This field accepts the value `STANDARD` or `SPOT`. If the value is `STANDARD`, there will be no discount. If this   is set to `SPOT`, 
`preemptible` should be `true` and `automatic_restart` should be
`false`. For more info about
`SPOT`, read [here](https://cloud.google.com/compute/docs/instances/spot)
*/
  ProvisioningModel?: string;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeouts?: Array<RegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout>;

  // Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.
  MaintenanceInterval?: string;

  // The duration of the instance. Instance will run and be terminated after then, the termination action could be defined in `instance_termination_action`. Only support `DELETE` `instance_termination_action` at this point. Structure is documented below.
  MaxRunDuration?: RegionInstanceTemplateSchedulingMaxRunDuration;

  // Minimum number of cpus for the instance.
  MinNodeCpus?: number;

  /*
Defines the maintenance behavior for this
instance.
*/
  OnHostMaintenance?: string;

  /*
Specifies whether the instance should be
automatically restarted if it is terminated by Compute Engine (not
terminated by a user). This defaults to true.
*/
  AutomaticRestart?: boolean;

  // Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  InstanceTerminationAction?: string;
}
