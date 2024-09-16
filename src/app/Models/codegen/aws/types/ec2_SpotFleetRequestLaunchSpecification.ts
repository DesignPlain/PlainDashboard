import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_SpotFleetRequestLaunchSpecificationEphemeralBlockDevice,
  ec2_SpotFleetRequestLaunchSpecificationEphemeralBlockDevice_GetTypes,
} from './ec2_SpotFleetRequestLaunchSpecificationEphemeralBlockDevice';
import {
  ec2_SpotFleetRequestLaunchSpecificationRootBlockDevice,
  ec2_SpotFleetRequestLaunchSpecificationRootBlockDevice_GetTypes,
} from './ec2_SpotFleetRequestLaunchSpecificationRootBlockDevice';
import {
  ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice,
  ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice_GetTypes,
} from './ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice';

export interface ec2_SpotFleetRequestLaunchSpecification {
  //
  placementTenancy?: string;

  //
  rootBlockDevices?: Array<ec2_SpotFleetRequestLaunchSpecificationRootBlockDevice>;

  //
  userData?: string;

  //
  associatePublicIpAddress?: boolean;

  // The availability zone in which to place the request.
  availabilityZone?: string;

  //
  ebsBlockDevices?: Array<ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice>;

  //
  ebsOptimized?: boolean;

  //
  iamInstanceProfileArn?: string;

  // The subnet in which to launch the requested instance.
  subnetId?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The capacity added to the fleet by a fulfilled request.
  weightedCapacity?: string;

  //
  iamInstanceProfile?: string;

  //
  keyName?: string;

  //
  monitoring?: boolean;

  // The maximum bid price per unit hour.
  spotPrice?: string;

  //
  vpcSecurityGroupIds?: Array<string>;

  //
  ami?: string;

  //
  ephemeralBlockDevices?: Array<ec2_SpotFleetRequestLaunchSpecificationEphemeralBlockDevice>;

  // The type of instance to request.
  instanceType?: string;

  //
  placementGroup?: string;
}

export function ec2_SpotFleetRequestLaunchSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'ebsBlockDevices',
      '',
      () => ec2_SpotFleetRequestLaunchSpecificationEbsBlockDevice_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'iamInstanceProfile',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'placementGroup',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'ebsOptimized',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'tags',
      'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'weightedCapacity',
      'The capacity added to the fleet by a fulfilled request.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, 'keyName', '', () => [], false, true),
    new DynamicUIProps(
      InputType.Array,
      'vpcSecurityGroupIds',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'placementTenancy',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'associatePublicIpAddress',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'availabilityZone',
      'The availability zone in which to place the request.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, 'ami', '', () => [], true, true),
    new DynamicUIProps(
      InputType.Bool,
      'monitoring',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'spotPrice',
      'The maximum bid price per unit hour.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceType',
      'The type of instance to request.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, 'userData', '', () => [], false, true),
    new DynamicUIProps(
      InputType.String,
      'iamInstanceProfileArn',
      '',
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
      InputType.Array,
      'rootBlockDevices',
      '',
      () => ec2_SpotFleetRequestLaunchSpecificationRootBlockDevice_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ephemeralBlockDevices',
      '',
      () =>
        ec2_SpotFleetRequestLaunchSpecificationEphemeralBlockDevice_GetTypes(),
      false,
      true,
    ),
  ];
}
