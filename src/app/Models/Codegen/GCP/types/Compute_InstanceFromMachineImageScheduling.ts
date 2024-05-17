import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout,
  Compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from "./Compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout";
import {
  Compute_InstanceFromMachineImageSchedulingMaxRunDuration,
  Compute_InstanceFromMachineImageSchedulingMaxRunDuration_GetTypes,
} from "./Compute_InstanceFromMachineImageSchedulingMaxRunDuration";
import {
  Compute_InstanceFromMachineImageSchedulingNodeAffinity,
  Compute_InstanceFromMachineImageSchedulingNodeAffinity_GetTypes,
} from "./Compute_InstanceFromMachineImageSchedulingNodeAffinity";

export interface Compute_InstanceFromMachineImageScheduling {
  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeout?: Compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout;

  // The timeout for new network connections to hosts.
  MaxRunDuration?: Compute_InstanceFromMachineImageSchedulingMaxRunDuration;

  //
  MinNodeCpus?: number;

  // Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.
  NodeAffinities?: Array<Compute_InstanceFromMachineImageSchedulingNodeAffinity>;

  // Whether the instance is preemptible.
  Preemptible?: boolean;

  // Whether the instance is spot. If this is set as SPOT.
  ProvisioningModel?: string;

  // Specifies the action GCE should take when SPOT VM is preempted.
  InstanceTerminationAction?: string;

  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  MaintenanceInterval?: string;

  // Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,
  OnHostMaintenance?: string;

  // Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
  AutomaticRestart?: boolean;
}

export function Compute_InstanceFromMachineImageScheduling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LocalSsdRecoveryTimeout",
      "Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.",
      Compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      "Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.",
      Compute_InstanceFromMachineImageSchedulingNodeAffinity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OnHostMaintenance",
      "Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutomaticRestart",
      "Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MaxRunDuration",
      "The timeout for new network connections to hosts.",
      Compute_InstanceFromMachineImageSchedulingMaxRunDuration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(InputType.Number, "MinNodeCpus", "", [], false, false),
    new DynamicUIProps(
      InputType.Bool,
      "Preemptible",
      "Whether the instance is preemptible.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProvisioningModel",
      "Whether the instance is spot. If this is set as SPOT.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceTerminationAction",
      "Specifies the action GCE should take when SPOT VM is preempted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaintenanceInterval",
      "Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC",
      [],
      false,
      false,
    ),
  ];
}
