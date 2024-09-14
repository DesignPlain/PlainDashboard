import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  fsx_OntapVolumeTieringPolicy,
  fsx_OntapVolumeTieringPolicy_GetTypes,
} from "../types/fsx_OntapVolumeTieringPolicy";
import {
  fsx_OntapVolumeAggregateConfiguration,
  fsx_OntapVolumeAggregateConfiguration_GetTypes,
} from "../types/fsx_OntapVolumeAggregateConfiguration";
import {
  fsx_OntapVolumeSnaplockConfiguration,
  fsx_OntapVolumeSnaplockConfiguration_GetTypes,
} from "../types/fsx_OntapVolumeSnaplockConfiguration";

export interface OntapVolumeArgs {
  // A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to `false`.
  copyTagsToBackups?: boolean;

  // A map of tags to apply to the volume's final backup.
  finalBackupTags?: Map<string, string>;

  // Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume.
  storageEfficiencyEnabled?: boolean;

  // Specifies the styles of volume, valid values are `FLEXVOL`, `FLEXGROUP`. Default value is `FLEXVOL`. FLEXGROUPS have a larger minimum and maximum size. See Volume Styles for more details. [Volume Styles](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-styles.html)
  volumeStyle?: string;

  // Specifies the location in the storage virtual machine's namespace where the volume is mounted. The junction_path must have a leading forward slash, such as `/vol3`
  junctionPath?: string;

  // Specifies the type of volume, valid values are `RW`, `DP`. Default value is `RW`. These can be set by the ONTAP CLI or API. This setting is used as part of migration and replication [Migrating to Amazon FSx for NetApp ONTAP](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/migrating-fsx-ontap.html)
  ontapVolumeType?: string;

  /*
Specifies the storage virtual machine in which to create the volume.

The following arguments are optional:
*/
  storageVirtualMachineId?: string;

  // A map of tags to assign to the volume. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The type of volume, currently the only valid value is `ONTAP`.
  volumeType?: string;

  // The name of the Volume. You can use a maximum of 203 alphanumeric characters, plus the underscore (_) special character.
  name?: string;

  // Specifies the size of the volume, in megabytes (MB), that you are creating. Supported when creating volumes under 2 PB. Either size_in_bytes or size_in_megabytes must be specified. Minimum size for `FLEXGROUP` volumes are 100GiB per constituent.
  sizeInMegabytes?: number;

  // When enabled, will skip the default final backup taken when the volume is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  skipFinalBackup?: boolean;

  // The SnapLock configuration for an FSx for ONTAP volume. See `snaplock_configuration` Block for details.
  snaplockConfiguration?: fsx_OntapVolumeSnaplockConfiguration;

  // The data tiering policy for an FSx for ONTAP volume. See `tiering_policy` Block for details.
  tieringPolicy?: fsx_OntapVolumeTieringPolicy;

  // The Aggregate configuration only applies to `FLEXGROUP` volumes. See [`aggregate_configuration` Block] for details.
  aggregateConfiguration?: fsx_OntapVolumeAggregateConfiguration;

  // Setting this to `true` allows a SnapLock administrator to delete an FSx for ONTAP SnapLock Enterprise volume with unexpired write once, read many (WORM) files. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  bypassSnaplockEnterpriseRetention?: boolean;

  // Specifies the volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`.
  securityStyle?: string;

  // Specifies the size of the volume, in megabytes (MB), that you are creating. Can be used for any size but required for volumes over 2 PB. Either size_in_bytes or size_in_megabytes must be specified. Minimum size for `FLEXGROUP` volumes are 100GiB per constituent.
  sizeInBytes?: string;

  // Specifies the snapshot policy for the volume. See [snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx ONTAP User Guide
  snapshotPolicy?: string;
}
export class OntapVolume extends DS_Resource {
  // Specifies the styles of volume, valid values are `FLEXVOL`, `FLEXGROUP`. Default value is `FLEXVOL`. FLEXGROUPS have a larger minimum and maximum size. See Volume Styles for more details. [Volume Styles](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-styles.html)
  public volumeStyle?: string;

  // Describes the file system for the volume, e.g. `fs-12345679`
  public fileSystemId?: string;

  // Specifies the volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`.
  public securityStyle?: string;

  // Specifies the size of the volume, in megabytes (MB), that you are creating. Can be used for any size but required for volumes over 2 PB. Either size_in_bytes or size_in_megabytes must be specified. Minimum size for `FLEXGROUP` volumes are 100GiB per constituent.
  public sizeInBytes?: string;

  // Specifies the size of the volume, in megabytes (MB), that you are creating. Supported when creating volumes under 2 PB. Either size_in_bytes or size_in_megabytes must be specified. Minimum size for `FLEXGROUP` volumes are 100GiB per constituent.
  public sizeInMegabytes?: number;

  // When enabled, will skip the default final backup taken when the volume is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  public skipFinalBackup?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Volume's UUID (universally unique identifier).
  public uuid?: string;

