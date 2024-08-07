import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_InstanceFromMachineImageSchedulingMaxRunDuration,
  compute_InstanceFromMachineImageSchedulingMaxRunDuration_GetTypes,
} from "./compute_InstanceFromMachineImageSchedulingMaxRunDuration";
import {
  compute_InstanceFromMachineImageSchedulingNodeAffinity,
  compute_InstanceFromMachineImageSchedulingNodeAffinity_GetTypes,
} from "./compute_InstanceFromMachineImageSchedulingNodeAffinity";
import {
  compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout,
  compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from "./compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout";

export interface compute_InstanceFromMachineImageScheduling {
  // The timeout for new network connections to hosts.
  maxRunDuration?: compute_InstanceFromMachineImageSchedulingMaxRunDuration;

  //
  minNodeCpus?: number;

  // Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.
  nodeAffinities?: Array<compute_InstanceFromMachineImageSchedulingNodeAffinity>;

  // Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,
  onHostMaintenance?: string;

  // Whether the instance is preemptible.
  preemptible?: boolean;

  // Whether the instance is spot. If this is set as SPOT.
  provisioningModel?: string;

  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  maintenanceInterval?: string;

  // Specifies the action GCE should take when SPOT VM is preempted.
  instanceTerminationAction?: string;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  localSsdRecoveryTimeout?: compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout;

  // Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
  automaticRestart?: boolean;
}

export function compute_InstanceFromMachineImageScheduling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "minNodeCpus", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "onHostMaintenance",
      "Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceTerminationAction",
      "Specifies the action GCE should take when SPOT VM is preempted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "automaticRestart",
      "Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "maxRunDuration",
      "The timeout for new network connections to hosts.",
      compute_InstanceFromMachineImageSchedulingMaxRunDuration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preemptible",
      "Whether the instance is preemptible.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "provisioningModel",
      "Whether the instance is spot. If this is set as SPOT.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "maintenanceInterval",
      "Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "localSsdRecoveryTimeout",
      "Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.",
      compute_InstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nodeAffinities",
      "Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.",
      compute_InstanceFromMachineImageSchedulingNodeAffinity_GetTypes(),
      false,
      false,
    ),
  ];
}
