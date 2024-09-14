import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_RefreshScheduleScheduleScheduleFrequency,
  quicksight_RefreshScheduleScheduleScheduleFrequency_GetTypes,
} from "./quicksight_RefreshScheduleScheduleScheduleFrequency";

export interface quicksight_RefreshScheduleSchedule {
  // Time after which the refresh schedule can be started, expressed in `YYYY-MM-DDTHH:MM:SS` format.
  startAfterDateTime?: string;

  // The type of refresh that the dataset undergoes. Valid values are `INCREMENTAL_REFRESH` and `FULL_REFRESH`.
  refreshType?: string;

  // The configuration of the [schedule frequency](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RefreshFrequency.html). See schedule_frequency.
  scheduleFrequency?: quicksight_RefreshScheduleScheduleScheduleFrequency;
}

export function quicksight_RefreshScheduleSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "refreshType",
      "The type of refresh that the dataset undergoes. Valid values are `INCREMENTAL_REFRESH` and `FULL_REFRESH`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scheduleFrequency",
      "The configuration of the [schedule frequency](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RefreshFrequency.html). See schedule_frequency.",
      () => quicksight_RefreshScheduleScheduleScheduleFrequency_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startAfterDateTime",
      "Time after which the refresh schedule can be started, expressed in `YYYY-MM-DDTHH:MM:SS` format.",
      () => [],
      false,
      false,
    ),
  ];
}
