import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fsx_OpenZfsFileSystemRootVolumeConfiguration,
  fsx_OpenZfsFileSystemRootVolumeConfiguration_GetTypes,
} from "../types/fsx_OpenZfsFileSystemRootVolumeConfiguration";
import {
  fsx_OpenZfsFileSystemDiskIopsConfiguration,
  fsx_OpenZfsFileSystemDiskIopsConfiguration_GetTypes,
} from "../types/fsx_OpenZfsFileSystemDiskIopsConfiguration";

export interface OpenZfsFileSystemArgs {
  // The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days.
  automaticBackupRetentionDays?: number;

  // A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. Requires `automatic_backup_retention_days` to be set.
  dailyAutomaticBackupStartTime?: string;

  // The filesystem storage type. Only `SSD` is supported.
  storageType?: string;

  // A map of tags to assign to the file system. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
  weeklyMaintenanceStartTime?: string;

  // (Multi-AZ only) Required when `deployment_type` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located.
  preferredSubnetId?: string;

  // (Multi-AZ only) Specifies the route tables in which Amazon FSx creates the rules for routing traffic to the correct file server. You should specify all virtual private cloud (VPC) route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
  routeTableIds?: Array<string>;

  // The storage capacity (GiB) of the file system. Valid values between `64` and `524288`.
  storageCapacity?: number;

  // When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  skipFinalBackup?: boolean;

  // A list of IDs for the subnets that the file system will be accessible from.
  subnetIds?: string;

  // Throughput (MB/s) of the file system. Valid values depend on `deployment_type`. Must be one of `64`, `128`, `256`, `512`, `1024`, `2048`, `3072`, `4096` for `SINGLE_AZ_1`. Must be one of `160`, `320`, `640`, `1280`, `2560`, `3840`, `5120`, `7680`, `10240` for `SINGLE_AZ_2`.
  throughputCapacity?: number;

  // A boolean flag indicating whether tags for the file system should be copied to backups. The default value is false.
  copyTagsToBackups?: boolean;

  // The SSD IOPS configuration for the Amazon FSx for OpenZFS file system. See Disk Iops Configuration below.
  diskIopsConfiguration?: fsx_OpenZfsFileSystemDiskIopsConfiguration;

  // ARN for the KMS Key to encrypt the file system at rest, Defaults to an AWS managed KMS Key.
  kmsKeyId?: string;

  // (Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created.
  endpointIpAddressRange?: string;

  // The configuration for the root volume of the file system. All other volumes are children or the root volume. See Root Volume Configuration below.
  rootVolumeConfiguration?: fsx_OpenZfsFileSystemRootVolumeConfiguration;

  // A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
  securityGroupIds?: Array<string>;

  // The ID of the source backup to create the filesystem from.
  backupId?: string;

  // A boolean flag indicating whether tags for the file system should be copied to snapshots. The default value is false.
  copyTagsToVolumes?: boolean;

  // The filesystem deployment type. Valid values: `SINGLE_AZ_1`, `SINGLE_AZ_2` and `MULTI_AZ_1`.
  deploymentType?: string;
}
export class OpenZfsFileSystem extends Resource {
  // The filesystem storage type. Only `SSD` is supported.
  public storageType?: string;

  // Amazon Resource Name of the file system.
  public arn?: string;

  // AWS account identifier that created the file system.
  public ownerId?: string;

  // When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  public skipFinalBackup?: boolean;

  // A map of tags to assign to the file system. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days.
  public automaticBackupRetentionDays?: number;

  // DNS name for the file system, e.g., `fs-12345678.fsx.us-west-2.amazonaws.com`
  public dnsName?: string;

  // (Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created.
  public endpointIpAddressRange?: string;

  // The ID of the source backup to create the filesystem from.
  public backupId?: string;

  // A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. Requires `automatic_backup_retention_days` to be set.
  public dailyAutomaticBackupStartTime?: string;

  // Identifier of the Virtual Private Cloud for the file system.
  public vpcId?: string;

  // (Multi-AZ only) Specifies the route tables in which Amazon FSx creates the rules for routing traffic to the correct file server. You should specify all virtual private cloud (VPC) route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
  public routeTableIds?: Array<string>;

  // A boolean flag indicating whether tags for the file system should be copied to snapshots. The default value is false.
  public copyTagsToVolumes?: boolean;

