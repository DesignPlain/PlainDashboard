import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getInstanceTemplateSchedulingMaxRunDuration,
  Compute_getInstanceTemplateSchedulingMaxRunDuration_GetTypes,
} from "./Compute_getInstanceTemplateSchedulingMaxRunDuration";
import {
  Compute_getInstanceTemplateSchedulingNodeAffinity,
  Compute_getInstanceTemplateSchedulingNodeAffinity_GetTypes,
} from "./Compute_getInstanceTemplateSchedulingNodeAffinity";
import {
  Compute_getInstanceTemplateSchedulingLocalSsdRecoveryTimeout,
  Compute_getInstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from "./Compute_getInstanceTemplateSchedulingLocalSsdRecoveryTimeout";

export interface Compute_getInstanceTemplateScheduling {
  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  MaintenanceInterval?: string;

  // The timeout for new network connections to hosts.
  MaxRunDurations?: Array<Compute_getInstanceTemplateSchedulingMaxRunDuration>;

  /*
Specifies node affinities or anti-affinities
to determine which sole-tenant nodes your instances and managed instance
groups will use as host systems. Read more on sole-tenant node creation
[here](https://cloud.google.com/compute/docs/nodes/create-nodes).
Structure documented below.
*/
  NodeAffinities?: Array<Compute_getInstanceTemplateSchedulingNodeAffinity>;

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

  /*
Defines the maintenance behavior for this
instance.
*/
  OnHostMaintenance?: string;

  // Describe the type of preemptible VM.
  ProvisioningModel?: string;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeouts?: Array<Compute_getInstanceTemplateSchedulingLocalSsdRecoveryTimeout>;

  // Minimum number of cpus for the instance.
  MinNodeCpus?: number;
}

export function Compute_getInstanceTemplateScheduling_GetTypes(): DynamicUIProps[] {
  return [
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
      "MaxRunDurations",
      "The timeout for new network connections to hosts.",
      Compute_getInstanceTemplateSchedulingMaxRunDuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Preemptible",
      "Allows instance to be preempted. This defaults to\nfalse. Read more on this\n[here](https://cloud.google.com/compute/docs/instances/preemptible).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutomaticRestart",
      "Specifies whether the instance should be\nautomatically restarted if it is terminated by Compute Engine (not\nterminated by a user). This defaults to true.",
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
    new DynamicUIProps(
      InputType.String,
      "ProvisioningModel",
      "Describe the type of preemptible VM.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "LocalSsdRecoveryTimeouts",
      "Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.",
      Compute_getInstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinNodeCpus",
      "Minimum number of cpus for the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      "Specifies node affinities or anti-affinities\nto determine which sole-tenant nodes your instances and managed instance\ngroups will use as host systems. Read more on sole-tenant node creation\n[here](https://cloud.google.com/compute/docs/nodes/create-nodes).\nStructure documented below.",
      Compute_getInstanceTemplateSchedulingNodeAffinity_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OnHostMaintenance",
      "Defines the maintenance behavior for this\ninstance.",
      [],
      true,
      false,
    ),
  ];
}
