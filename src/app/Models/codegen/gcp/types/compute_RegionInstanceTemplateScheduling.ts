import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout,
  compute_RegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes,
} from './compute_RegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout';
import {
  compute_RegionInstanceTemplateSchedulingMaxRunDuration,
  compute_RegionInstanceTemplateSchedulingMaxRunDuration_GetTypes,
} from './compute_RegionInstanceTemplateSchedulingMaxRunDuration';
import {
  compute_RegionInstanceTemplateSchedulingNodeAffinity,
  compute_RegionInstanceTemplateSchedulingNodeAffinity_GetTypes,
} from './compute_RegionInstanceTemplateSchedulingNodeAffinity';

export interface compute_RegionInstanceTemplateScheduling {
  // Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.
  maintenanceInterval?: string;

  /*
Specifies node affinities or anti-affinities
to determine which sole-tenant nodes your instances and managed instance
groups will use as host systems. Read more on sole-tenant node creation
[here](https://cloud.google.com/compute/docs/nodes/create-nodes).
Structure documented below.
*/
  nodeAffinities?: Array<compute_RegionInstanceTemplateSchedulingNodeAffinity>;

  /*
Specifies the maximum amount of time a Local Ssd Vm should wait while
  recovery of the Local Ssd state is attempted. Its value should be in
  between 0 and 168 hours with hour granularity and the default value being 1
  hour.
*/
  localSsdRecoveryTimeouts?: Array<compute_RegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout>;

  // The duration of the instance. Instance will run and be terminated after then, the termination action could be defined in `instance_termination_action`. Only support `DELETE` `instance_termination_action` at this point. Structure is documented below.
  maxRunDuration?: compute_RegionInstanceTemplateSchedulingMaxRunDuration;

  // Minimum number of cpus for the instance.
  minNodeCpus?: number;

  /*
Defines the maintenance behavior for this
instance.
*/
  onHostMaintenance?: string;

  /*
Allows instance to be preempted. This defaults to
false. Read more on this
[here](https://cloud.google.com/compute/docs/instances/preemptible).
*/
  preemptible?: boolean;

  /*
Describe the type of preemptible VM. This field accepts the value `STANDARD` or `SPOT`. If the value is `STANDARD`, there will be no discount. If this   is set to `SPOT`, 
`preemptible` should be `true` and `automatic_restart` should be
`false`. For more info about
`SPOT`, read [here](https://cloud.google.com/compute/docs/instances/spot)
*/
  provisioningModel?: string;

  /*
Specifies whether the instance should be
automatically restarted if it is terminated by Compute Engine (not
terminated by a user). This defaults to true.
*/
  automaticRestart?: boolean;

  // Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)
  instanceTerminationAction?: string;
}

export function compute_RegionInstanceTemplateScheduling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'maintenanceInterval',
      'Specifies the frequency of planned maintenance events. The accepted values are: `PERIODIC`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'localSsdRecoveryTimeouts',
      'Specifies the maximum amount of time a Local Ssd Vm should wait while\n  recovery of the Local Ssd state is attempted. Its value should be in\n  between 0 and 168 hours with hour granularity and the default value being 1\n  hour.',
      () =>
        compute_RegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'maxRunDuration',
      'The duration of the instance. Instance will run and be terminated after then, the termination action could be defined in `instance_termination_action`. Only support `DELETE` `instance_termination_action` at this point. Structure is documented below.',
      () => compute_RegionInstanceTemplateSchedulingMaxRunDuration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minNodeCpus',
      'Minimum number of cpus for the instance.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'onHostMaintenance',
      'Defines the maintenance behavior for this\ninstance.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'automaticRestart',
      'Specifies whether the instance should be\nautomatically restarted if it is terminated by Compute Engine (not\nterminated by a user). This defaults to true.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'nodeAffinities',
      'Specifies node affinities or anti-affinities\nto determine which sole-tenant nodes your instances and managed instance\ngroups will use as host systems. Read more on sole-tenant node creation\n[here](https://cloud.google.com/compute/docs/nodes/create-nodes).\nStructure documented below.',
      () => compute_RegionInstanceTemplateSchedulingNodeAffinity_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'preemptible',
      'Allows instance to be preempted. This defaults to\nfalse. Read more on this\n[here](https://cloud.google.com/compute/docs/instances/preemptible).',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'provisioningModel',
      'Describe the type of preemptible VM. This field accepts the value `STANDARD` or `SPOT`. If the value is `STANDARD`, there will be no discount. If this   is set to `SPOT`, \n`preemptible` should be `true` and `automatic_restart` should be\n`false`. For more info about\n`SPOT`, read [here](https://cloud.google.com/compute/docs/instances/spot)',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceTerminationAction',
      'Describe the type of termination action for `SPOT` VM. Can be `STOP` or `DELETE`.  Read more on [here](https://cloud.google.com/compute/docs/instances/create-use-spot)',
      () => [],
      false,
      true,
    ),
  ];
}
