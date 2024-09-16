import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fsx_WindowsFileSystemAuditLogConfiguration,
  fsx_WindowsFileSystemAuditLogConfiguration_GetTypes,
} from '../types/fsx_WindowsFileSystemAuditLogConfiguration';
import {
  fsx_WindowsFileSystemDiskIopsConfiguration,
  fsx_WindowsFileSystemDiskIopsConfiguration_GetTypes,
} from '../types/fsx_WindowsFileSystemDiskIopsConfiguration';
import {
  fsx_WindowsFileSystemSelfManagedActiveDirectory,
  fsx_WindowsFileSystemSelfManagedActiveDirectory_GetTypes,
} from '../types/fsx_WindowsFileSystemSelfManagedActiveDirectory';

export interface WindowsFileSystemArgs {
  // The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. See `audit_log_configuration` Block for details.
  auditLogConfiguration?: fsx_WindowsFileSystemAuditLogConfiguration;

  // A map of tags to apply to the file system's final backup.
  finalBackupTags?: Map<string, string>;

  // A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
  securityGroupIds?: Array<string>;

  // A list of IDs for the subnets that the file system will be accessible from. To specify more than a single subnet set `deployment_type` to `MULTI_AZ_1`.
  subnetIds?: Array<string>;

  /*
Throughput (megabytes per second) of the file system in power of 2 increments. Minimum of `8` and maximum of `2048`.

The following arguments are optional:
*/
  throughputCapacity?: number;

  // An array DNS alias names that you want to associate with the Amazon FSx file system.  For more information, see [Working with DNS Aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html)
  aliases?: Array<string>;

  // Specifies the file system deployment type, valid values are `MULTI_AZ_1`, `SINGLE_AZ_1` and `SINGLE_AZ_2`. Default value is `SINGLE_AZ_1`.
  deploymentType?: string;

  // The SSD IOPS configuration for the Amazon FSx for Windows File Server file system. See `disk_iops_configuration` Block for details.
  diskIopsConfiguration?: fsx_WindowsFileSystemDiskIopsConfiguration;

  // Specifies the subnet in which you want the preferred file server to be located. Required for when deployment type is `MULTI_AZ_1`.
  preferredSubnetId?: string;

  // Storage capacity (GiB) of the file system. Minimum of 32 and maximum of 65536. If the storage type is set to `HDD` the minimum value is 2000. Required when not creating filesystem for a backup.
  storageCapacity?: number;

  // Specifies the storage type, Valid values are `SSD` and `HDD`. `HDD` is supported on `SINGLE_AZ_2` and `MULTI_AZ_1` Windows file system deployment types. Default value is `SSD`.
  storageType?: string;

  // The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
  weeklyMaintenanceStartTime?: string;

  // A boolean flag indicating whether tags on the file system should be copied to backups. Defaults to `false`.
  copyTagsToBackups?: boolean;

  // ARN for the KMS Key to encrypt the file system at rest. Defaults to an AWS managed KMS Key.
  kmsKeyId?: string;

  // When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  skipFinalBackup?: boolean;

  // The preferred time (in `HH:MM` format) to take daily automatic backups, in the UTC time zone.
  dailyAutomaticBackupStartTime?: string;

  // The number of days to retain automatic backups. Minimum of `0` and maximum of `90`. Defaults to `7`. Set to `0` to disable.
  automaticBackupRetentionDays?: number;

  // The ID of the source backup to create the filesystem from.
  backupId?: string;

  // Configuration block that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. Cannot be specified with `active_directory_id`. See `self_managed_active_directory` Block for details.
  selfManagedActiveDirectory?: fsx_WindowsFileSystemSelfManagedActiveDirectory;

  // A map of tags to assign to the file system. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID for an existing Microsoft Active Directory instance that the file system should join when it's created. Cannot be specified with `self_managed_active_directory`.
  activeDirectoryId?: string;
}
export class WindowsFileSystem extends DS_Resource {
  // The number of days to retain automatic backups. Minimum of `0` and maximum of `90`. Defaults to `7`. Set to `0` to disable.
  public automaticBackupRetentionDays?: number;

  // A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
  public securityGroupIds?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies the file system deployment type, valid values are `MULTI_AZ_1`, `SINGLE_AZ_1` and `SINGLE_AZ_2`. Default value is `SINGLE_AZ_1`.
  public deploymentType?: string;

  // Specifies the storage type, Valid values are `SSD` and `HDD`. `HDD` is supported on `SINGLE_AZ_2` and `MULTI_AZ_1` Windows file system deployment types. Default value is `SSD`.
  public storageType?: string;

  // A map of tags to apply to the file system's final backup.
  public finalBackupTags?: Map<string, string>;

  // A map of tags to assign to the file system. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // An array DNS alias names that you want to associate with the Amazon FSx file system.  For more information, see [Working with DNS Aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html)
  public aliases?: Array<string>;

  // The SSD IOPS configuration for the Amazon FSx for Windows File Server file system. See `disk_iops_configuration` Block for details.
  public diskIopsConfiguration?: fsx_WindowsFileSystemDiskIopsConfiguration;

  // The ID of the source backup to create the filesystem from.
  public backupId?: string;

  // For `MULTI_AZ_1` deployment types, use this endpoint when performing administrative tasks on the file system using Amazon FSx Remote PowerShell. For `SINGLE_AZ_1` deployment types, this is the DNS name of the file system.
  public remoteAdministrationEndpoint?: string;

