import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_InstanceFromMachineImageSchedulingNodeAffinity,
  compute_InstanceFromMachineImageSchedulingNodeAffinity_GetTypes,
} from "./compute_InstanceFromMachineImageSchedulingNodeAffinity";
import {
  compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout,
  compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from "./compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout";
import {
  compute_InstanceFromMachineImageSchedulingMaxRunDuration,
  compute_InstanceFromMachineImageSchedulingMaxRunDuration_GetTypes,
} from "./compute_InstanceFromMachineImageSchedulingMaxRunDuration";

export interface compute_InstanceFromMachineImageScheduling {
  // Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.
  nodeAffinities?: Array<compute_InstanceFromMachineImageSchedulingNodeAffinity>;

  // Whether the instance is preemptible.
  preemptible?: boolean;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  localSsdRecoveryTimeout?: compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout;

  // The timeout for new network connections to hosts.
  maxRunDuration?: compute_InstanceFromMachineImageSchedulingMaxRunDuration;

  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  maintenanceInterval?: string;

  //
  minNodeCpus?: number;

  // Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,
  onHostMaintenance?: string;

  // Whether the instance is spot. If this is set as SPOT.
  provisioningModel?: string;

  // Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
  automaticRestart?: boolean;

  // Specifies the action GCE should take when SPOT VM is preempted.
  instanceTerminationAction?: string;
}

export function compute_InstanceFromMachineImageScheduling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maintenanceInterval",
      "Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minNodeCpus",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "automaticRestart",
      "Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceTerminationAction",
      "Specifies the action GCE should take when SPOT VM is preempted.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nodeAffinities",
      "Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.",
      () => compute_InstanceFromMachineImageSchedulingNodeAffinity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preemptible",
      "Whether the instance is preemptible.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "localSsdRecoveryTimeout",
      "Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.",
      () =>
        compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "maxRunDuration",
      "The timeout for new network connections to hosts.",
      () => compute_InstanceFromMachineImageSchedulingMaxRunDuration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "onHostMaintenance",
      "Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "provisioningModel",
      "Whether the instance is spot. If this is set as SPOT.",
      () => [],
      false,
      true,
    ),
  ];
}