  // The filesystem deployment type. Valid values: `SINGLE_AZ_1`, `SINGLE_AZ_2` and `MULTI_AZ_1`.
  public deploymentType?: string;

  // Set of Elastic Network Interface identifiers from which the file system is accessible The first network interface returned is the primary network interface.
  public networkInterfaceIds?: Array<string>;

  // The configuration for the root volume of the file system. All other volumes are children or the root volume. See Root Volume Configuration below.
  public rootVolumeConfiguration?: fsx_OpenZfsFileSystemRootVolumeConfiguration;

  // Identifier of the root volume, e.g., `fsvol-12345678`
  public rootVolumeId?: string;

  // The storage capacity (GiB) of the file system. Valid values between `64` and `524288`.
  public storageCapacity?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A boolean flag indicating whether tags for the file system should be copied to backups. The default value is false.
  public copyTagsToBackups?: boolean;

  // ARN for the KMS Key to encrypt the file system at rest, Defaults to an AWS managed KMS Key.
  public kmsKeyId?: string;

  // (Multi-AZ only) Required when `deployment_type` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located.
  public preferredSubnetId?: string;

  // A list of IDs for the subnets that the file system will be accessible from.
  public subnetIds?: string;

  // The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
  public weeklyMaintenanceStartTime?: string;

  // The SSD IOPS configuration for the Amazon FSx for OpenZFS file system. See Disk Iops Configuration below.
  public diskIopsConfiguration?: fsx_OpenZfsFileSystemDiskIopsConfiguration;

  // A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
  public securityGroupIds?: Array<string>;

  // Throughput (MB/s) of the file system. Valid values depend on `deployment_type`. Must be one of `64`, `128`, `256`, `512`, `1024`, `2048`, `3072`, `4096` for `SINGLE_AZ_1`. Must be one of `160`, `320`, `640`, `1280`, `2560`, `3840`, `5120`, `7680`, `10240` for `SINGLE_AZ_2`.
  public throughputCapacity?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "weeklyMaintenanceStartTime",
        "The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "routeTableIds",
        "(Multi-AZ only) Specifies the route tables in which Amazon FSx creates the rules for routing traffic to the correct file server. You should specify all virtual private cloud (VPC) route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "storageCapacity",
        "The storage capacity (GiB) of the file system. Valid values between `64` and `524288`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "diskIopsConfiguration",
        "The SSD IOPS configuration for the Amazon FSx for OpenZFS file system. See Disk Iops Configuration below.",
        fsx_OpenZfsFileSystemDiskIopsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "backupId",
        "The ID of the source backup to create the filesystem from.",
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
        "dailyAutomaticBackupStartTime",
        "A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. Requires `automatic_backup_retention_days` to be set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredSubnetId",
        "(Multi-AZ only) Required when `deployment_type` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rootVolumeConfiguration",
        "The configuration for the root volume of the file system. All other volumes are children or the root volume. See Root Volume Configuration below.",
        fsx_OpenZfsFileSystemRootVolumeConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipFinalBackup",
        "When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "copyTagsToBackups",
        "A boolean flag indicating whether tags for the file system should be copied to backups. The default value is false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointIpAddressRange",
        "(Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "deploymentType",
        "The filesystem deployment type. Valid values: `SINGLE_AZ_1`, `SINGLE_AZ_2` and `MULTI_AZ_1`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageType",
        "The filesystem storage type. Only `SSD` is supported.",
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
        "subnetIds",
        "A list of IDs for the subnets that the file system will be accessible from.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "throughputCapacity",
        "Throughput (MB/s) of the file system. Valid values depend on `deployment_type`. Must be one of `64`, `128`, `256`, `512`, `1024`, `2048`, `3072`, `4096` for `SINGLE_AZ_1`. Must be one of `160`, `320`, `640`, `1280`, `2560`, `3840`, `5120`, `7680`, `10240` for `SINGLE_AZ_2`.",
        [],
        true,
        false,
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
        InputType.Array,
        "securityGroupIds",
        "A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "copyTagsToVolumes",
        "A boolean flag indicating whether tags for the file system should be copied to snapshots. The default value is false.",
        [],
        false,
        false,
      ),
    ];
  }
}
