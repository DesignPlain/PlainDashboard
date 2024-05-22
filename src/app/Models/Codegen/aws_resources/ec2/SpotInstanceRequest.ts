import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_SpotInstanceRequestLaunchTemplate,
  ec2_SpotInstanceRequestLaunchTemplate_GetTypes,
} from "../types/ec2_SpotInstanceRequestLaunchTemplate";
import {
  ec2_SpotInstanceRequestCreditSpecification,
  ec2_SpotInstanceRequestCreditSpecification_GetTypes,
} from "../types/ec2_SpotInstanceRequestCreditSpecification";
import {
  ec2_SpotInstanceRequestCpuOptions,
  ec2_SpotInstanceRequestCpuOptions_GetTypes,
} from "../types/ec2_SpotInstanceRequestCpuOptions";
import {
  ec2_SpotInstanceRequestMaintenanceOptions,
  ec2_SpotInstanceRequestMaintenanceOptions_GetTypes,
} from "../types/ec2_SpotInstanceRequestMaintenanceOptions";
import {
  ec2_SpotInstanceRequestPrivateDnsNameOptions,
  ec2_SpotInstanceRequestPrivateDnsNameOptions_GetTypes,
} from "../types/ec2_SpotInstanceRequestPrivateDnsNameOptions";
import {
  ec2_SpotInstanceRequestEphemeralBlockDevice,
  ec2_SpotInstanceRequestEphemeralBlockDevice_GetTypes,
} from "../types/ec2_SpotInstanceRequestEphemeralBlockDevice";
import {
  ec2_SpotInstanceRequestNetworkInterface,
  ec2_SpotInstanceRequestNetworkInterface_GetTypes,
} from "../types/ec2_SpotInstanceRequestNetworkInterface";
import {
  ec2_SpotInstanceRequestEbsBlockDevice,
  ec2_SpotInstanceRequestEbsBlockDevice_GetTypes,
} from "../types/ec2_SpotInstanceRequestEbsBlockDevice";
import {
  ec2_SpotInstanceRequestRootBlockDevice,
  ec2_SpotInstanceRequestRootBlockDevice_GetTypes,
} from "../types/ec2_SpotInstanceRequestRootBlockDevice";
import {
  ec2_SpotInstanceRequestCapacityReservationSpecification,
  ec2_SpotInstanceRequestCapacityReservationSpecification_GetTypes,
} from "../types/ec2_SpotInstanceRequestCapacityReservationSpecification";
import {
  ec2_SpotInstanceRequestMetadataOptions,
  ec2_SpotInstanceRequestMetadataOptions_GetTypes,
} from "../types/ec2_SpotInstanceRequestMetadataOptions";
import {
  ec2_SpotInstanceRequestEnclaveOptions,
  ec2_SpotInstanceRequestEnclaveOptions_GetTypes,
} from "../types/ec2_SpotInstanceRequestEnclaveOptions";

export interface SpotInstanceRequestArgs {
  // Enable Nitro Enclaves on launched instances. See Enclave Options below for more details.
  enclaveOptions?: ec2_SpotInstanceRequestEnclaveOptions;

  // One or more configuration blocks to customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a set of objects.
  ephemeralBlockDevices?: Array<ec2_SpotInstanceRequestEphemeralBlockDevice>;

  /*
A launch group is a group of spot instances that launch together and terminate together.
If left empty instances are launched and terminated individually.
*/
  launchGroup?: string;

  // Placement Group to start the instance in.
  placementGroup?: string;

  // Customize network interfaces to be attached at instance boot time. See Network Interfaces below for more details.
  networkInterfaces?: Array<ec2_SpotInstanceRequestNetworkInterface>;

  // Options for the instance hostname. The default values are inherited from the subnet. See Private DNS Name Options below for more details.
  privateDnsNameOptions?: ec2_SpotInstanceRequestPrivateDnsNameOptions;

