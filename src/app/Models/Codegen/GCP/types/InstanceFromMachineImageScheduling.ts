import { InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout } from "./InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout";
import { InstanceFromMachineImageSchedulingMaxRunDuration } from "./InstanceFromMachineImageSchedulingMaxRunDuration";
import { InstanceFromMachineImageSchedulingNodeAffinity } from "./InstanceFromMachineImageSchedulingNodeAffinity";

export interface InstanceFromMachineImageScheduling {
  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeout?: InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout;

  // The timeout for new network connections to hosts.
  MaxRunDuration?: InstanceFromMachineImageSchedulingMaxRunDuration;

  // Whether the instance is spot. If this is set as SPOT.
  ProvisioningModel?: string;

  // Whether the instance is preemptible.
  Preemptible?: boolean;

  // Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
  AutomaticRestart?: boolean;

  // Specifies the action GCE should take when SPOT VM is preempted.
  InstanceTerminationAction?: string;

  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  MaintenanceInterval?: string;

  //
  MinNodeCpus?: number;

  // Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.
  NodeAffinities?: Array<InstanceFromMachineImageSchedulingNodeAffinity>;

  // Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,
  OnHostMaintenance?: string;
}
