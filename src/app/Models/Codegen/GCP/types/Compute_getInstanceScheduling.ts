import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getInstanceSchedulingMaxRunDuration,
  Compute_getInstanceSchedulingMaxRunDuration_GetTypes,
} from "./Compute_getInstanceSchedulingMaxRunDuration";
import {
  Compute_getInstanceSchedulingLocalSsdRecoveryTimeout,
  Compute_getInstanceSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from "./Compute_getInstanceSchedulingLocalSsdRecoveryTimeout";
import {
  Compute_getInstanceSchedulingNodeAffinity,
  Compute_getInstanceSchedulingNodeAffinity_GetTypes,
} from "./Compute_getInstanceSchedulingNodeAffinity";

export interface Compute_getInstanceScheduling {
  /*
Describes maintenance behavior for the
instance. One of `MIGRATE` or `TERMINATE`, for more info, read
[here](https://cloud.google.com/compute/docs/instances/setting-instance-scheduling-options)
*/
  OnHostMaintenance?: string;

  /*
Specifies if the instance should be
restarted if it was terminated by Compute Engine (not a user).
*/
  AutomaticRestart?: boolean;

  // Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  InstanceTerminationAction?: string;

  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  MaintenanceInterval?: string;

  // The timeout for new network connections to hosts.
  MaxRunDurations?: Array<Compute_getInstanceSchedulingMaxRunDuration>;

  //
  MinNodeCpus?: number;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeouts?: Array<Compute_getInstanceSchedulingLocalSsdRecoveryTimeout>;

  // Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.
  NodeAffinities?: Array<Compute_getInstanceSchedulingNodeAffinity>;

  // Whether the instance is preemptible.
  Preemptible?: boolean;

  // Describe the type of preemptible VM.
  ProvisioningModel?: string;
}

export function Compute_getInstanceScheduling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AutomaticRestart",
      "Specifies if the instance should be\nrestarted if it was terminated by Compute Engine (not a user).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaintenanceInterval",
      "Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "LocalSsdRecoveryTimeouts",
      "Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.",
      Compute_getInstanceSchedulingLocalSsdRecoveryTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProvisioningModel",
      "Describe the type of preemptible VM.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OnHostMaintenance",
      "Describes maintenance behavior for the\ninstance. One of `MIGRATE` or `TERMINATE`, for more info, read\n[here](https://cloud.google.com/compute/docs/instances/setting-instance-scheduling-options)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MaxRunDurations",
      "The timeout for new network connections to hosts.",
      Compute_getInstanceSchedulingMaxRunDuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "MinNodeCpus", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      "Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.",
      Compute_getInstanceSchedulingNodeAffinity_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Preemptible",
      "Whether the instance is preemptible.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceTerminationAction",
      "Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)",
      [],
      true,
      false,
    ),
  ];
}
