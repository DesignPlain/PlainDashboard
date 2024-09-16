import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fsx_OpenZfsVolumeOriginSnapshot,
  fsx_OpenZfsVolumeOriginSnapshot_GetTypes,
} from '../types/fsx_OpenZfsVolumeOriginSnapshot';
import {
  fsx_OpenZfsVolumeNfsExports,
  fsx_OpenZfsVolumeNfsExports_GetTypes,
} from '../types/fsx_OpenZfsVolumeNfsExports';
import {
  fsx_OpenZfsVolumeUserAndGroupQuota,
  fsx_OpenZfsVolumeUserAndGroupQuota_GetTypes,
} from '../types/fsx_OpenZfsVolumeUserAndGroupQuota';

export interface OpenZfsVolumeArgs {
  // The record size of an OpenZFS volume, in kibibytes (KiB). Valid values are `4`, `8`, `16`, `32`, `64`, `128`, `256`, `512`, or `1024` KiB. The default is `128` KiB.
  recordSizeKib?: number;

  // The maximum amount of storage in gibibytes (GiB) that the volume can use from its parent.
  storageCapacityQuotaGib?: number;

  // The amount of storage in gibibytes (GiB) to reserve from the parent volume.
  storageCapacityReservationGib?: number;

  //
  volumeType?: string;

  // The volume id of volume that will be the parent volume for the volume being created, this could be the root volume created from the `aws.fsx.OpenZfsFileSystem` resource with the `root_volume_id` or the `id` property of another `aws.fsx.OpenZfsVolume`.
  parentVolumeId?: string;

  // specifies whether the volume is read-only. Default is false.
  readOnly?: boolean;

  // NFS export configuration for the root volume. Exactly 1 item. See `nfs_exports` Block Below for details.
  nfsExports?: fsx_OpenZfsVolumeNfsExports;

  // A map of tags to assign to the file system. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A boolean flag indicating whether tags for the file system should be copied to snapshots. The default value is false.
  copyTagsToSnapshots?: boolean;

  // Method used to compress the data on the volume. Valid values are `NONE` or `ZSTD`. Child volumes that don't specify compression option will inherit from parent volume. This option on file system applies to the root volume.
  dataCompressionType?: string;

  // Whether to delete all child volumes and snapshots. Valid values: `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS`. This configuration must be applied separately before attempting to delete the resource to have the desired behavior..
  deleteVolumeOptions?: string;

  // Specify how much storage users or groups can use on the volume. Maximum of 100 items. See `user_and_group_quotas` Block Below.
  userAndGroupQuotas?: Array<fsx_OpenZfsVolumeUserAndGroupQuota>;

  // The name of the Volume. You can use a maximum of 203 alphanumeric characters, plus the underscore (_) special character.
  name?: string;

  // Specifies the configuration to use when creating the OpenZFS volume. See `origin_snapshot` Block below for details.
  originSnapshot?: fsx_OpenZfsVolumeOriginSnapshot;
}
export class OpenZfsVolume extends DS_Resource {
  // The amount of storage in gibibytes (GiB) to reserve from the parent volume.
  public storageCapacityReservationGib?: number;

  // Specify how much storage users or groups can use on the volume. Maximum of 100 items. See `user_and_group_quotas` Block Below.
  public userAndGroupQuotas?: Array<fsx_OpenZfsVolumeUserAndGroupQuota>;

  //
  public volumeType?: string;

  // Amazon Resource Name of the file system.
  public arn?: string;

  // The volume id of volume that will be the parent volume for the volume being created, this could be the root volume created from the `aws.fsx.OpenZfsFileSystem` resource with the `root_volume_id` or the `id` property of another `aws.fsx.OpenZfsVolume`.
  public parentVolumeId?: string;

  // specifies whether the volume is read-only. Default is false.
  public readOnly?: boolean;

  // A map of tags to assign to the file system. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Whether to delete all child volumes and snapshots. Valid values: `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS`. This configuration must be applied separately before attempting to delete the resource to have the desired behavior..
  public deleteVolumeOptions?: string;

  // NFS export configuration for the root volume. Exactly 1 item. See `nfs_exports` Block Below for details.
  public nfsExports?: fsx_OpenZfsVolumeNfsExports;

  // The record size of an OpenZFS volume, in kibibytes (KiB). Valid values are `4`, `8`, `16`, `32`, `64`, `128`, `256`, `512`, or `1024` KiB. The default is `128` KiB.
  public recordSizeKib?: number;

  // A boolean flag indicating whether tags for the file system should be copied to snapshots. The default value is false.
  public copyTagsToSnapshots?: boolean;

  // The name of the Volume. You can use a maximum of 203 alphanumeric characters, plus the underscore (_) special character.
  public name?: string;

  // The maximum amount of storage in gibibytes (GiB) that the volume can use from its parent.
  public storageCapacityQuotaGib?: number;

  // Method used to compress the data on the volume. Valid values are `NONE` or `ZSTD`. Child volumes that don't specify compression option will inherit from parent volume. This option on file system applies to the root volume.
  public dataCompressionType?: string;

  // Specifies the configuration to use when creating the OpenZFS volume. See `origin_snapshot` Block below for details.
  public originSnapshot?: fsx_OpenZfsVolumeOriginSnapshot;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'storageCapacityReservationGib',
        'The amount of storage in gibibytes (GiB) to reserve from the parent volume.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'volumeType',
        '',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'parentVolumeId',
        'The volume id of volume that will be the parent volume for the volume being created, this could be the root volume created from the `aws.fsx.OpenZfsFileSystem` resource with the `root_volume_id` or the `id` property of another `aws.fsx.OpenZfsVolume`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'readOnly',
        'specifies whether the volume is read-only. Default is false.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataCompressionType',
        "Method used to compress the data on the volume. Valid values are `NONE` or `ZSTD`. Child volumes that don't specify compression option will inherit from parent volume. This option on file system applies to the root volume.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the Volume. You can use a maximum of 203 alphanumeric characters, plus the underscore (_) special character.',
        () => [],
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
        InputType.Bool,
        'copyTagsToSnapshots',
        'A boolean flag indicating whether tags for the file system should be copied to snapshots. The default value is false.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'deleteVolumeOptions',
        'Whether to delete all child volumes and snapshots. Valid values: `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS`. This configuration must be applied separately before attempting to delete the resource to have the desired behavior..',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'userAndGroupQuotas',
        'Specify how much storage users or groups can use on the volume. Maximum of 100 items. See `user_and_group_quotas` Block Below.',
        () => fsx_OpenZfsVolumeUserAndGroupQuota_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'originSnapshot',
        'Specifies the configuration to use when creating the OpenZFS volume. See `origin_snapshot` Block below for details.',
        () => fsx_OpenZfsVolumeOriginSnapshot_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'recordSizeKib',
        'The record size of an OpenZFS volume, in kibibytes (KiB). Valid values are `4`, `8`, `16`, `32`, `64`, `128`, `256`, `512`, or `1024` KiB. The default is `128` KiB.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'storageCapacityQuotaGib',
        'The maximum amount of storage in gibibytes (GiB) that the volume can use from its parent.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'nfsExports',
        'NFS export configuration for the root volume. Exactly 1 item. See `nfs_exports` Block Below for details.',
        () => fsx_OpenZfsVolumeNfsExports_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
