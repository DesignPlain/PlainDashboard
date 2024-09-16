import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports,
  fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports_GetTypes,
} from './fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports';
import {
  fsx_OpenZfsFileSystemRootVolumeConfigurationUserAndGroupQuota,
  fsx_OpenZfsFileSystemRootVolumeConfigurationUserAndGroupQuota_GetTypes,
} from './fsx_OpenZfsFileSystemRootVolumeConfigurationUserAndGroupQuota';

export interface fsx_OpenZfsFileSystemRootVolumeConfiguration {
  // Method used to compress the data on the volume. Valid values are `LZ4`, `NONE` or `ZSTD`. Child volumes that don't specify compression option will inherit from parent volume. This option on file system applies to the root volume.
  dataCompressionType?: string;

  // NFS export configuration for the root volume. Exactly 1 item. See `nfs_exports` Block for details.
  nfsExports?: fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports;

  // specifies whether the volume is read-only. Default is false.
  readOnly?: boolean;

  // Specifies the record size of an OpenZFS root volume, in kibibytes (KiB). Valid values are `4`, `8`, `16`, `32`, `64`, `128`, `256`, `512`, or `1024` KiB. The default is `128` KiB.
  recordSizeKib?: number;

  // Specify how much storage users or groups can use on the volume. Maximum of 100 items. See `user_and_group_quotas` Block for details.
  userAndGroupQuotas?: Array<fsx_OpenZfsFileSystemRootVolumeConfigurationUserAndGroupQuota>;

  // A boolean flag indicating whether tags for the file system should be copied to snapshots. The default value is false.
  copyTagsToSnapshots?: boolean;
}

export function fsx_OpenZfsFileSystemRootVolumeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
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
      'dataCompressionType',
      "Method used to compress the data on the volume. Valid values are `LZ4`, `NONE` or `ZSTD`. Child volumes that don't specify compression option will inherit from parent volume. This option on file system applies to the root volume.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'nfsExports',
      'NFS export configuration for the root volume. Exactly 1 item. See `nfs_exports` Block for details.',
      () => fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExports_GetTypes(),
      false,
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
      InputType.Number,
      'recordSizeKib',
      'Specifies the record size of an OpenZFS root volume, in kibibytes (KiB). Valid values are `4`, `8`, `16`, `32`, `64`, `128`, `256`, `512`, or `1024` KiB. The default is `128` KiB.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'userAndGroupQuotas',
      'Specify how much storage users or groups can use on the volume. Maximum of 100 items. See `user_and_group_quotas` Block for details.',
      () =>
        fsx_OpenZfsFileSystemRootVolumeConfigurationUserAndGroupQuota_GetTypes(),
      false,
      false,
    ),
  ];
}
