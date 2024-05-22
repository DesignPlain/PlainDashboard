import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  storage_TransferJobScheduleScheduleEndDate,
  storage_TransferJobScheduleScheduleEndDate_GetTypes,
} from "./storage_TransferJobScheduleScheduleEndDate";
import {
  storage_TransferJobScheduleScheduleStartDate,
  storage_TransferJobScheduleScheduleStartDate_GetTypes,
} from "./storage_TransferJobScheduleScheduleStartDate";
import {
  storage_TransferJobScheduleStartTimeOfDay,
  storage_TransferJobScheduleStartTimeOfDay_GetTypes,
} from "./storage_TransferJobScheduleStartTimeOfDay";

export interface storage_TransferJobSchedule {
  // The last day the recurring transfer will be run. If `schedule_end_date` is the same as `schedule_start_date`, the transfer will be executed only once. Structure documented below.
  scheduleEndDate?: storage_TransferJobScheduleScheduleEndDate;

  // The first day the recurring transfer is scheduled to run. If `schedule_start_date` is in the past, the transfer will run for the first time on the following day. Structure documented below.
  scheduleStartDate?: storage_TransferJobScheduleScheduleStartDate;

  // The time in UTC at which the transfer will be scheduled to start in a day. Transfers may start later than this time. If not specified, recurring and one-time transfers that are scheduled to run today will run immediately; recurring transfers that are scheduled to run on a future date will start at approximately midnight UTC on that date. Note that when configuring a transfer with the Cloud Platform Console, the transfer's start time in a day is specified in your local timezone. Structure documented below.
  startTimeOfDay?: storage_TransferJobScheduleStartTimeOfDay;

  // Interval between the start of each scheduled transfer. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  repeatInterval?: string;
}

export function storage_TransferJobSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "scheduleEndDate",
      "The last day the recurring transfer will be run. If `schedule_end_date` is the same as `schedule_start_date`, the transfer will be executed only once. Structure documented below.",
      storage_TransferJobScheduleScheduleEndDate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scheduleStartDate",
      "The first day the recurring transfer is scheduled to run. If `schedule_start_date` is in the past, the transfer will run for the first time on the following day. Structure documented below.",
      storage_TransferJobScheduleScheduleStartDate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "startTimeOfDay",
      "The time in UTC at which the transfer will be scheduled to start in a day. Transfers may start later than this time. If not specified, recurring and one-time transfers that are scheduled to run today will run immediately; recurring transfers that are scheduled to run on a future date will start at approximately midnight UTC on that date. Note that when configuring a transfer with the Cloud Platform Console, the transfer's start time in a day is specified in your local timezone. Structure documented below.",
      storage_TransferJobScheduleStartTimeOfDay_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repeatInterval",
      "Interval between the start of each scheduled transfer. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
