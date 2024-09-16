import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplate,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplate_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyLaunchTemplate';
import {
  autoscaling_GroupMixedInstancesPolicyInstancesDistribution,
  autoscaling_GroupMixedInstancesPolicyInstancesDistribution_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyInstancesDistribution';

export interface autoscaling_GroupMixedInstancesPolicy {
  // Nested argument containing settings on how to mix on-demand and Spot instances in the Auto Scaling group. Defined below.
  instancesDistribution?: autoscaling_GroupMixedInstancesPolicyInstancesDistribution;

  // Nested argument containing launch template settings along with the overrides to specify multiple instance types and weights. Defined below.
  launchTemplate?: autoscaling_GroupMixedInstancesPolicyLaunchTemplate;
}

export function autoscaling_GroupMixedInstancesPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'instancesDistribution',
      'Nested argument containing settings on how to mix on-demand and Spot instances in the Auto Scaling group. Defined below.',
      () =>
        autoscaling_GroupMixedInstancesPolicyInstancesDistribution_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'launchTemplate',
      'Nested argument containing launch template settings along with the overrides to specify multiple instance types and weights. Defined below.',
      () => autoscaling_GroupMixedInstancesPolicyLaunchTemplate_GetTypes(),
      true,
      false,
    ),
  ];
}
