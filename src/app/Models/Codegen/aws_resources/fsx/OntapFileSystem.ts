import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fsx_OntapFileSystemDiskIopsConfiguration,
  fsx_OntapFileSystemDiskIopsConfiguration_GetTypes,
} from "../types/fsx_OntapFileSystemDiskIopsConfiguration";
import {
  fsx_OntapFileSystemEndpoint,
  fsx_OntapFileSystemEndpoint_GetTypes,
} from "../types/fsx_OntapFileSystemEndpoint";

export interface OntapFileSystemArgs {
  // A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. Requires `automatic_backup_retention_days` to be set.
  dailyAutomaticBackupStartTime?: string;

  // The ONTAP administrative password for the fsxadmin user that you can use to administer your file system using the ONTAP CLI and REST API.
  fsxAdminPassword?: string;

  // The number of ha_pairs to deploy for the file system. Valid values are 1 through 6. Recommend only using this parameter for 2 or more ha pairs.
  haPairs?: number;

  // ARN for the KMS Key to encrypt the file system at rest, Defaults to an AWS managed KMS Key.
  kmsKeyId?: string;

  // A map of tags to assign to the file system. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Sets the throughput capacity (in MBps) for the file system that you're creating. Valid values are `128`, `256`, `512`, `1024`, `2048`, and `4096`. This parameter should only be used when specifying not using the ha_pairs parameter. Either throughput_capacity or throughput_capacity_per_ha_pair must be specified.
  throughputCapacity?: number;

  // Sets the throughput capacity (in MBps) for the file system that you're creating. Valid values are `3072`,`6144`. This parameter should only be used when specifying the ha_pairs parameter. Either throughput_capacity or throughput_capacity_per_ha_pair must be specified.
  throughputCapacityPerHaPair?: number;

  // The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days.
  automaticBackupRetentionDays?: number;

  // Specifies the IP address range in which the endpoints to access your file system will be created. By default, Amazon FSx selects an unused IP address range for you from the 198.19.- range.
  endpointIpAddressRange?: string;

  // The ID for a subnet. A subnet is a range of IP addresses in your virtual private cloud (VPC).
  preferredSubnetId?: string;

  // Specifies the VPC route tables in which your file system's endpoints will be created. You should specify all VPC route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
  routeTableIds?: Array<string>;

  // A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
  securityGroupIds?: Array<string>;

  // The filesystem storage type. defaults to `SSD`.
  storageType?: string;

  // A list of IDs for the subnets that the file system will be accessible from. Up to 2 subnets can be provided.
  subnetIds?: Array<string>;

  // The filesystem deployment type. Supports `MULTI_AZ_1` and `SINGLE_AZ_1`.
  deploymentType?: string;

  // The SSD IOPS configuration for the Amazon FSx for NetApp ONTAP file system. See Disk Iops Configuration below.
  diskIopsConfiguration?: fsx_OntapFileSystemDiskIopsConfiguration;

  // The storage capacity (GiB) of the file system. Valid values between `1024` and `196608`.
  storageCapacity?: number;

  // The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
  weeklyMaintenanceStartTime?: string;
}
export class OntapFileSystem extends Resource {
  // Specifies the IP address range in which the endpoints to access your file system will be created. By default, Amazon FSx selects an unused IP address range for you from the 198.19.- range.
  public endpointIpAddressRange?: string;

  // The storage capacity (GiB) of the file system. Valid values between `1024` and `196608`.
  public storageCapacity?: number;

  // A map of tags to assign to the file system. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Sets the throughput capacity (in MBps) for the file system that you're creating. Valid values are `3072`,`6144`. This parameter should only be used when specifying the ha_pairs parameter. Either throughput_capacity or throughput_capacity_per_ha_pair must be specified.
  public throughputCapacityPerHaPair?: number;

  // A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. Requires `automatic_backup_retention_days` to be set.
  public dailyAutomaticBackupStartTime?: string;

  // AWS account identifier that created the file system.
  public ownerId?: string;

  // The ID for a subnet. A subnet is a range of IP addresses in your virtual private cloud (VPC).
  public preferredSubnetId?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Sets the throughput capacity (in MBps) for the file system that you're creating. Valid values are `128`, `256`, `512`, `1024`, `2048`, and `4096`. This parameter should only be used when specifying not using the ha_pairs parameter. Either throughput_capacity or throughput_capacity_per_ha_pair must be specified.
  public throughputCapacity?: number;