  // The Aggregate configuration only applies to `FLEXGROUP` volumes. See [`aggregate_configuration` Block] for details.
  public aggregateConfiguration?: fsx_OntapVolumeAggregateConfiguration;

  // A map of tags to apply to the volume's final backup.
  public finalBackupTags?: Map<string, string>;

  // Specifies the location in the storage virtual machine's namespace where the volume is mounted. The junction_path must have a leading forward slash, such as `/vol3`
  public junctionPath?: string;

  // Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume.
  public storageEfficiencyEnabled?: boolean;

  /*
Specifies the storage virtual machine in which to create the volume.

The following arguments are optional:
*/
  public storageVirtualMachineId?: string;

  // Amazon Resource Name of the volune.
  public arn?: string;

  // Setting this to `true` allows a SnapLock administrator to delete an FSx for ONTAP SnapLock Enterprise volume with unexpired write once, read many (WORM) files. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  public bypassSnaplockEnterpriseRetention?: boolean;

  // The name of the Volume. You can use a maximum of 203 alphanumeric characters, plus the underscore (_) special character.
  public name?: string;

  // Specifies the type of volume, valid values are `RW`, `DP`. Default value is `RW`. These can be set by the ONTAP CLI or API. This setting is used as part of migration and replication [Migrating to Amazon FSx for NetApp ONTAP](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/migrating-fsx-ontap.html)
  public ontapVolumeType?: string;

  // The data tiering policy for an FSx for ONTAP volume. See `tiering_policy` Block for details.
  public tieringPolicy?: fsx_OntapVolumeTieringPolicy;

  // The type of volume, currently the only valid value is `ONTAP`.
  public volumeType?: string;

  // A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to `false`.
  public copyTagsToBackups?: boolean;

  // Specifies the FlexCache endpoint type of the volume, Valid values are `NONE`, `ORIGIN`, `CACHE`. Default value is `NONE`. These can be set by the ONTAP CLI or API and are use with FlexCache feature.
  public flexcacheEndpointType?: string;

  // The SnapLock configuration for an FSx for ONTAP volume. See `snaplock_configuration` Block for details.
  public snaplockConfiguration?: fsx_OntapVolumeSnaplockConfiguration;

  // Specifies the snapshot policy for the volume. See [snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx ONTAP User Guide
  public snapshotPolicy?: string;

  // A map of tags to assign to the volume. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "storageVirtualMachineId",
        "Specifies the storage virtual machine in which to create the volume.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotPolicy",
        "Specifies the snapshot policy for the volume. See [snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx ONTAP User Guide",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "copyTagsToBackups",
        "A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "finalBackupTags",
        "A map of tags to apply to the volume's final backup.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Volume. You can use a maximum of 203 alphanumeric characters, plus the underscore (_) special character.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "snaplockConfiguration",
        "The SnapLock configuration for an FSx for ONTAP volume. See `snaplock_configuration` Block for details.",
        () => fsx_OntapVolumeSnaplockConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tieringPolicy",
        "The data tiering policy for an FSx for ONTAP volume. See `tiering_policy` Block for details.",
        () => fsx_OntapVolumeTieringPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "aggregateConfiguration",
        "The Aggregate configuration only applies to `FLEXGROUP` volumes. See [`aggregate_configuration` Block] for details.",
        () => fsx_OntapVolumeAggregateConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "bypassSnaplockEnterpriseRetention",
        "Setting this to `true` allows a SnapLock administrator to delete an FSx for ONTAP SnapLock Enterprise volume with unexpired write once, read many (WORM) files. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "storageEfficiencyEnabled",
        "Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "volumeStyle",
        "Specifies the styles of volume, valid values are `FLEXVOL`, `FLEXGROUP`. Default value is `FLEXVOL`. FLEXGROUPS have a larger minimum and maximum size. See Volume Styles for more details. [Volume Styles](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-styles.html)",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ontapVolumeType",
        "Specifies the type of volume, valid values are `RW`, `DP`. Default value is `RW`. These can be set by the ONTAP CLI or API. This setting is used as part of migration and replication [Migrating to Amazon FSx for NetApp ONTAP](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/migrating-fsx-ontap.html)",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "volumeType",
        "The type of volume, currently the only valid value is `ONTAP`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "sizeInMegabytes",
        "Specifies the size of the volume, in megabytes (MB), that you are creating. Supported when creating volumes under 2 PB. Either size_in_bytes or size_in_megabytes must be specified. Minimum size for `FLEXGROUP` volumes are 100GiB per constituent.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipFinalBackup",
        "When enabled, will skip the default final backup taken when the volume is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityStyle",
        "Specifies the volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sizeInBytes",
        "Specifies the size of the volume, in megabytes (MB), that you are creating. Can be used for any size but required for volumes over 2 PB. Either size_in_bytes or size_in_megabytes must be specified. Minimum size for `FLEXGROUP` volumes are 100GiB per constituent.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "junctionPath",
        "Specifies the location in the storage virtual machine's namespace where the volume is mounted. The junction_path must have a leading forward slash, such as `/vol3`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the volume. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