  // When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  public skipFinalBackup?: boolean;

  /*
Throughput (megabytes per second) of the file system in power of 2 increments. Minimum of `8` and maximum of `2048`.

The following arguments are optional:
*/
  public throughputCapacity?: number;

  // The ID for an existing Microsoft Active Directory instance that the file system should join when it's created. Cannot be specified with `self_managed_active_directory`.
  public activeDirectoryId?: string;

  // Amazon Resource Name of the file system.
  public arn?: string;

  // Identifier of the Virtual Private Cloud for the file system.
  public vpcId?: string;

  // The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
  public weeklyMaintenanceStartTime?: string;

  // Set of Elastic Network Interface identifiers from which the file system is accessible.
  public networkInterfaceIds?: Array<string>;

  // Storage capacity (GiB) of the file system. Minimum of 32 and maximum of 65536. If the storage type is set to `HDD` the minimum value is 2000. Required when not creating filesystem for a backup.
  public storageCapacity?: number;

  // DNS name for the file system, e.g., `fs-12345678.corp.example.com` (domain name matching the Active Directory domain name)
  public dnsName?: string;

  // The IP address of the primary, or preferred, file server.
  public preferredFileServerIp?: string;

  // Specifies the subnet in which you want the preferred file server to be located. Required for when deployment type is `MULTI_AZ_1`.
  public preferredSubnetId?: string;

  // Configuration block that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. Cannot be specified with `active_directory_id`. See `self_managed_active_directory` Block for details.
  public selfManagedActiveDirectory?: fsx_WindowsFileSystemSelfManagedActiveDirectory;

  // The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. See `audit_log_configuration` Block for details.
  public auditLogConfiguration?: fsx_WindowsFileSystemAuditLogConfiguration;

  // The preferred time (in `HH:MM` format) to take daily automatic backups, in the UTC time zone.
  public dailyAutomaticBackupStartTime?: string;

  // AWS account identifier that created the file system.
  public ownerId?: string;

  // A list of IDs for the subnets that the file system will be accessible from. To specify more than a single subnet set `deployment_type` to `MULTI_AZ_1`.
  public subnetIds?: Array<string>;

  // A boolean flag indicating whether tags on the file system should be copied to backups. Defaults to `false`.
  public copyTagsToBackups?: boolean;

  // ARN for the KMS Key to encrypt the file system at rest. Defaults to an AWS managed KMS Key.
  public kmsKeyId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'throughputCapacity',
        'Throughput (megabytes per second) of the file system in power of 2 increments. Minimum of `8` and maximum of `2048`.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'deploymentType',
        'Specifies the file system deployment type, valid values are `MULTI_AZ_1`, `SINGLE_AZ_1` and `SINGLE_AZ_2`. Default value is `SINGLE_AZ_1`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyId',
        'ARN for the KMS Key to encrypt the file system at rest. Defaults to an AWS managed KMS Key.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'copyTagsToBackups',
        'A boolean flag indicating whether tags on the file system should be copied to backups. Defaults to `false`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'activeDirectoryId',
        "The ID for an existing Microsoft Active Directory instance that the file system should join when it's created. Cannot be specified with `self_managed_active_directory`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityGroupIds',
        'A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'storageCapacity',
        'Storage capacity (GiB) of the file system. Minimum of 32 and maximum of 65536. If the storage type is set to `HDD` the minimum value is 2000. Required when not creating filesystem for a backup.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'weeklyMaintenanceStartTime',
        'The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'diskIopsConfiguration',
        'The SSD IOPS configuration for the Amazon FSx for Windows File Server file system. See `disk_iops_configuration` Block for details.',
        () => fsx_WindowsFileSystemDiskIopsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'preferredSubnetId',
        'Specifies the subnet in which you want the preferred file server to be located. Required for when deployment type is `MULTI_AZ_1`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'storageType',
        'Specifies the storage type, Valid values are `SSD` and `HDD`. `HDD` is supported on `SINGLE_AZ_2` and `MULTI_AZ_1` Windows file system deployment types. Default value is `SSD`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'backupId',
        'The ID of the source backup to create the filesystem from.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'selfManagedActiveDirectory',
        'Configuration block that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. Cannot be specified with `active_directory_id`. See `self_managed_active_directory` Block for details.',
        () => fsx_WindowsFileSystemSelfManagedActiveDirectory_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'auditLogConfiguration',
        'The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. See `audit_log_configuration` Block for details.',
        () => fsx_WindowsFileSystemAuditLogConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subnetIds',
        'A list of IDs for the subnets that the file system will be accessible from. To specify more than a single subnet set `deployment_type` to `MULTI_AZ_1`.',
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'aliases',
        'An array DNS alias names that you want to associate with the Amazon FSx file system.  For more information, see [Working with DNS Aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html)',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the file system. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'automaticBackupRetentionDays',
        'The number of days to retain automatic backups. Minimum of `0` and maximum of `90`. Defaults to `7`. Set to `0` to disable.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'finalBackupTags',
        "A map of tags to apply to the file system's final backup.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'skipFinalBackup',
        'When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dailyAutomaticBackupStartTime',
        'The preferred time (in `HH:MM` format) to take daily automatic backups, in the UTC time zone.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
