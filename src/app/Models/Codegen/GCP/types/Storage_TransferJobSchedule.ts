import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Storage_TransferJobScheduleScheduleStartDate,
  Storage_TransferJobScheduleScheduleStartDate_GetTypes,
} from "./Storage_TransferJobScheduleScheduleStartDate";
import {
  Storage_TransferJobScheduleStartTimeOfDay,
  Storage_TransferJobScheduleStartTimeOfDay_GetTypes,
} from "./Storage_TransferJobScheduleStartTimeOfDay";
import {
  Storage_TransferJobScheduleScheduleEndDate,
  Storage_TransferJobScheduleScheduleEndDate_GetTypes,
} from "./Storage_TransferJobScheduleScheduleEndDate";

export interface Storage_TransferJobSchedule {
  // Interval between the start of each scheduled transfer. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  RepeatInterval?: string;

  // The last day the recurring transfer will be run. If `schedule_end_date` is the same as `schedule_start_date`, the transfer will be executed only once. Structure documented below.
  ScheduleEndDate?: Storage_TransferJobScheduleScheduleEndDate;

  // The first day the recurring transfer is scheduled to run. If `schedule_start_date` is in the past, the transfer will run for the first time on the following day. Structure documented below.
  ScheduleStartDate?: Storage_TransferJobScheduleScheduleStartDate;

  // The time in UTC at which the transfer will be scheduled to start in a day. Transfers may start later than this time. If not specified, recurring and one-time transfers that are scheduled to run today will run immediately; recurring transfers that are scheduled to run on a future date will start at approximately midnight UTC on that date. Note that when configuring a transfer with the Cloud Platform Console, the transfer's start time in a day is specified in your local timezone. Structure documented below.
  StartTimeOfDay?: Storage_TransferJobScheduleStartTimeOfDay;
}

export function Storage_TransferJobSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RepeatInterval",
      "Interval between the start of each scheduled transfer. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ScheduleEndDate",
      "The last day the recurring transfer will be run. If `schedule_end_date` is the same as `schedule_start_date`, the transfer will be executed only once. Structure documented below.",
      Storage_TransferJobScheduleScheduleEndDate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ScheduleStartDate",
      "The first day the recurring transfer is scheduled to run. If `schedule_start_date` is in the past, the transfer will run for the first time on the following day. Structure documented below.",
      Storage_TransferJobScheduleScheduleStartDate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StartTimeOfDay",
      "The time in UTC at which the transfer will be scheduled to start in a day. Transfers may start later than this time. If not specified, recurring and one-time transfers that are scheduled to run today will run immediately; recurring transfers that are scheduled to run on a future date will start at approximately midnight UTC on that date. Note that when configuring a transfer with the Cloud Platform Console, the transfer's start time in a day is specified in your local timezone. Structure documented below.",
      Storage_TransferJobScheduleStartTimeOfDay_GetTypes(),
      false,
      false,
    ),
  ];
}
