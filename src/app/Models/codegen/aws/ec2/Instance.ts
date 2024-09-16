import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_InstanceNetworkInterface,
  ec2_InstanceNetworkInterface_GetTypes,
} from '../types/ec2_InstanceNetworkInterface';
import {
  ec2_InstanceEbsBlockDevice,
  ec2_InstanceEbsBlockDevice_GetTypes,
} from '../types/ec2_InstanceEbsBlockDevice';
import {
  ec2_InstanceRootBlockDevice,
  ec2_InstanceRootBlockDevice_GetTypes,
} from '../types/ec2_InstanceRootBlockDevice';
import {
  ec2_InstanceCapacityReservationSpecification,
  ec2_InstanceCapacityReservationSpecification_GetTypes,
} from '../types/ec2_InstanceCapacityReservationSpecification';
import {
  ec2_InstanceEphemeralBlockDevice,
  ec2_InstanceEphemeralBlockDevice_GetTypes,
} from '../types/ec2_InstanceEphemeralBlockDevice';
import {
  ec2_InstanceInstanceMarketOptions,
  ec2_InstanceInstanceMarketOptions_GetTypes,
} from '../types/ec2_InstanceInstanceMarketOptions';
import {
  ec2_InstancePrivateDnsNameOptions,
  ec2_InstancePrivateDnsNameOptions_GetTypes,
} from '../types/ec2_InstancePrivateDnsNameOptions';
import {
  ec2_InstanceMaintenanceOptions,
  ec2_InstanceMaintenanceOptions_GetTypes,
} from '../types/ec2_InstanceMaintenanceOptions';
import {
  ec2_InstanceLaunchTemplate,
  ec2_InstanceLaunchTemplate_GetTypes,
} from '../types/ec2_InstanceLaunchTemplate';
import {
  ec2_InstanceEnclaveOptions,
  ec2_InstanceEnclaveOptions_GetTypes,
} from '../types/ec2_InstanceEnclaveOptions';
import {
  ec2_InstanceMetadataOptions,
  ec2_InstanceMetadataOptions_GetTypes,
} from '../types/ec2_InstanceMetadataOptions';
import {
  ec2_InstanceCreditSpecification,
  ec2_InstanceCreditSpecification_GetTypes,
} from '../types/ec2_InstanceCreditSpecification';
import {
  ec2_InstanceCpuOptions,
  ec2_InstanceCpuOptions_GetTypes,
} from '../types/ec2_InstanceCpuOptions';

export interface InstanceArgs {
  // List of secondary private IPv4 addresses to assign to the instance's primary network interface (eth0) in a VPC. Can only be assigned to the primary network interface (eth0) attached at instance creation, not a pre-existing network interface i.e., referenced in a `network_interface` block. Refer to the [Elastic network interfaces documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI) to see the maximum number of private IP addresses allowed per instance type.
  secondaryPrivateIps?: Array<string>;

  // List of security group IDs to associate with.
  vpcSecurityGroupIds?: Array<string>;

  // Enable Nitro Enclaves on launched instances. See Enclave Options below for more details.
  enclaveOptions?: ec2_InstanceEnclaveOptions;

  // IAM Instance Profile to launch the instance with. Specified as the name of the Instance Profile. Ensure your credentials have the correct permission to assign the instance profile according to the [EC2 documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html#roles-usingrole-ec2instance-permissions), notably `iam:PassRole`.
  iamInstanceProfile?: string;

  // Instance type to use for the instance. Required unless `launch_template` is specified and the Launch Template specifies an instance type. If an instance type is specified in the Launch Template, setting `instance_type` will override the instance type specified in the Launch Template. Updates to this field will trigger a stop/start of the EC2 instance.
  instanceType?: string;

  // Customize the metadata options of the instance. See Metadata Options below for more details.
  metadataOptions?: ec2_InstanceMetadataOptions;

  // Number of the partition the instance is in. Valid only if the `aws.ec2.PlacementGroup` resource's `strategy` argument is set to `"partition"`.
  placementPartitionNumber?: number;

