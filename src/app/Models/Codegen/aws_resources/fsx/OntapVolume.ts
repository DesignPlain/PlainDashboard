import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fsx_OntapVolumeTieringPolicy,
  fsx_OntapVolumeTieringPolicy_GetTypes,
} from "../types/fsx_OntapVolumeTieringPolicy";
import {
  fsx_OntapVolumeSnaplockConfiguration,
  fsx_OntapVolumeSnaplockConfiguration_GetTypes,
} from "../types/fsx_OntapVolumeSnaplockConfiguration";

export interface OntapVolumeArgs {
  // Specifies the location in the storage virtual machine's namespace where the volume is mounted. The junction_path must have a leading forward slash, such as `/vol3`
  junctionPath?: string;

  // Specifies the snapshot policy for the volume. See [snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx ONTAP User Guide
  snapshotPolicy?: string;

  // Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume.
  storageEfficiencyEnabled?: boolean;

  // Specifies the storage virtual machine in which to create the volume.
  storageVirtualMachineId?: string;

  // The type of volume, currently the only valid value is `ONTAP`.
  volumeType?: string;

  // A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to `false`.
  copyTagsToBackups?: boolean;

  // When enabled, will skip the default final backup taken when the volume is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  skipFinalBackup?: boolean;

  // The data tiering policy for an FSx for ONTAP volume. See Tiering Policy below.
  tieringPolicy?: fsx_OntapVolumeTieringPolicy;

  // Setting this to `true` allows a SnapLock administrator to delete an FSx for ONTAP SnapLock Enterprise volume with unexpired write once, read many (WORM) files. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  bypassSnaplockEnterpriseRetention?: boolean;

  // Specifies the volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`.
  securityStyle?: string;

  // The SnapLock configuration for an FSx for ONTAP volume. See SnapLock Configuration below.
  snaplockConfiguration?: fsx_OntapVolumeSnaplockConfiguration;

  // The name of the Volume. You can use a maximum of 203 alphanumeric characters, plus the underscore (_) special character.
  name?: string;

  // Specifies the type of volume, valid values are `RW`, `DP`. Default value is `RW`. These can be set by the ONTAP CLI or API. This setting is used as part of migration and replication [Migrating to Amazon FSx for NetApp ONTAP](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/migrating-fsx-ontap.html)
  ontapVolumeType?: string;

  // Specifies the size of the volume, in megabytes (MB), that you are creating.
  sizeInMegabytes?: number;

  // A map of tags to assign to the volume. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class OntapVolume extends Resource {
  // Specifies the FlexCache endpoint type of the volume, Valid values are `NONE`, `ORIGIN`, `CACHE`. Default value is `NONE`. These can be set by the ONTAP CLI or API and are use with FlexCache feature.
  public flexcacheEndpointType?: string;

  // Specifies the type of volume, valid values are `RW`, `DP`. Default value is `RW`. These can be set by the ONTAP CLI or API. This setting is used as part of migration and replication [Migrating to Amazon FSx for NetApp ONTAP](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/migrating-fsx-ontap.html)
  public ontapVolumeType?: string;

  // Specifies the storage virtual machine in which to create the volume.
  public storageVirtualMachineId?: string;

  // A map of tags to assign to the volume. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Specifies the snapshot policy for the volume. See [snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx ONTAP User Guide
  public snapshotPolicy?: string;

  // The data tiering policy for an FSx for ONTAP volume. See Tiering Policy below.
  public tieringPolicy?: fsx_OntapVolumeTieringPolicy;

  // The Volume's UUID (universally unique identifier).
  public uuid?: string;

  // The type of volume, currently the only valid value is `ONTAP`.
  public volumeType?: string;

  // Amazon Resource Name of the volune.
  public arn?: string;

  // Specifies the volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`.
  public securityStyle?: string;

  // Specifies the size of the volume, in megabytes (MB), that you are creating.
  public sizeInMegabytes?: number;

  // When enabled, will skip the default final backup taken when the volume is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  public skipFinalBackup?: boolean;

  // Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume.
  public storageEfficiencyEnabled?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Setting this to `true` allows a SnapLock administrator to delete an FSx for ONTAP SnapLock Enterprise volume with unexpired write once, read many (WORM) files. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.
  public bypassSnaplockEnterpriseRetention?: boolean;

  // A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to `false`.
  public copyTagsToBackups?: boolean;

  // Describes the file system for the volume, e.g. `fs-12345679`
  public fileSystemId?: string;

  // Specifies the location in the storage virtual machine's namespace where the volume is mounted. The junction_path must have a leading forward slash, such as `/vol3`
  public junctionPath?: string;

  // The name of the Volume. You can use a maximum of 203 alphanumeric characters, plus the underscore (_) special character.
  public name?: string;

  // The SnapLock configuration for an FSx for ONTAP volume. See SnapLock Configuration below.
  public snaplockConfiguration?: fsx_OntapVolumeSnaplockConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "volumeType",
        "The type of volume, currently the only valid value is `ONTAP`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipFinalBackup",
        "When enabled, will skip the default final backup taken when the volume is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tieringPolicy",
        "The data tiering policy for an FSx for ONTAP volume. See Tiering Policy below.",
        fsx_OntapVolumeTieringPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Volume. You can use a maximum of 203 alphanumeric characters, plus the underscore (_) special character.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the volume. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotPolicy",
        "Specifies the snapshot policy for the volume. See [snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx ONTAP User Guide",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageVirtualMachineId",
        "Specifies the storage virtual machine in which to create the volume.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "bypassSnaplockEnterpriseRetention",
        "Setting this to `true` allows a SnapLock administrator to delete an FSx for ONTAP SnapLock Enterprise volume with unexpired write once, read many (WORM) files. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityStyle",
        "Specifies the volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ontapVolumeType",
        "Specifies the type of volume, valid values are `RW`, `DP`. Default value is `RW`. These can be set by the ONTAP CLI or API. This setting is used as part of migration and replication [Migrating to Amazon FSx for NetApp ONTAP](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/migrating-fsx-ontap.html)",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "sizeInMegabytes",
        "Specifies the size of the volume, in megabytes (MB), that you are creating.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "junctionPath",
        "Specifies the location in the storage virtual machine's namespace where the volume is mounted. The junction_path must have a leading forward slash, such as `/vol3`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "storageEfficiencyEnabled",
        "Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "copyTagsToBackups",
        "A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "snaplockConfiguration",
        "The SnapLock configuration for an FSx for ONTAP volume. See SnapLock Configuration below.",
        fsx_OntapVolumeSnaplockConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
