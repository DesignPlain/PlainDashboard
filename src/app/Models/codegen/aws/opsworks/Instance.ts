import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opsworks_InstanceRootBlockDevice,
  opsworks_InstanceRootBlockDevice_GetTypes,
} from "../types/opsworks_InstanceRootBlockDevice";
import {
  opsworks_InstanceEbsBlockDevice,
  opsworks_InstanceEbsBlockDevice_GetTypes,
} from "../types/opsworks_InstanceEbsBlockDevice";
import {
  opsworks_InstanceEphemeralBlockDevice,
  opsworks_InstanceEphemeralBlockDevice_GetTypes,
} from "../types/opsworks_InstanceEphemeralBlockDevice";

export interface InstanceArgs {
  // Associated security groups.
  securityGroupIds?: Array<string>;

  // Name of the availability zone where instances will be created by default.
  availabilityZone?: string;

  // Instance tenancy to use. Valid values are `default`, `dedicated` or `host`.
  tenancy?: string;

  // AMI to use for the instance.  If an AMI is specified, `os` must be `Custom`.
  amiId?: string;

  // Time that the instance was created.
  createdAt?: string;

  // Whether to delete EBS volume on deletion. Default is `true`.
  deleteEbs?: boolean;

  // Whether the launched EC2 instance will be EBS-optimized.
  ebsOptimized?: boolean;

  // Instance Elastic IP address.
  elasticIp?: string;

  // List of the layers the instance will belong to.
  layerIds?: Array<string>;

  // Name of the type of root device instances will have by default. Valid values are `ebs` or `instance-store`.
  rootDeviceType?: string;

  // Desired state of the instance. Valid values are `running` or `stopped`.
  state?: string;

  // OpsWorks agent to install. Default is `INHERIT`.
  agentVersion?: string;

  // Configuration block for the root block device of the instance. See Block Devices below.
  rootBlockDevices?: Array<opsworks_InstanceRootBlockDevice>;

  // Instance status. Will be one of `booting`, `connection_lost`, `online`, `pending`, `rebooting`, `requested`, `running_setup`, `setup_failed`, `shutting_down`, `start_failed`, `stop_failed`, `stopped`, `stopping`, `terminated`, or `terminating`.
  status?: string;

  // Name of operating system that will be installed.
  os?: string;

  // Keyword to choose what virtualization mode created instances will use. Valid values are `paravirtual` or `hvm`.
  virtualizationType?: string;

  // Creates load-based or time-based instances.  Valid values are `load`, `timer`.
  autoScalingType?: string;

  // Configuration block for additional EBS block devices to attach to the instance. See Block Devices below.
  ebsBlockDevices?: Array<opsworks_InstanceEbsBlockDevice>;

  // ECS cluster's ARN for container instances.
  ecsClusterArn?: string;

  // For registered instances, infrastructure class: ec2 or on-premises.
  infrastructureClass?: string;

  // Controls where to install OS and package updates when the instance boots.  Default is `true`.
  installUpdatesOnBoot?: boolean;

  // ARN of the instance's IAM profile.
  instanceProfileArn?: string;

  /*
Identifier of the stack the instance will belong to.

The following arguments are optional:
*/
  stackId?: string;

  // Machine architecture for created instances.  Valid values are `x86_64` or `i386`. The default is `x86_64`.
  architecture?: string;

  // Configuration block for ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below.
  ephemeralBlockDevices?: Array<opsworks_InstanceEphemeralBlockDevice>;

  // Type of instance to start.
  instanceType?: string;

  // Subnet ID to attach to.
  subnetId?: string;

  // Whether to delete the Elastic IP on deletion.
  deleteEip?: boolean;

  // Instance's host name.
  hostname?: string;

  // Name of the SSH keypair that instances will have by default.
  sshKeyName?: string;
}
export class Instance extends DS_Resource {
  // OpsWorks agent to install. Default is `INHERIT`.
  public agentVersion?: string;

  // Machine architecture for created instances.  Valid values are `x86_64` or `i386`. The default is `x86_64`.
  public architecture?: string;

  // Whether to delete EBS volume on deletion. Default is `true`.
  public deleteEbs?: boolean;

  // ARN of the instance's IAM profile.
  public instanceProfileArn?: string;

  // Public IP address assigned to the instance, if applicable.
  public publicIp?: string;

  // Configuration block for the root block device of the instance. See Block Devices below.
  public rootBlockDevices?: Array<opsworks_InstanceRootBlockDevice>;

  // Subnet ID to attach to.
  public subnetId?: string;

  // Whether to delete the Elastic IP on deletion.
  public deleteEip?: boolean;

  // Whether the launched EC2 instance will be EBS-optimized.
  public ebsOptimized?: boolean;

  // Instance's host name.
  public hostname?: string;

  // Private IP address assigned to the instance.
  public privateIp?: string;

  // Desired state of the instance. Valid values are `running` or `stopped`.
  public state?: string;

  // Creates load-based or time-based instances.  Valid values are `load`, `timer`.
  public autoScalingType?: string;

  // Type of instance to start.
  public instanceType?: string;

  // Instance's platform.
  public platform?: string;

  // For registered instances, the reported operating system family.
  public reportedOsFamily?: string;

  // Associated security groups.
  public securityGroupIds?: Array<string>;

  /*
Identifier of the stack the instance will belong to.

The following arguments are optional:
*/
  public stackId?: string;

