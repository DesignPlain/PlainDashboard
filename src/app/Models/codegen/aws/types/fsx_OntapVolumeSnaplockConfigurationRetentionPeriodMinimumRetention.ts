import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention {
  // The type of time for the retention period of an FSx for ONTAP SnapLock volume. Set it to one of the valid types. If you set it to `INFINITE`, the files are retained forever. If you set it to `UNSPECIFIED`, the files are retained until you set an explicit retention period. Valid values: `SECONDS`, `MINUTES`, `HOURS`, `DAYS`, `MONTHS`, `YEARS`, `INFINITE`, `UNSPECIFIED`.
  type?: string;

  // The amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.
  value?: number;
}

export function fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of time for the retention period of an FSx for ONTAP SnapLock volume. Set it to one of the valid types. If you set it to `INFINITE`, the files are retained forever. If you set it to `UNSPECIFIED`, the files are retained until you set an explicit retention period. Valid values: `SECONDS`, `MINUTES`, `HOURS`, `DAYS`, `MONTHS`, `YEARS`, `INFINITE`, `UNSPECIFIED`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'value',
      'The amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.',
      () => [],
      false,
      false,
    ),
  ];
}