  // Configuration block to customize details about the root block device of the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a list containing one object.
  rootBlockDevice?: ec2_InstanceRootBlockDevice;

  // Controls if traffic is routed to the instance when the destination address does not match the instance. Used for NAT or VPNs. Defaults true.
  sourceDestCheck?: boolean;

  // VPC Subnet ID to launch in.
  subnetId?: string;

  /*
Describes an instance's Capacity Reservation targeting option. See Capacity Reservation Specification below for more details.

> --NOTE:-- Changing `cpu_core_count` and/or `cpu_threads_per_core` will cause the resource to be destroyed and re-created.
*/
  capacityReservationSpecification?: ec2_InstanceCapacityReservationSpecification;

  // One or more configuration blocks to customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a set of objects.
  ephemeralBlockDevices?: Array<ec2_InstanceEphemeralBlockDevice>;

  // Specify one or more IPv6 addresses from the range of the subnet to associate with the primary network interface
  ipv6Addresses?: Array<string>;

  // Key name of the Key Pair to use for the instance; which can be managed using the `aws.ec2.KeyPair` resource.
  keyName?: string;

  // Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.
  userDataBase64?: string;

  // When used in combination with `user_data` or `user_data_base64` will trigger a destroy and recreate when set to `true`. Defaults to `false` if not set.
  userDataReplaceOnChange?: boolean;

  // AZ to start the instance in.
  availabilityZone?: string;

  // If set to 1, hyperthreading is disabled on the launched instance. Defaults to 2 if not set. See [Optimizing CPU Options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) for more information.
  cpuThreadsPerCore?: number;

  // Configuration block for customizing the credit specification of the instance. See Credit Specification below for more details. This provider will only perform drift detection of its value when present in a configuration. Removing this configuration on existing instances will only stop managing it. It will not change the configuration back to the default for the instance type.
  creditSpecification?: ec2_InstanceCreditSpecification;

  // Describes the market (purchasing) option for the instances. See Market Options below for details on attributes.
  instanceMarketOptions?: ec2_InstanceInstanceMarketOptions;

  // Customize network interfaces to be attached at instance boot time. See Network Interfaces below for more details.
  networkInterfaces?: Array<ec2_InstanceNetworkInterface>;

  // User data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.
  userData?: string;

  // AMI to use for the instance. Required unless `launch_template` is specified and the Launch Template specifes an AMI. If an AMI is specified in the Launch Template, setting `ami` will override the AMI specified in the Launch Template.
  ami?: string;

  // Sets the number of CPU cores for an instance. This option is only supported on creation of instance type that support CPU Options [CPU Cores and Threads Per CPU Core Per Instance Type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html#cpu-options-supported-instances-values) - specifying this option for unsupported instance types will return an error from the EC2 API.
  cpuCoreCount?: number;

  // The CPU options for the instance. See CPU Options below for more details.
  cpuOptions?: ec2_InstanceCpuOptions;

  // One or more configuration blocks with additional EBS block devices to attach to the instance. Block device configurations only apply on resource creation. See Block Devices below for details on attributes and drift detection. When accessing this as an attribute reference, it is a set of objects.
  ebsBlockDevices?: Array<ec2_InstanceEbsBlockDevice>;

  // Map of tags to assign to the resource. Note that these tags apply to the instance and not block storage devices. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // If true, wait for password data to become available and retrieve it. Useful for getting the administrator password for instances running Microsoft Windows. The password data is exported to the `password_data` attribute. See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information.
  getPasswordData?: boolean;

  // If true, the launched EC2 instance will support hibernation.
  hibernation?: boolean;

  // If true, the launched EC2 instance will have detailed monitoring enabled. (Available since v0.6.0)
  monitoring?: boolean;

  // Options for the instance hostname. The default values are inherited from the subnet. See Private DNS Name Options below for more details.
  privateDnsNameOptions?: ec2_InstancePrivateDnsNameOptions;