  // Key name of the Key Pair to use for the instance; which can be managed using the `aws.ec2.KeyPair` resource.
  keyName?: string;

  // If true, the launched EC2 instance will support hibernation.
  hibernation?: boolean;

  // If true, the launched EC2 instance will have detailed monitoring enabled. (Available since v0.6.0)
  monitoring?: boolean;

  // Whether to associate a public IP address with an instance in a VPC.
  associatePublicIpAddress?: boolean;

  // Map of tags to assign to the resource. Note that these tags apply to the instance and not block storage devices. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specify one or more IPv6 addresses from the range of the subnet to associate with the primary network interface
  ipv6Addresses?: Array<string>;

  // If true, enables [EC2 Instance Stop Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection).
  disableApiStop?: boolean;

  // One or more configuration blocks with additional EBS block devices to attach to the instance. Block device configurations only apply on resource creation. See Block Devices below for details on attributes and drift detection. When accessing this as an attribute reference, it is a set of objects.
  ebsBlockDevices?: Array<ec2_SpotInstanceRequestEbsBlockDevice>;

  // Configuration block to customize details about the root block device of the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a list containing one object.
  rootBlockDevice?: ec2_SpotInstanceRequestRootBlockDevice;

  /*
If set to `one-time`, after
the instance is terminated, the spot request will be closed.
*/
  spotType?: string;

  // List of security group IDs to associate with.
  vpcSecurityGroupIds?: Array<string>;

  /*
Describes an instance's Capacity Reservation targeting option. See Capacity Reservation Specification below for more details.

> --NOTE:-- Changing `cpu_core_count` and/or `cpu_threads_per_core` will cause the resource to be destroyed and re-created.
*/
  capacityReservationSpecification?: ec2_SpotInstanceRequestCapacityReservationSpecification;

  // Number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet.
  ipv6AddressCount?: number;

  // Private IP address to associate with the instance in a VPC.
  privateIp?: string;

  // VPC Subnet ID to launch in.
  subnetId?: string;

  // When used in combination with `user_data` or `user_data_base64` will trigger a destroy and recreate when set to `true`. Defaults to `false` if not set.
  userDataReplaceOnChange?: boolean;

  // AZ to start the instance in.
  availabilityZone?: string;

  /*
The required duration for the Spot instances, in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).
The duration period starts as soon as your Spot instance receives its instance ID. At the end of the duration period, Amazon EC2 marks the Spot instance for termination and provides a Spot instance termination notice, which gives the instance a two-minute warning before it terminates.
Note that you can't specify an Availability Zone group or a launch group if you specify a duration.
*/
  blockDurationMinutes?: number;

  // ARN of the host resource group in which to launch the instances. If you specify an ARN, omit the `tenancy` parameter or set it to `host`.
  hostResourceGroupArn?: string;

  /*
If set, this provider will
wait for the Spot Request to be fulfilled, and will throw an error if the
timeout of 10m is reached.
*/
  waitForFulfillment?: boolean;

  // AMI to use for the instance. Required unless `launch_template` is specified and the Launch Template specifes an AMI. If an AMI is specified in the Launch Template, setting `ami` will override the AMI specified in the Launch Template.
  ami?: string;

  // Instance type to use for the instance. Required unless `launch_template` is specified and the Launch Template specifies an instance type. If an instance type is specified in the Launch Template, setting `instance_type` will override the instance type specified in the Launch Template. Updates to this field will trigger a stop/start of the EC2 instance.
  instanceType?: string;

  // Specifies a Launch Template to configure the instance. Parameters configured on this resource will override the corresponding parameters in the Launch Template. See Launch Template Specification below for more details.
  launchTemplate?: ec2_SpotInstanceRequestLaunchTemplate;

  // List of secondary private IPv4 addresses to assign to the instance's primary network interface (eth0) in a VPC. Can only be assigned to the primary network interface (eth0) attached at instance creation, not a pre-existing network interface i.e., referenced in a `network_interface` block. Refer to the [Elastic network interfaces documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI) to see the maximum number of private IP addresses allowed per instance type.
  secondaryPrivateIps?: Array<string>;

