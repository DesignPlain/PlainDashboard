import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sql_getDatabaseInstanceSettingMaintenanceWindow {
  // Day of week (1-7), starting on Monday
  day?: number;

  // Hour of day (0-23), ignored if day not set
  hour?: number;

  // Receive updates earlier (canary) or later (stable)
  updateTrack?: string;
}

export function sql_getDatabaseInstanceSettingMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'day',
      'Day of week (1-7), starting on Monday',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'hour',
      'Hour of day (0-23), ignored if day not set',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'updateTrack',
      'Receive updates earlier (canary) or later (stable)',
      () => [],
      true,
      false,
    ),
  ];
}
