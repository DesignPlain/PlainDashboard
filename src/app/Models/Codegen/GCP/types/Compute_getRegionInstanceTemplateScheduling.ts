import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getRegionInstanceTemplateSchedulingMaxRunDuration,
  Compute_getRegionInstanceTemplateSchedulingMaxRunDuration_GetTypes,
} from "./Compute_getRegionInstanceTemplateSchedulingMaxRunDuration";
import {
  Compute_getRegionInstanceTemplateSchedulingNodeAffinity,
  Compute_getRegionInstanceTemplateSchedulingNodeAffinity_GetTypes,
} from "./Compute_getRegionInstanceTemplateSchedulingNodeAffinity";
import {
  Compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout,
  Compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from "./Compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout";

export interface Compute_getRegionInstanceTemplateScheduling {
  // Describe the type of preemptible VM.
  ProvisioningModel?: string;

  /*
Specifies whether the instance should be
automatically restarted if it is terminated by Compute Engine (not
terminated by a user). This defaults to true.
*/
  AutomaticRestart?: boolean;

  // The timeout for new network connections to hosts.
  MaxRunDurations?: Array<Compute_getRegionInstanceTemplateSchedulingMaxRunDuration>;

  // Minimum number of cpus for the instance.
  MinNodeCpus?: number;

  /*
Specifies node affinities or anti-affinities
to determine which sole-tenant nodes your instances and managed instance
groups will use as host systems. Read more on sole-tenant node creation
[here](https://cloud.google.com/compute/docs/nodes/create-nodes).
Structure documented below.
*/
  NodeAffinities?: Array<Compute_getRegionInstanceTemplateSchedulingNodeAffinity>;

  /*
Allows instance to be preempted. This defaults to
false. Read more on this
[here](https://cloud.google.com/compute/docs/instances/preemptible).
*/
  Preemptible?: boolean;

  // Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  InstanceTerminationAction?: string;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeouts?: Array<Compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout>;

  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  MaintenanceInterval?: string;

  /*
Defines the maintenance behavior for this
instance.
*/
  OnHostMaintenance?: string;
}

export function Compute_getRegionInstanceTemplateScheduling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      "Specifies node affinities or anti-affinities\nto determine which sole-tenant nodes your instances and managed instance\ngroups will use as host systems. Read more on sole-tenant node creation\n[here](https://cloud.google.com/compute/docs/nodes/create-nodes).\nStructure documented below.",
      Compute_getRegionInstanceTemplateSchedulingNodeAffinity_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "LocalSsdRecoveryTimeouts",
      "Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.",
      Compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes(),
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
    new DynamicUIProps(
      InputType.String,
      "ProvisioningModel",
      "Describe the type of preemptible VM.",
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
      InputType.Array,
      "MaxRunDurations",
      "The timeout for new network connections to hosts.",
      Compute_getRegionInstanceTemplateSchedulingMaxRunDuration_GetTypes(),
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
      InputType.Bool,
      "Preemptible",
      "Allows instance to be preempted. This defaults to\nfalse. Read more on this\n[here](https://cloud.google.com/compute/docs/instances/preemptible).",
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
      "MaintenanceInterval",
      "Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC",
      [],
      true,
      false,
    ),
  ];
}
