import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention,
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention_GetTypes,
} from './fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention';
import {
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention,
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention_GetTypes,
} from './fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention';
import {
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention,
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention_GetTypes,
} from './fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention';

export interface fsx_OntapVolumeSnaplockConfigurationRetentionPeriod {
  // The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. The default retention period must be greater than or equal to the minimum retention period and less than or equal to the maximum retention period. See `default_retention` Block for details.
  defaultRetention?: fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention;

  // The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. See `maximum_retention` Block for details.
  maximumRetention?: fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention;

  // The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. See `minimum_retention` Block for details.
  minimumRetention?: fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention;
}

export function fsx_OntapVolumeSnaplockConfigurationRetentionPeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'defaultRetention',
      'The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. The default retention period must be greater than or equal to the minimum retention period and less than or equal to the maximum retention period. See `default_retention` Block for details.',
      () =>
        fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'maximumRetention',
      'The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. See `maximum_retention` Block for details.',
      () =>
        fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'minimumRetention',
      'The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. See `minimum_retention` Block for details.',
      () =>
        fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention_GetTypes(),
      false,
      false,
    ),
  ];
}