  /*
List of security group names to associate with.

> --NOTE:-- If you are creating Instances in a VPC, use `vpc_security_group_ids` instead.
*/
  securityGroups?: Array<string>;

  /*
Map of tags to assign, at instance-creation time, to root and EBS volumes.

> --NOTE:-- Do not use `volume_tags` if you plan to manage block device tags outside the `aws.ec2.Instance` configuration, such as using `tags` in an `aws.ebs.Volume` resource attached via `aws.ec2.VolumeAttachment`. Doing so will result in resource cycling and inconsistent behavior.
*/
  volumeTags?: Map<string, string>;

  // Maintenance and recovery options for the instance. See Maintenance Options below for more details.
  maintenanceOptions?: ec2_InstanceMaintenanceOptions;

  // Private IP address to associate with the instance in a VPC.
  privateIp?: string;

  // Whether to associate a public IP address with an instance in a VPC.
  associatePublicIpAddress?: boolean;

  // If true, enables [EC2 Instance Stop Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection).
  disableApiStop?: boolean;

  // If true, the launched EC2 instance will be EBS-optimized. Note that if this is not set on an instance type that is optimized by default then this will show as disabled but if the instance type is optimized by default then there is no need to set this and there is no effect to disabling it. See the [EBS Optimized section](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html) of the AWS User Guide for more information.
  ebsOptimized?: boolean;

  // Specifies a Launch Template to configure the instance. Parameters configured on this resource will override the corresponding parameters in the Launch Template. See Launch Template Specification below for more details.
  launchTemplate?: ec2_InstanceLaunchTemplate;

  // Number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet.
  ipv6AddressCount?: number;

  // Placement Group to start the instance in.
  placementGroup?: string;

  // Tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of `dedicated` runs on single-tenant hardware. The `host` tenancy is not supported for the import-instance command. Valid values are `default`, `dedicated`, and `host`.
  tenancy?: string;

  // If true, enables [EC2 Instance Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingDisableAPITermination).
  disableApiTermination?: boolean;

  // ID of a dedicated host that the instance will be assigned to. Use when an instance is to be launched on a specific dedicated host.
  hostId?: string;

  // ARN of the host resource group in which to launch the instances. If you specify an ARN, omit the `tenancy` parameter or set it to `host`.
  hostResourceGroupArn?: string;

  // Shutdown behavior for the instance. Amazon defaults this to `stop` for EBS-backed instances and `terminate` for instance-store instances. Cannot be set on instance-store instances. See [Shutdown Behavior](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingInstanceInitiatedShutdownBehavior) for more information.
  instanceInitiatedShutdownBehavior?: string;
}
export class Instance extends DS_Resource {
  // Base-64 encoded encrypted password data for the instance. Useful for getting the administrator password for instances running Microsoft Windows. This attribute is only exported if `get_password_data` is true. Note that this encrypted value will be stored in the state file, as with all exported attributes. See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information.
  public passwordData?: string;

  // Sets the number of CPU cores for an instance. This option is only supported on creation of instance type that support CPU Options [CPU Cores and Threads Per CPU Core Per Instance Type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html#cpu-options-supported-instances-values) - specifying this option for unsupported instance types will return an error from the EC2 API.
  public cpuCoreCount?: number;

  // Private DNS name assigned to the instance. Can only be used inside the Amazon EC2, and only available if you've enabled DNS hostnames for your VPC.
  public privateDns?: string;

  // List of security group IDs to associate with.
  public vpcSecurityGroupIds?: Array<string>;

  // Instance type to use for the instance. Required unless `launch_template` is specified and the Launch Template specifies an instance type. If an instance type is specified in the Launch Template, setting `instance_type` will override the instance type specified in the Launch Template. Updates to this field will trigger a stop/start of the EC2 instance.
  public instanceType?: string;

  // If true, enables [EC2 Instance Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingDisableAPITermination).
  public disableApiTermination?: boolean;

  // If true, the launched EC2 instance will support hibernation.
  public hibernation?: boolean;