  // The filesystem deployment type. Supports `MULTI_AZ_1` and `SINGLE_AZ_1`.
  public deploymentType?: string;

  // The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.
  public dnsName?: string;

  // The endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. See Endpoints below.
  public endpoints?: Array<fsx_OntapFileSystemEndpoint>;

  // The ONTAP administrative password for the fsxadmin user that you can use to administer your file system using the ONTAP CLI and REST API.
  public fsxAdminPassword?: string;

  // The number of ha_pairs to deploy for the file system. Valid values are 1 through 6. Recommend only using this parameter for 2 or more ha pairs.
  public haPairs?: number;

  // The filesystem storage type. defaults to `SSD`.
  public storageType?: string;

  // The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
  public weeklyMaintenanceStartTime?: string;

  // Amazon Resource Name of the file system.
  public arn?: string;

  // The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days.
  public automaticBackupRetentionDays?: number;

  // The SSD IOPS configuration for the Amazon FSx for NetApp ONTAP file system. See Disk Iops Configuration below.
  public diskIopsConfiguration?: fsx_OntapFileSystemDiskIopsConfiguration;

  // ARN for the KMS Key to encrypt the file system at rest, Defaults to an AWS managed KMS Key.
  public kmsKeyId?: string;

  // Set of Elastic Network Interface identifiers from which the file system is accessible The first network interface returned is the primary network interface.
  public networkInterfaceIds?: Array<string>;

  // Specifies the VPC route tables in which your file system's endpoints will be created. You should specify all VPC route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
  public routeTableIds?: Array<string>;

  // A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
  public securityGroupIds?: Array<string>;

  // A list of IDs for the subnets that the file system will be accessible from. Up to 2 subnets can be provided.
  public subnetIds?: Array<string>;

  // Identifier of the Virtual Private Cloud for the file system.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "storageCapacity",
        "The storage capacity (GiB) of the file system. Valid values between `1024` and `196608`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dailyAutomaticBackupStartTime",
        "A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. Requires `automatic_backup_retention_days` to be set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "fsxAdminPassword",
        "The ONTAP administrative password for the fsxadmin user that you can use to administer your file system using the ONTAP CLI and REST API.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "throughputCapacityPerHaPair",
        "Sets the throughput capacity (in MBps) for the file system that you're creating. Valid values are `3072`,`6144`. This parameter should only be used when specifying the ha_pairs parameter. Either throughput_capacity or throughput_capacity_per_ha_pair must be specified.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "automaticBackupRetentionDays",
        "The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredSubnetId",
        "The ID for a subnet. A subnet is a range of IP addresses in your virtual private cloud (VPC).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "A list of IDs for the subnets that the file system will be accessible from. Up to 2 subnets can be provided.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "deploymentType",
        "The filesystem deployment type. Supports `MULTI_AZ_1` and `SINGLE_AZ_1`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "haPairs",
        "The number of ha_pairs to deploy for the file system. Valid values are 1 through 6. Recommend only using this parameter for 2 or more ha pairs.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the file system. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "weeklyMaintenanceStartTime",
        "The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointIpAddressRange",
        "Specifies the IP address range in which the endpoints to access your file system will be created. By default, Amazon FSx selects an unused IP address range for you from the 198.19.* range.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "routeTableIds",
        "Specifies the VPC route tables in which your file system's endpoints will be created. You should specify all VPC route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageType",
        "The filesystem storage type. defaults to `SSD`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "ARN for the KMS Key to encrypt the file system at rest, Defaults to an AWS managed KMS Key.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "throughputCapacity",
        "Sets the throughput capacity (in MBps) for the file system that you're creating. Valid values are `128`, `256`, `512`, `1024`, `2048`, and `4096`. This parameter should only be used when specifying not using the ha_pairs parameter. Either throughput_capacity or throughput_capacity_per_ha_pair must be specified.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "diskIopsConfiguration",
        "The SSD IOPS configuration for the Amazon FSx for NetApp ONTAP file system. See Disk Iops Configuration below.",
        fsx_OntapFileSystemDiskIopsConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
