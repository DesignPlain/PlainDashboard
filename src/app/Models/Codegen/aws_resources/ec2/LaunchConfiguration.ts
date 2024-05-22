import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_LaunchConfigurationEbsBlockDevice,
  ec2_LaunchConfigurationEbsBlockDevice_GetTypes,
} from "../types/ec2_LaunchConfigurationEbsBlockDevice";
import {
  ec2_LaunchConfigurationEphemeralBlockDevice,
  ec2_LaunchConfigurationEphemeralBlockDevice_GetTypes,
} from "../types/ec2_LaunchConfigurationEphemeralBlockDevice";
import {
  ec2_LaunchConfigurationRootBlockDevice,
  ec2_LaunchConfigurationRootBlockDevice_GetTypes,
} from "../types/ec2_LaunchConfigurationRootBlockDevice";
import {
  ec2_LaunchConfigurationMetadataOptions,
  ec2_LaunchConfigurationMetadataOptions_GetTypes,
} from "../types/ec2_LaunchConfigurationMetadataOptions";

export interface LaunchConfigurationArgs {
  // Enables/disables detailed monitoring. This is enabled by default.
  enableMonitoring?: boolean;

  // The key name that should be used for the instance.
  keyName?: string;

  // The metadata options for the instance.
  metadataOptions?: ec2_LaunchConfigurationMetadataOptions;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // The tenancy of the instance. Valid values are `default` or `dedicated`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html) for more details.
  placementTenancy?: string;

  // The maximum price to use for reserving spot instances.
  spotPrice?: string;

  // Associate a public ip address with an instance in a VPC.
  associatePublicIpAddress?: boolean;

  /*
The size of instance to launch.

The following arguments are optional:
*/
  instanceType?: string;

  // A list of associated security group IDS.
  securityGroups?: Array<string>;

  // If true, the launched EC2 instance will be EBS-optimized.
  ebsOptimized?: boolean;

  // The name of the launch configuration. If you leave this blank, this provider will auto-generate a unique name. Conflicts with `name_prefix`.
  name?: string;

  // Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.
  userDataBase64?: string;

  // Additional EBS block devices to attach to the instance. See Block Devices below for details.
  ebsBlockDevices?: Array<ec2_LaunchConfigurationEbsBlockDevice>;

  // Customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details.
  ephemeralBlockDevices?: Array<ec2_LaunchConfigurationEphemeralBlockDevice>;

  // The name attribute of the IAM instance profile to associate with launched instances.
  iamInstanceProfile?: string;

  // The EC2 image ID to launch.
  imageId?: string;

  // Customize details about the root block device of the instance. See Block Devices below for details.
  rootBlockDevice?: ec2_LaunchConfigurationRootBlockDevice;

  // The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.
  userData?: string;
}
export class LaunchConfiguration extends Resource {
  // The Amazon Resource Name of the launch configuration.
  public arn?: string;

  // Additional EBS block devices to attach to the instance. See Block Devices below for details.
  public ebsBlockDevices?: Array<ec2_LaunchConfigurationEbsBlockDevice>;

  // The key name that should be used for the instance.
  public keyName?: string;

  // The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.
  public userData?: string;

  // The maximum price to use for reserving spot instances.
  public spotPrice?: string;

  // Enables/disables detailed monitoring. This is enabled by default.
  public enableMonitoring?: boolean;

  // The EC2 image ID to launch.
  public imageId?: string;

  // The name of the launch configuration. If you leave this blank, this provider will auto-generate a unique name. Conflicts with `name_prefix`.
  public name?: string;

  // Customize details about the root block device of the instance. See Block Devices below for details.
  public rootBlockDevice?: ec2_LaunchConfigurationRootBlockDevice;

  // Associate a public ip address with an instance in a VPC.
  public associatePublicIpAddress?: boolean;

  // The name attribute of the IAM instance profile to associate with launched instances.
  public iamInstanceProfile?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.
  public userDataBase64?: string;

  // The tenancy of the instance. Valid values are `default` or `dedicated`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html) for more details.
  public placementTenancy?: string;

  // A list of associated security group IDS.
  public securityGroups?: Array<string>;

  // If true, the launched EC2 instance will be EBS-optimized.
  public ebsOptimized?: boolean;

  // Customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details.
  public ephemeralBlockDevices?: Array<ec2_LaunchConfigurationEphemeralBlockDevice>;

  /*
The size of instance to launch.

The following arguments are optional:
*/
  public instanceType?: string;

  // The metadata options for the instance.
  public metadataOptions?: ec2_LaunchConfigurationMetadataOptions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "ebsBlockDevices",
        "Additional EBS block devices to attach to the instance. See Block Devices below for details.",
        ec2_LaunchConfigurationEbsBlockDevice_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamInstanceProfile",
        "The name attribute of the IAM instance profile to associate with launched instances.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyName",
        "The key name that should be used for the instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "metadataOptions",
        "The metadata options for the instance.",
        ec2_LaunchConfigurationMetadataOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "placementTenancy",
        "The tenancy of the instance. Valid values are `default` or `dedicated`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html) for more details.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        "The size of instance to launch.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ebsOptimized",
        "If true, the launched EC2 instance will be EBS-optimized.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the launch configuration. If you leave this blank, this provider will auto-generate a unique name. Conflicts with `name_prefix`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageId",
        "The EC2 image ID to launch.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "associatePublicIpAddress",
        "Associate a public ip address with an instance in a VPC.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroups",
        "A list of associated security group IDS.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "spotPrice",
        "The maximum price to use for reserving spot instances.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userData",
        "The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableMonitoring",
        "Enables/disables detailed monitoring. This is enabled by default.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userDataBase64",
        "Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ephemeralBlockDevices",
        'Customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details.',
        ec2_LaunchConfigurationEphemeralBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rootBlockDevice",
        "Customize details about the root block device of the instance. See Block Devices below for details.",
        ec2_LaunchConfigurationRootBlockDevice_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