  // Public IP address assigned to the instance, if applicable. --NOTE--: If you are using an `aws.ec2.Eip` with your instance, you should refer to the EIP's address directly and not use `public_ip` as this field will change after the EIP is attached.
  public publicIp?: string;

  // Controls if traffic is routed to the instance when the destination address does not match the instance. Used for NAT or VPNs. Defaults true.
  public sourceDestCheck?: boolean;

  // Tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of `dedicated` runs on single-tenant hardware. The `host` tenancy is not supported for the import-instance command. Valid values are `default`, `dedicated`, and `host`.
  public tenancy?: string;

  // If set to 1, hyperthreading is disabled on the launched instance. Defaults to 2 if not set. See [Optimizing CPU Options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) for more information.
  public cpuThreadsPerCore?: number;

  // Placement Group to start the instance in.
  public placementGroup?: string;

  // When used in combination with `user_data` or `user_data_base64` will trigger a destroy and recreate when set to `true`. Defaults to `false` if not set.
  public userDataReplaceOnChange?: boolean;

  // If true, the launched EC2 instance will have detailed monitoring enabled. (Available since v0.6.0)
  public monitoring?: boolean;

  // If the request is a Spot Instance request, the ID of the request.
  public spotInstanceRequestId?: string;

  // IAM Instance Profile to launch the instance with. Specified as the name of the Instance Profile. Ensure your credentials have the correct permission to assign the instance profile according to the [EC2 documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html#roles-usingrole-ec2instance-permissions), notably `iam:PassRole`.
  public iamInstanceProfile?: string;

  // ID of a dedicated host that the instance will be assigned to. Use when an instance is to be launched on a specific dedicated host.
  public hostId?: string;

  // ARN of the host resource group in which to launch the instances. If you specify an ARN, omit the `tenancy` parameter or set it to `host`.
  public hostResourceGroupArn?: string;

  // Describes the market (purchasing) option for the instances. See Market Options below for details on attributes.
  public instanceMarketOptions?: ec2_InstanceInstanceMarketOptions;

  // Specify one or more IPv6 addresses from the range of the subnet to associate with the primary network interface
  public ipv6Addresses?: Array<string>;

  // If true, enables [EC2 Instance Stop Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection).
  public disableApiStop?: boolean;

  // VPC Subnet ID to launch in.
  public subnetId?: string;

  // Number of the partition the instance is in. Valid only if the `aws.ec2.PlacementGroup` resource's `strategy` argument is set to `"partition"`.
  public placementPartitionNumber?: number;

  // Indicates whether this is a Spot Instance or a Scheduled Instance.
  public instanceLifecycle?: string;

  // List of secondary private IPv4 addresses to assign to the instance's primary network interface (eth0) in a VPC. Can only be assigned to the primary network interface (eth0) attached at instance creation, not a pre-existing network interface i.e., referenced in a `network_interface` block. Refer to the [Elastic network interfaces documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI) to see the maximum number of private IP addresses allowed per instance type.
  public secondaryPrivateIps?: Array<string>;

  // Shutdown behavior for the instance. Amazon defaults this to `stop` for EBS-backed instances and `terminate` for instance-store instances. Cannot be set on instance-store instances. See [Shutdown Behavior](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingInstanceInitiatedShutdownBehavior) for more information.
  public instanceInitiatedShutdownBehavior?: string;

  /*
Map of tags to assign, at instance-creation time, to root and EBS volumes.

> --NOTE:-- Do not use `volume_tags` if you plan to manage block device tags outside the `aws.ec2.Instance` configuration, such as using `tags` in an `aws.ebs.Volume` resource attached via `aws.ec2.VolumeAttachment`. Doing so will result in resource cycling and inconsistent behavior.
*/
  public volumeTags?: Map<string, string>;

  // AZ to start the instance in.
  public availabilityZone?: string;

  // Private IP address to associate with the instance in a VPC.
  public privateIp?: string;

