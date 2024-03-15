import { InstanceSchedulingMaxRunDuration } from "./InstanceSchedulingMaxRunDuration";
import { InstanceSchedulingNodeAffinity } from "./InstanceSchedulingNodeAffinity";
import { InstanceSchedulingLocalSsdRecoveryTimeout } from "./InstanceSchedulingLocalSsdRecoveryTimeout";

export interface InstanceScheduling {
  // Describe the type of termination action for VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  InstanceTerminationAction?: string;

  // Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.
  MaintenanceInterval?: string;

  /*
The duration of the instance. Instance will run and be terminated after then, the termination action could be defined in `instance_termination_action`. Only support `DELETE` `instance_termination_action` at this point. Structure is documented below.
<a name="nested_max_run_duration"></a>The `max_run_duration` block supports:
*/
  MaxRunDuration?: InstanceSchedulingMaxRunDuration;

  /*
Specifies node affinities or anti-affinities
to determine which sole-tenant nodes your instances and managed instance
groups will use as host systems. Read more on sole-tenant node creation
[here](https://cloud.google.com/compute/docs/nodes/create-nodes).
Structure documented below.
*/
  NodeAffinities?: Array<InstanceSchedulingNodeAffinity>;

  /*
Specifies if the instance is preemptible.
If this field is set to true, then `automatic_restart` must be
set to false.  Defaults to false.
*/
  Preemptible?: boolean;

  /*
Specifies if the instance should be
restarted if it was terminated by Compute Engine (not a user).
Defaults to true.
*/
  AutomaticRestart?: boolean;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeout?: InstanceSchedulingLocalSsdRecoveryTimeout;

  // The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node.
  MinNodeCpus?: number;

  /*
Describes maintenance behavior for the
instance. Can be MIGRATE or TERMINATE, for more info, read
[here](https://cloud.google.com/compute/docs/instances/setting-instance-scheduling-options).
*/
  OnHostMaintenance?: string;

  /*
Describe the type of preemptible VM. This field accepts the value `STANDARD` or `SPOT`. If the value is `STANDARD`, there will be no discount. If this   is set to `SPOT`,
`preemptible` should be `true` and `automatic_restart` should be
`false`. For more info about
`SPOT`, read [here](https://cloud.google.com/compute/docs/instances/spot)
*/
  ProvisioningModel?: string;
}
