import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  quicksight_RefreshScheduleScheduleScheduleFrequencyRefreshOnDay,
  quicksight_RefreshScheduleScheduleScheduleFrequencyRefreshOnDay_GetTypes,
} from "./quicksight_RefreshScheduleScheduleScheduleFrequencyRefreshOnDay";

export interface quicksight_RefreshScheduleScheduleScheduleFrequency {
  // The [refresh on entity](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ScheduleRefreshOnEntity.html) configuration for weekly or monthly schedules. See refresh_on_day.
  refreshOnDay?: quicksight_RefreshScheduleScheduleScheduleFrequencyRefreshOnDay;

  // The time of day that you want the dataset to refresh. This value is expressed in `HH:MM` format. This field is not required for schedules that refresh hourly.
  timeOfTheDay?: string;

  // The timezone that you want the refresh schedule to use.
  timezone?: string;

  // The interval between scheduled refreshes. Valid values are `MINUTE15`, `MINUTE30`, `HOURLY`, `DAILY`, `WEEKLY` and `MONTHLY`.
  interval?: string;
}

export function quicksight_RefreshScheduleScheduleScheduleFrequency_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "timeOfTheDay",
      "The time of day that you want the dataset to refresh. This value is expressed in `HH:MM` format. This field is not required for schedules that refresh hourly.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timezone",
      "The timezone that you want the refresh schedule to use.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "interval",
      "The interval between scheduled refreshes. Valid values are `MINUTE15`, `MINUTE30`, `HOURLY`, `DAILY`, `WEEKLY` and `MONTHLY`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "refreshOnDay",
      "The [refresh on entity](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ScheduleRefreshOnEntity.html) configuration for weekly or monthly schedules. See refresh_on_day.",
      quicksight_RefreshScheduleScheduleScheduleFrequencyRefreshOnDay_GetTypes(),
      false,
      false,
    ),
  ];
}
