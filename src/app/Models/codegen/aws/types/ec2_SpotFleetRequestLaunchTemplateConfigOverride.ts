import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements,
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements_GetTypes,
} from './ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements';

export interface ec2_SpotFleetRequestLaunchTemplateConfigOverride {
  // The type of instance to request.
  instanceType?: string;

  // The priority for the launch template override. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority.
  priority?: number;

  // The maximum spot bid for this override request.
  spotPrice?: string;

  // The subnet in which to launch the requested instance.
  subnetId?: string;

  // The capacity added to the fleet by a fulfilled request.
  weightedCapacity?: number;

  // The availability zone in which to place the request.
  availabilityZone?: string;

  // The instance requirements. See below.
  instanceRequirements?: ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements;
}

export function ec2_SpotFleetRequestLaunchTemplateConfigOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'instanceType',
      'The type of instance to request.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'priority',
      'The priority for the launch template override. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'spotPrice',
      'The maximum spot bid for this override request.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetId',
      'The subnet in which to launch the requested instance.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'weightedCapacity',
      'The capacity added to the fleet by a fulfilled request.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'availabilityZone',
      'The availability zone in which to place the request.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'instanceRequirements',
      'The instance requirements. See below.',
      () =>
        ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements_GetTypes(),
      false,
      true,
    ),
  ];
}
