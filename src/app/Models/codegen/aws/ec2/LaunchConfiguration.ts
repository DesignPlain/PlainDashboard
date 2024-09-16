import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_LaunchConfigurationEphemeralBlockDevice,
  ec2_LaunchConfigurationEphemeralBlockDevice_GetTypes,
} from '../types/ec2_LaunchConfigurationEphemeralBlockDevice';
import {
  ec2_LaunchConfigurationEbsBlockDevice,
  ec2_LaunchConfigurationEbsBlockDevice_GetTypes,
} from '../types/ec2_LaunchConfigurationEbsBlockDevice';
import {
  ec2_LaunchConfigurationMetadataOptions,
  ec2_LaunchConfigurationMetadataOptions_GetTypes,
} from '../types/ec2_LaunchConfigurationMetadataOptions';
import {
  ec2_LaunchConfigurationRootBlockDevice,
  ec2_LaunchConfigurationRootBlockDevice_GetTypes,
} from '../types/ec2_LaunchConfigurationRootBlockDevice';

export interface LaunchConfigurationArgs {
  // The name attribute of the IAM instance profile to associate with launched instances.
  iamInstanceProfile?: string;

  // The metadata options for the instance.
  metadataOptions?: ec2_LaunchConfigurationMetadataOptions;

  // Customize details about the root block device of the instance. See Block Devices below for details.
  rootBlockDevice?: ec2_LaunchConfigurationRootBlockDevice;

  // Associate a public ip address with an instance in a VPC.
  associatePublicIpAddress?: boolean;

  // Enables/disables detailed monitoring. This is enabled by default.
  enableMonitoring?: boolean;

  // The tenancy of the instance. Valid values are `default` or `dedicated`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html) for more details.
  placementTenancy?: string;

  // A list of associated security group IDS.
  securityGroups?: Array<string>;

  // The maximum price to use for reserving spot instances.
  spotPrice?: string;

  // The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.
  userData?: string;

  // Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.
  userDataBase64?: string;

  /*
The size of instance to launch.

The following arguments are optional:
*/
  instanceType?: string;

  // The name of the launch configuration. If you leave this blank, this provider will auto-generate a unique name. Conflicts with `name_prefix`.
  name?: string;

  // The key name that should be used for the instance.
  keyName?: string;

  // Customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details.
  ephemeralBlockDevices?: Array<ec2_LaunchConfigurationEphemeralBlockDevice>;

  // The EC2 image ID to launch.
  imageId?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // Additional EBS block devices to attach to the instance. See Block Devices below for details.
  ebsBlockDevices?: Array<ec2_LaunchConfigurationEbsBlockDevice>;

  // If true, the launched EC2 instance will be EBS-optimized.
  ebsOptimized?: boolean;
}
export class LaunchConfiguration extends DS_Resource {
  // Customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details.
  public ephemeralBlockDevices?: Array<ec2_LaunchConfigurationEphemeralBlockDevice>;

  /*
The size of instance to launch.

The following arguments are optional:
*/
  public instanceType?: string;

  // The Amazon Resource Name of the launch configuration.
  public arn?: string;

  // If true, the launched EC2 instance will be EBS-optimized.
  public ebsOptimized?: boolean;

  // Enables/disables detailed monitoring. This is enabled by default.
  public enableMonitoring?: boolean;

  // The key name that should be used for the instance.
  public keyName?: string;

  // Customize details about the root block device of the instance. See Block Devices below for details.
  public rootBlockDevice?: ec2_LaunchConfigurationRootBlockDevice;

  // Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.
  public userDataBase64?: string;

  // Associate a public ip address with an instance in a VPC.
  public associatePublicIpAddress?: boolean;

  // Additional EBS block devices to attach to the instance. See Block Devices below for details.
  public ebsBlockDevices?: Array<ec2_LaunchConfigurationEbsBlockDevice>;

  // The tenancy of the instance. Valid values are `default` or `dedicated`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html) for more details.
  public placementTenancy?: string;

  // The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.
  public userData?: string;

  // The name attribute of the IAM instance profile to associate with launched instances.
  public iamInstanceProfile?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // The name of the launch configuration. If you leave this blank, this provider will auto-generate a unique name. Conflicts with `name_prefix`.
  public name?: string;

  // A list of associated security group IDS.
  public securityGroups?: Array<string>;

  // The maximum price to use for reserving spot instances.
  public spotPrice?: string;

  // The EC2 image ID to launch.
  public imageId?: string;

  // The metadata options for the instance.
  public metadataOptions?: ec2_LaunchConfigurationMetadataOptions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'metadataOptions',
        'The metadata options for the instance.',
        () => ec2_LaunchConfigurationMetadataOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'rootBlockDevice',
        'Customize details about the root block device of the instance. See Block Devices below for details.',
        () => ec2_LaunchConfigurationRootBlockDevice_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'placementTenancy',
        "The tenancy of the instance. Valid values are `default` or `dedicated`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html) for more details.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityGroups',
        'A list of associated security group IDS.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceType',
        'The size of instance to launch.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'keyName',
        'The key name that should be used for the instance.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableMonitoring',
        'Enables/disables detailed monitoring. This is enabled by default.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'userData',
        'The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the launch configuration. If you leave this blank, this provider will auto-generate a unique name. Conflicts with `name_prefix`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ephemeralBlockDevices',
        'Customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details.',
        () => ec2_LaunchConfigurationEphemeralBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'associatePublicIpAddress',
        'Associate a public ip address with an instance in a VPC.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'spotPrice',
        'The maximum price to use for reserving spot instances.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'ebsOptimized',
        'If true, the launched EC2 instance will be EBS-optimized.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'iamInstanceProfile',
        'The name attribute of the IAM instance profile to associate with launched instances.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'userDataBase64',
        'Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'imageId',
        'The EC2 image ID to launch.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ebsBlockDevices',
        'Additional EBS block devices to attach to the instance. See Block Devices below for details.',
        () => ec2_LaunchConfigurationEbsBlockDevice_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