  // User data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.
  userData?: string;

  // Configuration block for customizing the credit specification of the instance. See Credit Specification below for more details. This provider will only perform drift detection of its value when present in a configuration. Removing this configuration on existing instances will only stop managing it. It will not change the configuration back to the default for the instance type.
  creditSpecification?: ec2_SpotInstanceRequestCreditSpecification;

  // Indicates Spot instance behavior when it is interrupted. Valid values are `terminate`, `stop`, or `hibernate`. Default value is `terminate`.
  instanceInterruptionBehavior?: string;

  // Customize the metadata options of the instance. See Metadata Options below for more details.
  metadataOptions?: ec2_SpotInstanceRequestMetadataOptions;

  // Number of the partition the instance is in. Valid only if the `aws.ec2.PlacementGroup` resource's `strategy` argument is set to `"partition"`.
  placementPartitionNumber?: number;

  // If true, enables [EC2 Instance Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingDisableAPITermination).
  disableApiTermination?: boolean;

  /*
List of security group names to associate with.

> --NOTE:-- If you are creating Instances in a VPC, use `vpc_security_group_ids` instead.
*/
  securityGroups?: Array<string>;

  // Sets the number of CPU cores for an instance. This option is only supported on creation of instance type that support CPU Options [CPU Cores and Threads Per CPU Core Per Instance Type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html#cpu-options-supported-instances-values) - specifying this option for unsupported instance types will return an error from the EC2 API.
  cpuCoreCount?: number;

  // The CPU options for the instance. See CPU Options below for more details.
  cpuOptions?: ec2_SpotInstanceRequestCpuOptions;

  // Shutdown behavior for the instance. Amazon defaults this to `stop` for EBS-backed instances and `terminate` for instance-store instances. Cannot be set on instance-store instances. See [Shutdown Behavior](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingInstanceInitiatedShutdownBehavior) for more information.
  instanceInitiatedShutdownBehavior?: string;

  // Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.
  userDataBase64?: string;

  /*
Map of tags to assign, at instance-creation time, to root and EBS volumes.

> --NOTE:-- Do not use `volume_tags` if you plan to manage block device tags outside the `aws.ec2.Instance` configuration, such as using `tags` in an `aws.ebs.Volume` resource attached via `aws.ec2.VolumeAttachment`. Doing so will result in resource cycling and inconsistent behavior.
*/
  volumeTags?: Map<string, string>;

  // If true, the launched EC2 instance will be EBS-optimized. Note that if this is not set on an instance type that is optimized by default then this will show as disabled but if the instance type is optimized by default then there is no need to set this and there is no effect to disabling it. See the [EBS Optimized section](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html) of the AWS User Guide for more information.
  ebsOptimized?: boolean;

  // If true, wait for password data to become available and retrieve it. Useful for getting the administrator password for instances running Microsoft Windows. The password data is exported to the `password_data` attribute. See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information.
  getPasswordData?: boolean;

  // The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
  validFrom?: string;

  // If set to 1, hyperthreading is disabled on the launched instance. Defaults to 2 if not set. See [Optimizing CPU Options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) for more information.
  cpuThreadsPerCore?: number;

  // IAM Instance Profile to launch the instance with. Specified as the name of the Instance Profile. Ensure your credentials have the correct permission to assign the instance profile according to the [EC2 documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html#roles-usingrole-ec2instance-permissions), notably `iam:PassRole`.
  iamInstanceProfile?: string;

  // Maintenance and recovery options for the instance. See Maintenance Options below for more details.
  maintenanceOptions?: ec2_SpotInstanceRequestMaintenanceOptions;

  // The maximum price to request on the spot market.
  spotPrice?: string;

  // Tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of `dedicated` runs on single-tenant hardware. The `host` tenancy is not supported for the import-instance command. Valid values are `default`, `dedicated`, and `host`.
  tenancy?: string;