  // AMI to use for the instance.  If an AMI is specified, `os` must be `Custom`.
  public amiId?: string;

  // Time that the instance was created.
  public createdAt?: string;

  // Instance Elastic IP address.
  public elasticIp?: string;

  // Controls where to install OS and package updates when the instance boots.  Default is `true`.
  public installUpdatesOnBoot?: boolean;

  // For registered instances, the reported operating system name.
  public reportedOsName?: string;

  // For registered instances, the reported operating system version.
  public reportedOsVersion?: string;

  // Root device volume ID.
  public rootDeviceVolumeId?: string;

  // Name of the availability zone where instances will be created by default.
  public availabilityZone?: string;

  // ID of the last service error.
  public lastServiceErrorId?: string;

  // List of the layers the instance will belong to.
  public layerIds?: Array<string>;

  // Public DNS name assigned to the instance. For EC2-VPC, this is only available if you've enabled DNS hostnames for your VPC.
  public publicDns?: string;

  // Name of the type of root device instances will have by default. Valid values are `ebs` or `instance-store`.
  public rootDeviceType?: string;

  // Keyword to choose what virtualization mode created instances will use. Valid values are `paravirtual` or `hvm`.
  public virtualizationType?: string;

  // EC2 instance ID.
  public ec2InstanceId?: string;

  // ECS cluster's ARN for container instances.
  public ecsClusterArn?: string;

  // Name of operating system that will be installed.
  public os?: string;

  // Instance tenancy to use. Valid values are `default`, `dedicated` or `host`.
  public tenancy?: string;

  // Configuration block for additional EBS block devices to attach to the instance. See Block Devices below.
  public ebsBlockDevices?: Array<opsworks_InstanceEbsBlockDevice>;

  // Configuration block for ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below.
  public ephemeralBlockDevices?: Array<opsworks_InstanceEphemeralBlockDevice>;

  // SSH key's Deep Security Agent (DSA) fingerprint.
  public sshHostDsaKeyFingerprint?: string;

  // Instance status. Will be one of `booting`, `connection_lost`, `online`, `pending`, `rebooting`, `requested`, `running_setup`, `setup_failed`, `shutting_down`, `start_failed`, `stop_failed`, `stopped`, `stopping`, `terminated`, or `terminating`.
  public status?: string;

  // For registered instances, infrastructure class: ec2 or on-premises.
  public infrastructureClass?: string;

  // Private DNS name assigned to the instance. Can only be used inside the Amazon EC2, and only available if you've enabled DNS hostnames for your VPC.
  public privateDns?: string;

  // For registered instances, who performed the registration.
  public registeredBy?: string;

  // Instance's reported AWS OpsWorks Stacks agent version.
  public reportedAgentVersion?: string;

  // SSH key's RSA fingerprint.
  public sshHostRsaKeyFingerprint?: string;

  // Name of the SSH keypair that instances will have by default.
  public sshKeyName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "Associated security groups.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "Name of the availability zone where instances will be created by default.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tenancy",
        "Instance tenancy to use. Valid values are `default`, `dedicated` or `host`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "virtualizationType",
        "Keyword to choose what virtualization mode created instances will use. Valid values are `paravirtual` or `hvm`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "infrastructureClass",
        "For registered instances, infrastructure class: ec2 or on-premises.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ephemeralBlockDevices",
        'Configuration block for ephemeral (also known as "Instance Store") volumes on the instance. See Block Devices below.',
        () => opsworks_InstanceEphemeralBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "createdAt",
        "Time that the instance was created.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ebsOptimized",
        "Whether the launched EC2 instance will be EBS-optimized.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoScalingType",
        "Creates load-based or time-based instances.  Valid values are `load`, `timer`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsBlockDevices",
        "Configuration block for additional EBS block devices to attach to the instance. See Block Devices below.",
        () => opsworks_InstanceEbsBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sshKeyName",
        "Name of the SSH keypair that instances will have by default.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "state",
        "Desired state of the instance. Valid values are `running` or `stopped`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rootBlockDevices",
        "Configuration block for the root block device of the instance. See Block Devices below.",
        () => opsworks_InstanceRootBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "os",
        "Name of operating system that will be installed.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        "Type of instance to start.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "Subnet ID to attach to.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "stackId",
        "Identifier of the stack the instance will belong to.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteEip",
        "Whether to delete the Elastic IP on deletion.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteEbs",
        "Whether to delete EBS volume on deletion. Default is `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "elasticIp",
        "Instance Elastic IP address.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "rootDeviceType",
        "Name of the type of root device instances will have by default. Valid values are `ebs` or `instance-store`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "agentVersion",
        "OpsWorks agent to install. Default is `INHERIT`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceProfileArn",
        "ARN of the instance's IAM profile.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostname",
        "Instance's host name.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "amiId",
        "AMI to use for the instance.  If an AMI is specified, `os` must be `Custom`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "layerIds",
        "List of the layers the instance will belong to.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ecsClusterArn",
        "ECS cluster's ARN for container instances.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "installUpdatesOnBoot",
        "Controls where to install OS and package updates when the instance boots.  Default is `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "Instance status. Will be one of `booting`, `connection_lost`, `online`, `pending`, `rebooting`, `requested`, `running_setup`, `setup_failed`, `shutting_down`, `start_failed`, `stop_failed`, `stopped`, `stopping`, `terminated`, or `terminating`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "architecture",
        "Machine architecture for created instances.  Valid values are `x86_64` or `i386`. The default is `x86_64`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
