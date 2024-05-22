import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getRegionInstanceTemplateSchedulingNodeAffinity,
  compute_getRegionInstanceTemplateSchedulingNodeAffinity_GetTypes,
} from "./compute_getRegionInstanceTemplateSchedulingNodeAffinity";
import {
  compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout,
  compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from "./compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout";
import {
  compute_getRegionInstanceTemplateSchedulingMaxRunDuration,
  compute_getRegionInstanceTemplateSchedulingMaxRunDuration_GetTypes,
} from "./compute_getRegionInstanceTemplateSchedulingMaxRunDuration";

export interface compute_getRegionInstanceTemplateScheduling {
  // Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  instanceTerminationAction?: string;

  // The timeout for new network connections to hosts.
  maxRunDurations?: Array<compute_getRegionInstanceTemplateSchedulingMaxRunDuration>;

  /*
Specifies node affinities or anti-affinities
to determine which sole-tenant nodes your instances and managed instance
groups will use as host systems. Read more on sole-tenant node creation
[here](https://cloud.google.com/compute/docs/nodes/create-nodes).
Structure documented below.
*/
  nodeAffinities?: Array<compute_getRegionInstanceTemplateSchedulingNodeAffinity>;

  /*
Defines the maintenance behavior for this
instance.
*/
  onHostMaintenance?: string;

  // Describe the type of preemptible VM.
  provisioningModel?: string;

  /*
Specifies whether the instance should be
automatically restarted if it is terminated by Compute Engine (not
terminated by a user). This defaults to true.
*/
  automaticRestart?: boolean;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  localSsdRecoveryTimeouts?: Array<compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout>;

  // Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  maintenanceInterval?: string;

  // Minimum number of cpus for the instance.
  minNodeCpus?: number;

  /*
Allows instance to be preempted. This defaults to
false. Read more on this
[here](https://cloud.google.com/compute/docs/instances/preemptible).
*/
  preemptible?: boolean;
}

export function compute_getRegionInstanceTemplateScheduling_GetTypes(): DynamicUIProps[] {
  return [
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
      "onHostMaintenance",
      "Defines the maintenance behavior for this\ninstance.",
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
    new DynamicUIProps(
      InputType.Bool,
      "automaticRestart",
      "Specifies whether the instance should be\nautomatically restarted if it is terminated by Compute Engine (not\nterminated by a user). This defaults to true.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "localSsdRecoveryTimeouts",
      "Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.",
      compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "maxRunDurations",
      "The timeout for new network connections to hosts.",
      compute_getRegionInstanceTemplateSchedulingMaxRunDuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nodeAffinities",
      "Specifies node affinities or anti-affinities\nto determine which sole-tenant nodes your instances and managed instance\ngroups will use as host systems. Read more on sole-tenant node creation\n[here](https://cloud.google.com/compute/docs/nodes/create-nodes).\nStructure documented below.",
      compute_getRegionInstanceTemplateSchedulingNodeAffinity_GetTypes(),
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
      InputType.Number,
      "minNodeCpus",
      "Minimum number of cpus for the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preemptible",
      "Allows instance to be preempted. This defaults to\nfalse. Read more on this\n[here](https://cloud.google.com/compute/docs/instances/preemptible).",
      [],
      true,
      false,
    ),
  ];
}