  // Public DNS name assigned to the instance. For EC2-VPC, this is only available if you've enabled DNS hostnames for your VPC.
  public publicDns?: string;

  // Map of tags to assign to the resource. Note that these tags apply to the instance and not block storage devices. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Customize the metadata options of the instance. See Metadata Options below for more details.
  public metadataOptions?: ec2_InstanceMetadataOptions;

  // Enable Nitro Enclaves on launched instances. See Enclave Options below for more details.
  public enclaveOptions?: ec2_InstanceEnclaveOptions;

  // If true, wait for password data to become available and retrieve it. Useful for getting the administrator password for instances running Microsoft Windows. The password data is exported to the `password_data` attribute. See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information.
  public getPasswordData?: boolean;

  // Customize network interfaces to be attached at instance boot time. See Network Interfaces below for more details.
  public networkInterfaces?: Array<ec2_InstanceNetworkInterface>;

  // ARN of the Outpost the instance is assigned to.
  public outpostArn?: string;

  /*
List of security group names to associate with.

> --NOTE:-- If you are creating Instances in a VPC, use `vpc_security_group_ids` instead.
*/
  public securityGroups?: Array<string>;

  // User data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.
  public userData?: string;

  // Configuration block for customizing the credit specification of the instance. See Credit Specification below for more details. This provider will only perform drift detection of its value when present in a configuration. Removing this configuration on existing instances will only stop managing it. It will not change the configuration back to the default for the instance type.
  public creditSpecification?: ec2_InstanceCreditSpecification;

  // State of the instance. One of: `pending`, `running`, `shutting-down`, `terminated`, `stopping`, `stopped`. See [Instance Lifecycle](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html) for more information.
  public instanceState?: string;

  // Number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet.
  public ipv6AddressCount?: number;

  // ID of the instance's primary network interface.
  public primaryNetworkInterfaceId?: string;

  // Configuration block to customize details about the root block device of the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a list containing one object.
  public rootBlockDevice?: ec2_InstanceRootBlockDevice;

  // AMI to use for the instance. Required unless `launch_template` is specified and the Launch Template specifes an AMI. If an AMI is specified in the Launch Template, setting `ami` will override the AMI specified in the Launch Template.
  public ami?: string;

  // One or more configuration blocks with additional EBS block devices to attach to the instance. Block device configurations only apply on resource creation. See Block Devices below for details on attributes and drift detection. When accessing this as an attribute reference, it is a set of objects.
  public ebsBlockDevices?: Array<ec2_InstanceEbsBlockDevice>;

  // If true, the launched EC2 instance will be EBS-optimized. Note that if this is not set on an instance type that is optimized by default then this will show as disabled but if the instance type is optimized by default then there is no need to set this and there is no effect to disabling it. See the [EBS Optimized section](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html) of the AWS User Guide for more information.
  public ebsOptimized?: boolean;

  // Key name of the Key Pair to use for the instance; which can be managed using the `aws.ec2.KeyPair` resource.
  public keyName?: string;

  // Maintenance and recovery options for the instance. See Maintenance Options below for more details.
  public maintenanceOptions?: ec2_InstanceMaintenanceOptions;

  // Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.
  public userDataBase64?: string;

  // Whether to associate a public IP address with an instance in a VPC.
  public associatePublicIpAddress?: boolean;

  // The CPU options for the instance. See CPU Options below for more details.
  public cpuOptions?: ec2_InstanceCpuOptions;

  // One or more configuration blocks to customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a set of objects.
  public ephemeralBlockDevices?: Array<ec2_InstanceEphemeralBlockDevice>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Describes an instance's Capacity Reservation targeting option. See Capacity Reservation Specification below for more details.

> --NOTE:-- Changing `cpu_core_count` and/or `cpu_threads_per_core` will cause the resource to be destroyed and re-created.
*/
  public capacityReservationSpecification?: ec2_InstanceCapacityReservationSpecification;

  // Specifies a Launch Template to configure the instance. Parameters configured on this resource will override the corresponding parameters in the Launch Template. See Launch Template Specification below for more details.
  public launchTemplate?: ec2_InstanceLaunchTemplate;

