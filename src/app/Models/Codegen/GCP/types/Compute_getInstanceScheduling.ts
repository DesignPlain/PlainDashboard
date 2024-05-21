import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getInstanceSchedulingLocalSsdRecoveryTimeout,
  compute_getInstanceSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from "./compute_getInstanceSchedulingLocalSsdRecoveryTimeout";
import {
  compute_getInstanceSchedulingMaxRunDuration,
  compute_getInstanceSchedulingMaxRunDuration_GetTypes,
} from "./compute_getInstanceSchedulingMaxRunDuration";
import {
  compute_getInstanceSchedulingNodeAffinity,
  compute_getInstanceSchedulingNodeAffinity_GetTypes,
} from "./compute_getInstanceSchedulingNodeAffinity";

export interface compute_getInstanceScheduling {
  /*
Specifies if the instance should be
restarted if it was terminated by Compute Engine (not a user).
*/
  automaticRestart?: boolean;

  // Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  instanceTerminationAction?: string;

  // Describe the type of preemptible VM.
  provisioningModel?: string;

  // Whether the instance is preemptible.
  preemptible?: boolean;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  localSsdRecoveryTimeouts?: Array<compute_getInstanceSchedulingLocalSsdRecoveryTimeout>;

  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  maintenanceInterval?: string;

  // The timeout for new network connections to hosts.
  maxRunDurations?: Array<compute_getInstanceSchedulingMaxRunDuration>;

  //
  minNodeCpus?: number;

  // Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.
  nodeAffinities?: Array<compute_getInstanceSchedulingNodeAffinity>;

  /*
Describes maintenance behavior for the
instance. One of `MIGRATE` or `TERMINATE`, for more info, read
[here](https://cloud.google.com/compute/docs/instances/setting-instance-scheduling-options)
*/
  onHostMaintenance?: string;
}

export function compute_getInstanceScheduling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "onHostMaintenance",
      "Describes maintenance behavior for the\ninstance. One of `MIGRATE` or `TERMINATE`, for more info, read\n[here](https://cloud.google.com/compute/docs/instances/setting-instance-scheduling-options)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "localSsdRecoveryTimeouts",
      "Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.",
      compute_getInstanceSchedulingLocalSsdRecoveryTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "minNodeCpus", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "nodeAffinities",
      "Specifies node affinities or anti-affinities to determine which sole-tenant nodes your instances and managed instance groups will use as host systems.",
      compute_getInstanceSchedulingNodeAffinity_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preemptible",
      "Whether the instance is preemptible.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maintenanceInterval",
      "Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "maxRunDurations",
      "The timeout for new network connections to hosts.",
      compute_getInstanceSchedulingMaxRunDuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "automaticRestart",
      "Specifies if the instance should be\nrestarted if it was terminated by Compute Engine (not a user).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceTerminationAction",
      "Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "provisioningModel",
      "Describe the type of preemptible VM.",
      [],
      true,
      false,
    ),
  ];
}
