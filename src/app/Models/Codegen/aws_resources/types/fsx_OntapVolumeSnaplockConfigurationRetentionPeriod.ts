import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention,
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention_GetTypes,
} from "./fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention";
import {
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention,
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention_GetTypes,
} from "./fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention";
import {
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention,
  fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention_GetTypes,
} from "./fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention";

export interface fsx_OntapVolumeSnaplockConfigurationRetentionPeriod {
  // The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. The default retention period must be greater than or equal to the minimum retention period and less than or equal to the maximum retention period. See Retention Period below.
  defaultRetention?: fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention;

  // The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. See Retention Period below.
  maximumRetention?: fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention;

  // The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. See Retention Period below.
  minimumRetention?: fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention;
}

export function fsx_OntapVolumeSnaplockConfigurationRetentionPeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultRetention",
      "The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. The default retention period must be greater than or equal to the minimum retention period and less than or equal to the maximum retention period. See Retention Period below.",
      fsx_OntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "maximumRetention",
      "The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. See Retention Period below.",
      fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "minimumRetention",
      "The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. See Retention Period below.",
      fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention_GetTypes(),
      false,
      false,
    ),
  ];
}