  // Options for the instance hostname. The default values are inherited from the subnet. See Private DNS Name Options below for more details.
  public privateDnsNameOptions?: ec2_InstancePrivateDnsNameOptions;

  // ARN of the instance.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'keyName',
        'Key name of the Key Pair to use for the instance; which can be managed using the `aws.ec2.KeyPair` resource.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'disableApiStop',
        'If true, enables [EC2 Instance Stop Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityGroups',
        'List of security group names to associate with.\n\n> **NOTE:** If you are creating Instances in a VPC, use `vpc_security_group_ids` instead.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'hostId',
        'ID of a dedicated host that the instance will be assigned to. Use when an instance is to be launched on a specific dedicated host.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetId',
        'VPC Subnet ID to launch in.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cpuOptions',
        'The CPU options for the instance. See CPU Options below for more details.',
        () => ec2_InstanceCpuOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'hibernation',
        'If true, the launched EC2 instance will support hibernation.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'cpuThreadsPerCore',
        'If set to 1, hyperthreading is disabled on the launched instance. Defaults to 2 if not set. See [Optimizing CPU Options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) for more information.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'creditSpecification',
        'Configuration block for customizing the credit specification of the instance. See Credit Specification below for more details. This provider will only perform drift detection of its value when present in a configuration. Removing this configuration on existing instances will only stop managing it. It will not change the configuration back to the default for the instance type.',
        () => ec2_InstanceCreditSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'volumeTags',
        'Map of tags to assign, at instance-creation time, to root and EBS volumes.\n\n> **NOTE:** Do not use `volume_tags` if you plan to manage block device tags outside the `aws.ec2.Instance` configuration, such as using `tags` in an `aws.ebs.Volume` resource attached via `aws.ec2.VolumeAttachment`. Doing so will result in resource cycling and inconsistent behavior.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'privateIp',
        'Private IP address to associate with the instance in a VPC.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'associatePublicIpAddress',
        'Whether to associate a public IP address with an instance in a VPC.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'secondaryPrivateIps',
        "List of secondary private IPv4 addresses to assign to the instance's primary network interface (eth0) in a VPC. Can only be assigned to the primary network interface (eth0) attached at instance creation, not a pre-existing network interface i.e., referenced in a `network_interface` block. Refer to the [Elastic network interfaces documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI) to see the maximum number of private IP addresses allowed per instance type.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'rootBlockDevice',
        'Configuration block to customize details about the root block device of the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a list containing one object.',
        () => ec2_InstanceRootBlockDevice_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'userDataReplaceOnChange',
        'When used in combination with `user_data` or `user_data_base64` will trigger a destroy and recreate when set to `true`. Defaults to `false` if not set.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'launchTemplate',
        'Specifies a Launch Template to configure the instance. Parameters configured on this resource will override the corresponding parameters in the Launch Template. See Launch Template Specification below for more details.',
        () => ec2_InstanceLaunchTemplate_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'availabilityZone',
        'AZ to start the instance in.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'userData',
        'User data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'hostResourceGroupArn',
        'ARN of the host resource group in which to launch the instances. If you specify an ARN, omit the `tenancy` parameter or set it to `host`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceType',
        'Instance type to use for the instance. Required unless `launch_template` is specified and the Launch Template specifies an instance type. If an instance type is specified in the Launch Template, setting `instance_type` will override the instance type specified in the Launch Template. Updates to this field will trigger a stop/start of the EC2 instance.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ipv6Addresses',
        'Specify one or more IPv6 addresses from the range of the subnet to associate with the primary network interface',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'userDataBase64',
        'Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ephemeralBlockDevices',
        'One or more configuration blocks to customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a set of objects.',
        () => ec2_InstanceEphemeralBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ami',
        'AMI to use for the instance. Required unless `launch_template` is specified and the Launch Template specifes an AMI. If an AMI is specified in the Launch Template, setting `ami` will override the AMI specified in the Launch Template.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ebsBlockDevices',
        'One or more configuration blocks with additional EBS block devices to attach to the instance. Block device configurations only apply on resource creation. See Block Devices below for details on attributes and drift detection. When accessing this as an attribute reference, it is a set of objects.',
        () => ec2_InstanceEbsBlockDevice_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. Note that these tags apply to the instance and not block storage devices. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'maintenanceOptions',
        'Maintenance and recovery options for the instance. See Maintenance Options below for more details.',
        () => ec2_InstanceMaintenanceOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'enclaveOptions',
        'Enable Nitro Enclaves on launched instances. See Enclave Options below for more details.',
        () => ec2_InstanceEnclaveOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'iamInstanceProfile',
        'IAM Instance Profile to launch the instance with. Specified as the name of the Instance Profile. Ensure your credentials have the correct permission to assign the instance profile according to the [EC2 documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html#roles-usingrole-ec2instance-permissions), notably `iam:PassRole`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'capacityReservationSpecification',
        "Describes an instance's Capacity Reservation targeting option. See Capacity Reservation Specification below for more details.\n\n> **NOTE:** Changing `cpu_core_count` and/or `cpu_threads_per_core` will cause the resource to be destroyed and re-created.",
        () => ec2_InstanceCapacityReservationSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'placementGroup',
        'Placement Group to start the instance in.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceInitiatedShutdownBehavior',
        'Shutdown behavior for the instance. Amazon defaults this to `stop` for EBS-backed instances and `terminate` for instance-store instances. Cannot be set on instance-store instances. See [Shutdown Behavior](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingInstanceInitiatedShutdownBehavior) for more information.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'getPasswordData',
        'If true, wait for password data to become available and retrieve it. Useful for getting the administrator password for instances running Microsoft Windows. The password data is exported to the `password_data` attribute. See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'ebsOptimized',
        'If true, the launched EC2 instance will be EBS-optimized. Note that if this is not set on an instance type that is optimized by default then this will show as disabled but if the instance type is optimized by default then there is no need to set this and there is no effect to disabling it. See the [EBS Optimized section](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html) of the AWS User Guide for more information.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'ipv6AddressCount',
        'Number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tenancy',
        'Tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of `dedicated` runs on single-tenant hardware. The `host` tenancy is not supported for the import-instance command. Valid values are `default`, `dedicated`, and `host`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'placementPartitionNumber',
        'Number of the partition the instance is in. Valid only if the `aws.ec2.PlacementGroup` resource\'s `strategy` argument is set to `"partition"`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'sourceDestCheck',
        'Controls if traffic is routed to the instance when the destination address does not match the instance. Used for NAT or VPNs. Defaults true.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'networkInterfaces',
        'Customize network interfaces to be attached at instance boot time. See Network Interfaces below for more details.',
        () => ec2_InstanceNetworkInterface_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'vpcSecurityGroupIds',
        'List of security group IDs to associate with.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'metadataOptions',
        'Customize the metadata options of the instance. See Metadata Options below for more details.',
        () => ec2_InstanceMetadataOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'cpuCoreCount',
        'Sets the number of CPU cores for an instance. This option is only supported on creation of instance type that support CPU Options [CPU Cores and Threads Per CPU Core Per Instance Type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html#cpu-options-supported-instances-values) - specifying this option for unsupported instance types will return an error from the EC2 API.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'disableApiTermination',
        'If true, enables [EC2 Instance Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingDisableAPITermination).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'instanceMarketOptions',
        'Describes the market (purchasing) option for the instances. See Market Options below for details on attributes.',
        () => ec2_InstanceInstanceMarketOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'monitoring',
        'If true, the launched EC2 instance will have detailed monitoring enabled. (Available since v0.6.0)',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'privateDnsNameOptions',
        'Options for the instance hostname. The default values are inherited from the subnet. See Private DNS Name Options below for more details.',
        () => ec2_InstancePrivateDnsNameOptions_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
