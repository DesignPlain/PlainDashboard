import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceSchedulingMaxRunDuration,
  Compute_InstanceSchedulingMaxRunDuration_GetTypes,
} from "./Compute_InstanceSchedulingMaxRunDuration";
import {
  Compute_InstanceSchedulingNodeAffinity,
  Compute_InstanceSchedulingNodeAffinity_GetTypes,
} from "./Compute_InstanceSchedulingNodeAffinity";
import {
  Compute_InstanceSchedulingLocalSsdRecoveryTimeout,
  Compute_InstanceSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from "./Compute_InstanceSchedulingLocalSsdRecoveryTimeout";

export interface Compute_InstanceScheduling {
  // The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node.
  MinNodeCpus?: number;

  /*
Specifies node affinities or anti-affinities
to determine which sole-tenant nodes your instances and managed instance
groups will use as host systems. Read more on sole-tenant node creation
[here](https://cloud.google.com/compute/docs/nodes/create-nodes).
Structure documented below.
*/
  NodeAffinities?: Array<Compute_InstanceSchedulingNodeAffinity>;

  /*
Specifies if the instance is preemptible.
If this field is set to true, then `automatic_restart` must be
set to false.  Defaults to false.
*/
  Preemptible?: boolean;

  /*
Describe the type of preemptible VM. This field accepts the value `STANDARD` or `SPOT`. If the value is `STANDARD`, there will be no discount. If this   is set to `SPOT`,
`preemptible` should be `true` and `automatic_restart` should be
`false`. For more info about
`SPOT`, read [here](https://cloud.google.com/compute/docs/instances/spot)
*/
  ProvisioningModel?: string;

  /*
Specifies if the instance should be
restarted if it was terminated by Compute Engine (not a user).
Defaults to true.
*/
  AutomaticRestart?: boolean;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  LocalSsdRecoveryTimeout?: Compute_InstanceSchedulingLocalSsdRecoveryTimeout;

  // Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.
  MaintenanceInterval?: string;

  // Describe the type of termination action for VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  InstanceTerminationAction?: string;

  /*
The duration of the instance. Instance will run and be terminated after then, the termination action could be defined in `instance_termination_action`. Only support `DELETE` `instance_termination_action` at this point. Structure is documented below.
<a name="nested_max_run_duration"></a>The `max_run_duration` block supports:
*/
  MaxRunDuration?: Compute_InstanceSchedulingMaxRunDuration;

  /*
Describes maintenance behavior for the
instance. Can be MIGRATE or TERMINATE, for more info, read
[here](https://cloud.google.com/compute/docs/instances/setting-instance-scheduling-options).
*/
  OnHostMaintenance?: string;
}

export function Compute_InstanceScheduling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "MaxRunDuration",
      'The duration of the instance. Instance will run and be terminated after then, the termination action could be defined in `instance_termination_action`. Only support `DELETE` `instance_termination_action` at this point. Structure is documented below.\n<a name="nested_max_run_duration"></a>The `max_run_duration` block supports:',
      Compute_InstanceSchedulingMaxRunDuration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "OnHostMaintenance",
      "Describes maintenance behavior for the\ninstance. Can be MIGRATE or TERMINATE, for more info, read\n[here](https://cloud.google.com/compute/docs/instances/setting-instance-scheduling-options).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinNodeCpus",
      "The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodeAffinities",
      "Specifies node affinities or anti-affinities\nto determine which sole-tenant nodes your instances and managed instance\ngroups will use as host systems. Read more on sole-tenant node creation\n[here](https://cloud.google.com/compute/docs/nodes/create-nodes).\nStructure documented below.",
      Compute_InstanceSchedulingNodeAffinity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Preemptible",
      "Specifies if the instance is preemptible.\nIf this field is set to true, then `automatic_restart` must be\nset to false.  Defaults to false.",
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
      InputType.Bool,
      "AutomaticRestart",
      "Specifies if the instance should be\nrestarted if it was terminated by Compute Engine (not a user).\nDefaults to true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaintenanceInterval",
      "Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LocalSsdRecoveryTimeout",
      "Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.",
      Compute_InstanceSchedulingLocalSsdRecoveryTimeout_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceTerminationAction",
      "Describe the type of termination action for VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)",
      [],
      false,
      false,
    ),
  ];
}