  // ID of a dedicated host that the instance will be assigned to. Use when an instance is to be launched on a specific dedicated host.
  hostId?: string;

  // The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request. The default end date is 7 days from the current date.
  validUntil?: string;

  // Controls if traffic is routed to the instance when the destination address does not match the instance. Used for NAT or VPNs. Defaults true.
  sourceDestCheck?: boolean;
}
export class SpotInstanceRequest extends Resource {
  // Specifies a Launch Template to configure the instance. Parameters configured on this resource will override the corresponding parameters in the Launch Template. See Launch Template Specification below for more details.
  public launchTemplate?: ec2_SpotInstanceRequestLaunchTemplate;

  // Customize the metadata options of the instance. See Metadata Options below for more details.
  public metadataOptions?: ec2_SpotInstanceRequestMetadataOptions;

  // Map of tags to assign to the resource. Note that these tags apply to the instance and not block storage devices. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // AZ to start the instance in.
  public availabilityZone?: string;

  // One or more configuration blocks with additional EBS block devices to attach to the instance. Block device configurations only apply on resource creation. See Block Devices below for details on attributes and drift detection. When accessing this as an attribute reference, it is a set of objects.
  public ebsBlockDevices?: Array<ec2_SpotInstanceRequestEbsBlockDevice>;

  // If true, wait for password data to become available and retrieve it. Useful for getting the administrator password for instances running Microsoft Windows. The password data is exported to the `password_data` attribute. See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information.
  public getPasswordData?: boolean;

  // If set to 1, hyperthreading is disabled on the launched instance. Defaults to 2 if not set. See [Optimizing CPU Options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) for more information.
  public cpuThreadsPerCore?: number;

  // ID of a dedicated host that the instance will be assigned to. Use when an instance is to be launched on a specific dedicated host.
  public hostId?: string;

  // Customize network interfaces to be attached at instance boot time. See Network Interfaces below for more details.
  public networkInterfaces?: Array<ec2_SpotInstanceRequestNetworkInterface>;

  // The maximum price to request on the spot market.
  public spotPrice?: string;

  // AMI to use for the instance. Required unless `launch_template` is specified and the Launch Template specifes an AMI. If an AMI is specified in the Launch Template, setting `ami` will override the AMI specified in the Launch Template.
  public ami?: string;

  // If true, the launched EC2 instance will be EBS-optimized. Note that if this is not set on an instance type that is optimized by default then this will show as disabled but if the instance type is optimized by default then there is no need to set this and there is no effect to disabling it. See the [EBS Optimized section](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html) of the AWS User Guide for more information.
  public ebsOptimized?: boolean;

  // Enable Nitro Enclaves on launched instances. See Enclave Options below for more details.
  public enclaveOptions?: ec2_SpotInstanceRequestEnclaveOptions;

  /*
A launch group is a group of spot instances that launch together and terminate together.
If left empty instances are launched and terminated individually.
*/
  public launchGroup?: string;

  //
  public primaryNetworkInterfaceId?: string;

  // The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.
  public validFrom?: string;

  // Configuration block for customizing the credit specification of the instance. See Credit Specification below for more details. This provider will only perform drift detection of its value when present in a configuration. Removing this configuration on existing instances will only stop managing it. It will not change the configuration back to the default for the instance type.
  public creditSpecification?: ec2_SpotInstanceRequestCreditSpecification;

  // If true, the launched EC2 instance will support hibernation.
  public hibernation?: boolean;

  // IAM Instance Profile to launch the instance with. Specified as the name of the Instance Profile. Ensure your credentials have the correct permission to assign the instance profile according to the [EC2 documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html#roles-usingrole-ec2instance-permissions), notably `iam:PassRole`.
  public iamInstanceProfile?: string;

  // The CPU options for the instance. See CPU Options below for more details.
  public cpuOptions?: ec2_SpotInstanceRequestCpuOptions;

