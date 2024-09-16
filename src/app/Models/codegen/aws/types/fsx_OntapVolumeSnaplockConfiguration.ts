import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriod,
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriod_GetTypes,
} from './fsx_OntapVolumeSnaplockConfigurationRetentionPeriod';
import {
  fsx_OntapVolumeSnaplockConfigurationAutocommitPeriod,
  fsx_OntapVolumeSnaplockConfigurationAutocommitPeriod_GetTypes,
} from './fsx_OntapVolumeSnaplockConfigurationAutocommitPeriod';

export interface fsx_OntapVolumeSnaplockConfiguration {
  // Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. Valid values: `DISABLED`, `ENABLED`, `PERMANENTLY_DISABLED`. The default value is `DISABLED`.
  privilegedDelete?: string;

  // The retention period of an FSx for ONTAP SnapLock volume. See `retention_period` Block for details.
  retentionPeriod?: fsx_OntapVolumeSnaplockConfigurationRetentionPeriod;

  // Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. Valid values: `COMPLIANCE`, `ENTERPRISE`.
  snaplockType?: string;

  // Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. The default value is `false`.
  volumeAppendModeEnabled?: boolean;

  // Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. The default value is `false`.
  auditLogVolume?: boolean;

  // The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume. See `autocommit_period` Block for details.
  autocommitPeriod?: fsx_OntapVolumeSnaplockConfigurationAutocommitPeriod;
}

export function fsx_OntapVolumeSnaplockConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'retentionPeriod',
      'The retention period of an FSx for ONTAP SnapLock volume. See `retention_period` Block for details.',
      () => fsx_OntapVolumeSnaplockConfigurationRetentionPeriod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'snaplockType',
      "Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. Valid values: `COMPLIANCE`, `ENTERPRISE`.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'volumeAppendModeEnabled',
      'Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. The default value is `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'auditLogVolume',
      'Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. The default value is `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'autocommitPeriod',
      'The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume. See `autocommit_period` Block for details.',
      () => fsx_OntapVolumeSnaplockConfigurationAutocommitPeriod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'privilegedDelete',
      'Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. Valid values: `DISABLED`, `ENABLED`, `PERMANENTLY_DISABLED`. The default value is `DISABLED`.',
      () => [],
      false,
      false,
    ),
  ];
}
