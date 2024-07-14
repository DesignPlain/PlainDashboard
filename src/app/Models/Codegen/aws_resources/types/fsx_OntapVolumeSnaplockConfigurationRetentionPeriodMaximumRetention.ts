import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention {
  // The amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.
  value?: number;

  // The type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. Setting this value to `NONE` disables autocommit. Valid values: `MINUTES`, `HOURS`, `DAYS`, `MONTHS`, `YEARS`, `NONE`.
  type?: string;
}

export function fsx_OntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "value",
      "The amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. Setting this value to `NONE` disables autocommit. Valid values: `MINUTES`, `HOURS`, `DAYS`, `MONTHS`, `YEARS`, `NONE`.",
      [],
      false,
      false,
    ),
  ];
}