  // Placement Group to start the instance in.
  public placementGroup?: string;

  // Options for the instance hostname. The default values are inherited from the subnet. See Private DNS Name Options below for more details.
  public privateDnsNameOptions?: ec2_SpotInstanceRequestPrivateDnsNameOptions;

  // One or more configuration blocks to customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a set of objects.
  public ephemeralBlockDevices?: Array<ec2_SpotInstanceRequestEphemeralBlockDevice>;

  // If true, the launched EC2 instance will have detailed monitoring enabled. (Available since v0.6.0)
  public monitoring?: boolean;

  // VPC Subnet ID to launch in.
  public subnetId?: string;

  // Key name of the Key Pair to use for the instance; which can be managed using the `aws.ec2.KeyPair` resource.
  public keyName?: string;

  //
  public outpostArn?: string;

  /*
The private DNS name assigned to the instance. Can only be
used inside the Amazon EC2, and only available if you've enabled DNS hostnames
for your VPC
*/
  public privateDns?: string;

  // Whether to associate a public IP address with an instance in a VPC.
  public associatePublicIpAddress?: boolean;

  /*
The required duration for the Spot instances, in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).
The duration period starts as soon as your Spot instance receives its instance ID. At the end of the duration period, Amazon EC2 marks the Spot instance for termination and provides a Spot instance termination notice, which gives the instance a two-minute warning before it terminates.
Note that you can't specify an Availability Zone group or a launch group if you specify a duration.
*/
  public blockDurationMinutes?: number;

  // Indicates Spot instance behavior when it is interrupted. Valid values are `terminate`, `stop`, or `hibernate`. Default value is `terminate`.
  public instanceInterruptionBehavior?: string;

  // If true, enables [EC2 Instance Stop Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection).
  public disableApiStop?: boolean;

  /*
The current [request
state](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html#creating-spot-request-status)
of the Spot Instance Request.
*/
  public spotRequestState?: string;

  // Number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet.
  public ipv6AddressCount?: number;

  // Tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of `dedicated` runs on single-tenant hardware. The `host` tenancy is not supported for the import-instance command. Valid values are `default`, `dedicated`, and `host`.
  public tenancy?: string;

  // The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request. The default end date is 7 days from the current date.
  public validUntil?: string;

  // If true, enables [EC2 Instance Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingDisableAPITermination).
  public disableApiTermination?: boolean;

  // Maintenance and recovery options for the instance. See Maintenance Options below for more details.
  public maintenanceOptions?: ec2_SpotInstanceRequestMaintenanceOptions;

  /*
The Instance ID (if any) that is currently fulfilling
the Spot Instance request.
*/
  public spotInstanceId?: string;

  // List of security group IDs to associate with.
  public vpcSecurityGroupIds?: Array<string>;

  // Sets the number of CPU cores for an instance. This option is only supported on creation of instance type that support CPU Options [CPU Cores and Threads Per CPU Core Per Instance Type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html#cpu-options-supported-instances-values) - specifying this option for unsupported instance types will return an error from the EC2 API.
  public cpuCoreCount?: number;

  //
  public passwordData?: string;

  // Private IP address to associate with the instance in a VPC.
  public privateIp?: string;

  /*
The public DNS name assigned to the instance. For EC2-VPC, this
is only available if you've enabled DNS hostnames for your VPC
*/
  public publicDns?: string;

  /*
List of security group names to associate with.

> --NOTE:-- If you are creating Instances in a VPC, use `vpc_security_group_ids` instead.
*/
  public securityGroups?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The public IP address assigned to the instance, if applicable.
  public publicIp?: string;

  // When used in combination with `user_data` or `user_data_base64` will trigger a destroy and recreate when set to `true`. Defaults to `false` if not set.
  public userDataReplaceOnChange?: boolean;

