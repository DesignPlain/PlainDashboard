import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceTemplateSchedulingNodeAffinity,
  Compute_InstanceTemplateSchedulingNodeAffinity_GetTypes,
} from "./Compute_InstanceTemplateSchedulingNodeAffinity";
import {
  Compute_InstanceTemplateSchedulingLocalSsdRecoveryTimeout,
  Compute_InstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from "./Compute_InstanceTemplateSchedulingLocalSsdRecoveryTimeout";
import {
  Compute_InstanceTemplateSchedulingMaxRunDuration,
  Compute_InstanceTemplateSchedulingMaxRunDuration_GetTypes,
} from "./Compute_InstanceTemplateSchedulingMaxRunDuration";

export interface Compute_InstanceTemplateScheduling {
  /*
Specifies whether the instance should be
automatically restarted if it is terminated by Compute Engine (not
terminated by a user). This defaults to true.
*/
  AutomaticRestart?: boolean;

  /*
Allows instance to be preempted. This defaults to
false. Read more on this
[here](https://cloud.google.com/compute/docs/instances/preemptible).
*/
  Preemptible?: boolean;

  // Minimum number of cpus for the instance.
  MinNodeCpus?: number;

  /*
Specifies node affinities or anti-affinities
to determine which sole-tenant nodes your instances and managed instance
groups will use as host systems. Read more on sole-tenant node creation
[here](https://cloud.google.com/compute/docs/nodes/create-nodes).
Structure documented below.
*/
  NodeAffinities?: Array<Compute_InstanceTemplateSchedulingNodeAffinity>;

  /*
Defines the maintenance behavior for this
instance.
*/
  OnHostMaintenance?: string;

  /*
Describe the type of preemptible VM. This field accepts the value `STANDARD` or `SPOT`. If the value is `STANDARD`, there will be no discount. If this   is set to `SPOT`,
`preemptible` should be `true` and `automatic_restart` should be
`false`. For more info about
`SPOT`, read [here](https://cloud.google.com/compute/docs/instances/spot)
*/
  ProvisioningModel?: string;

  // Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  InstanceTerminationAction?: string;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeouts?: Array<Compute_InstanceTemplateSchedulingLocalSsdRecoveryTimeout>;

  // Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.
  MaintenanceInterval?: string;

  /*
The duration of the instance. Instance will run and be terminated after then, the termination action could be defined in `instance_termination_action`. Only support `DELETE` `instance_termination_action` at this point. Structure is documented below.
<a name="nested_max_run_duration"></a>The `max_run_duration` block supports:
*/
  MaxRunDuration?: Compute_InstanceTemplateSchedulingMaxRunDuration;
}

export function Compute_InstanceTemplateScheduling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Preemptible",
      "Allows instance to be preempted. This defaults to\nfalse. Read more on this\n[here](https://cloud.google.com/compute/docs/instances/preemptible).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinNodeCpus",
      "Minimum number of cpus for the instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      "Specifies node affinities or anti-affinities\nto determine which sole-tenant nodes your instances and managed instance\ngroups will use as host systems. Read more on sole-tenant node creation\n[here](https://cloud.google.com/compute/docs/nodes/create-nodes).\nStructure documented below.",
      Compute_InstanceTemplateSchedulingNodeAffinity_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "LocalSsdRecoveryTimeouts",
      "Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.",
      Compute_InstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaintenanceInterval",
      "Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MaxRunDuration",
      'The duration of the instance. Instance will run and be terminated after then, the termination action could be defined in `instance_termination_action`. Only support `DELETE` `instance_termination_action` at this point. Structure is documented below.\n<a name="nested_max_run_duration"></a>The `max_run_duration` block supports:',
      Compute_InstanceTemplateSchedulingMaxRunDuration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutomaticRestart",
      "Specifies whether the instance should be\nautomatically restarted if it is terminated by Compute Engine (not\nterminated by a user). This defaults to true.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "OnHostMaintenance",
      "Defines the maintenance behavior for this\ninstance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProvisioningModel",
      "Describe the type of preemptible VM. This field accepts the value `STANDARD` or `SPOT`. If the value is `STANDARD`, there will be no discount. If this   is set to `SPOT`,\n`preemptible` should be `true` and `automatic_restart` should be\n`false`. For more info about\n`SPOT`, read [here](https://cloud.google.com/compute/docs/instances/spot)",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceTerminationAction",
      "Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)",
      [],
      false,
      true,
    ),
  ];
}