  /*
Map of tags to assign, at instance-creation time, to root and EBS volumes.

> --NOTE:-- Do not use `volume_tags` if you plan to manage block device tags outside the `aws.ec2.Instance` configuration, such as using `tags` in an `aws.ebs.Volume` resource attached via `aws.ec2.VolumeAttachment`. Doing so will result in resource cycling and inconsistent behavior.
*/
  public volumeTags?: Map<string, string>;

  /*
Describes an instance's Capacity Reservation targeting option. See Capacity Reservation Specification below for more details.

> --NOTE:-- Changing `cpu_core_count` and/or `cpu_threads_per_core` will cause the resource to be destroyed and re-created.
*/
  public capacityReservationSpecification?: ec2_SpotInstanceRequestCapacityReservationSpecification;

  // Specify one or more IPv6 addresses from the range of the subnet to associate with the primary network interface
  public ipv6Addresses?: Array<string>;

  // Number of the partition the instance is in. Valid only if the `aws.ec2.PlacementGroup` resource's `strategy` argument is set to `"partition"`.
  public placementPartitionNumber?: number;

  // User data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.
  public userData?: string;

  //
  public instanceState?: string;

  // Instance type to use for the instance. Required unless `launch_template` is specified and the Launch Template specifies an instance type. If an instance type is specified in the Launch Template, setting `instance_type` will override the instance type specified in the Launch Template. Updates to this field will trigger a stop/start of the EC2 instance.
  public instanceType?: string;

  // Configuration block to customize details about the root block device of the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a list containing one object.
  public rootBlockDevice?: ec2_SpotInstanceRequestRootBlockDevice;

  // List of secondary private IPv4 addresses to assign to the instance's primary network interface (eth0) in a VPC. Can only be assigned to the primary network interface (eth0) attached at instance creation, not a pre-existing network interface i.e., referenced in a `network_interface` block. Refer to the [Elastic network interfaces documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI) to see the maximum number of private IP addresses allowed per instance type.
  public secondaryPrivateIps?: Array<string>;

  // Controls if traffic is routed to the instance when the destination address does not match the instance. Used for NAT or VPNs. Defaults true.
  public sourceDestCheck?: boolean;

  //
  public arn?: string;

  // ARN of the host resource group in which to launch the instances. If you specify an ARN, omit the `tenancy` parameter or set it to `host`.
  public hostResourceGroupArn?: string;

  // Shutdown behavior for the instance. Amazon defaults this to `stop` for EBS-backed instances and `terminate` for instance-store instances. Cannot be set on instance-store instances. See [Shutdown Behavior](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingInstanceInitiatedShutdownBehavior) for more information.
  public instanceInitiatedShutdownBehavior?: string;

  /*
If set, this provider will
wait for the Spot Request to be fulfilled, and will throw an error if the
timeout of 10m is reached.
*/
  public waitForFulfillment?: boolean;

  /*
The current [bid
status](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html)
of the Spot Instance Request.
*/
  public spotBidStatus?: string;

  /*
If set to `one-time`, after
the instance is terminated, the spot request will be closed.
*/
  public spotType?: string;

  // Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.
  public userDataBase64?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "keyName",
        "Key name of the Key Pair to use for the instance; which can be managed using the `aws.ec2.KeyPair` resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipv6Addresses",
        "Specify one or more IPv6 addresses from the range of the subnet to associate with the primary network interface",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "launchTemplate",
        "Specifies a Launch Template to configure the instance. Parameters configured on this resource will override the corresponding parameters in the Launch Template. See Launch Template Specification below for more details.",
        ec2_SpotInstanceRequestLaunchTemplate_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "validFrom",
        "The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ipv6AddressCount",
        "Number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroups",
        "List of security group names to associate with.\n\n> **NOTE:** If you are creating Instances in a VPC, use `vpc_security_group_ids` instead.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ebsOptimized",
        "If true, the launched EC2 instance will be EBS-optimized. Note that if this is not set on an instance type that is optimized by default then this will show as disabled but if the instance type is optimized by default then there is no need to set this and there is no effect to disabling it. See the [EBS Optimized section](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html) of the AWS User Guide for more information.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "validUntil",
        "The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request. The default end date is 7 days from the current date.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userData",
        "User data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "cpuCoreCount",
        "Sets the number of CPU cores for an instance. This option is only supported on creation of instance type that support CPU Options [CPU Cores and Threads Per CPU Core Per Instance Type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html#cpu-options-supported-instances-values) - specifying this option for unsupported instance types will return an error from the EC2 API.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "launchGroup",
        "A launch group is a group of spot instances that launch together and terminate together.\nIf left empty instances are launched and terminated individually.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "privateDnsNameOptions",
        "Options for the instance hostname. The default values are inherited from the subnet. See Private DNS Name Options below for more details.",
        ec2_SpotInstanceRequestPrivateDnsNameOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rootBlockDevice",
        "Configuration block to customize details about the root block device of the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a list containing one object.",
        ec2_SpotInstanceRequestRootBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "placementPartitionNumber",
        'Number of the partition the instance is in. Valid only if the `aws.ec2.PlacementGroup` resource\'s `strategy` argument is set to `"partition"`.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableApiTermination",
        "If true, enables [EC2 Instance Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingDisableAPITermination).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ephemeralBlockDevices",
        'One or more configuration blocks to customize Ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below for details. When accessing this as an attribute reference, it is a set of objects.',
        ec2_SpotInstanceRequestEphemeralBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "associatePublicIpAddress",
        "Whether to associate a public IP address with an instance in a VPC.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "AZ to start the instance in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ami",
        "AMI to use for the instance. Required unless `launch_template` is specified and the Launch Template specifes an AMI. If an AMI is specified in the Launch Template, setting `ami` will override the AMI specified in the Launch Template.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        "Instance type to use for the instance. Required unless `launch_template` is specified and the Launch Template specifies an instance type. If an instance type is specified in the Launch Template, setting `instance_type` will override the instance type specified in the Launch Template. Updates to this field will trigger a stop/start of the EC2 instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "sourceDestCheck",
        "Controls if traffic is routed to the instance when the destination address does not match the instance. Used for NAT or VPNs. Defaults true.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "placementGroup",
        "Placement Group to start the instance in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "List of security group IDs to associate with.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "metadataOptions",
        "Customize the metadata options of the instance. See Metadata Options below for more details.",
        ec2_SpotInstanceRequestMetadataOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "getPasswordData",
        "If true, wait for password data to become available and retrieve it. Useful for getting the administrator password for instances running Microsoft Windows. The password data is exported to the `password_data` attribute. See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "privateIp",
        "Private IP address to associate with the instance in a VPC.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "spotPrice",
        "The maximum price to request on the spot market.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "monitoring",
        "If true, the launched EC2 instance will have detailed monitoring enabled. (Available since v0.6.0)",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "cpuThreadsPerCore",
        "If set to 1, hyperthreading is disabled on the launched instance. Defaults to 2 if not set. See [Optimizing CPU Options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) for more information.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "networkInterfaces",
        "Customize network interfaces to be attached at instance boot time. See Network Interfaces below for more details.",
        ec2_SpotInstanceRequestNetworkInterface_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "hibernation",
        "If true, the launched EC2 instance will support hibernation.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. Note that these tags apply to the instance and not block storage devices. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostId",
        "ID of a dedicated host that the instance will be assigned to. Use when an instance is to be launched on a specific dedicated host.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "userDataReplaceOnChange",
        "When used in combination with `user_data` or `user_data_base64` will trigger a destroy and recreate when set to `true`. Defaults to `false` if not set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cpuOptions",
        "The CPU options for the instance. See CPU Options below for more details.",
        ec2_SpotInstanceRequestCpuOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceInitiatedShutdownBehavior",
        "Shutdown behavior for the instance. Amazon defaults this to `stop` for EBS-backed instances and `terminate` for instance-store instances. Cannot be set on instance-store instances. See [Shutdown Behavior](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingInstanceInitiatedShutdownBehavior) for more information.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maintenanceOptions",
        "Maintenance and recovery options for the instance. See Maintenance Options below for more details.",
        ec2_SpotInstanceRequestMaintenanceOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "blockDurationMinutes",
        "The required duration for the Spot instances, in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).\nThe duration period starts as soon as your Spot instance receives its instance ID. At the end of the duration period, Amazon EC2 marks the Spot instance for termination and provides a Spot instance termination notice, which gives the instance a two-minute warning before it terminates.\nNote that you can't specify an Availability Zone group or a launch group if you specify a duration.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "secondaryPrivateIps",
        "List of secondary private IPv4 addresses to assign to the instance's primary network interface (eth0) in a VPC. Can only be assigned to the primary network interface (eth0) attached at instance creation, not a pre-existing network interface i.e., referenced in a `network_interface` block. Refer to the [Elastic network interfaces documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI) to see the maximum number of private IP addresses allowed per instance type.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "creditSpecification",
        "Configuration block for customizing the credit specification of the instance. See Credit Specification below for more details. This provider will only perform drift detection of its value when present in a configuration. Removing this configuration on existing instances will only stop managing it. It will not change the configuration back to the default for the instance type.",
        ec2_SpotInstanceRequestCreditSpecification_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "volumeTags",
        "Map of tags to assign, at instance-creation time, to root and EBS volumes.\n\n> **NOTE:** Do not use `volume_tags` if you plan to manage block device tags outside the `aws.ec2.Instance` configuration, such as using `tags` in an `aws.ebs.Volume` resource attached via `aws.ec2.VolumeAttachment`. Doing so will result in resource cycling and inconsistent behavior.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamInstanceProfile",
        "IAM Instance Profile to launch the instance with. Specified as the name of the Instance Profile. Ensure your credentials have the correct permission to assign the instance profile according to the [EC2 documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html#roles-usingrole-ec2instance-permissions), notably `iam:PassRole`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableApiStop",
        "If true, enables [EC2 Instance Stop Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "capacityReservationSpecification",
        "Describes an instance's Capacity Reservation targeting option. See Capacity Reservation Specification below for more details.\n\n> **NOTE:** Changing `cpu_core_count` and/or `cpu_threads_per_core` will cause the resource to be destroyed and re-created.",
        ec2_SpotInstanceRequestCapacityReservationSpecification_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "waitForFulfillment",
        "If set, this provider will\nwait for the Spot Request to be fulfilled, and will throw an error if the\ntimeout of 10m is reached.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "VPC Subnet ID to launch in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "enclaveOptions",
        "Enable Nitro Enclaves on launched instances. See Enclave Options below for more details.",
        ec2_SpotInstanceRequestEnclaveOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsBlockDevices",
        "One or more configuration blocks with additional EBS block devices to attach to the instance. Block device configurations only apply on resource creation. See Block Devices below for details on attributes and drift detection. When accessing this as an attribute reference, it is a set of objects.",
        ec2_SpotInstanceRequestEbsBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceInterruptionBehavior",
        "Indicates Spot instance behavior when it is interrupted. Valid values are `terminate`, `stop`, or `hibernate`. Default value is `terminate`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "spotType",
        "If set to `one-time`, after\nthe instance is terminated, the spot request will be closed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostResourceGroupArn",
        "ARN of the host resource group in which to launch the instances. If you specify an ARN, omit the `tenancy` parameter or set it to `host`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userDataBase64",
        "Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption. Updates to this field will trigger a stop/start of the EC2 instance by default. If the `user_data_replace_on_change` is set then updates to this field will trigger a destroy and recreate.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tenancy",
        "Tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of `dedicated` runs on single-tenant hardware. The `host` tenancy is not supported for the import-instance command. Valid values are `default`, `dedicated`, and `host`.",
        [],
        false,
        true,
      ),
    ];
  }
}
