import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_DataTransferConfigScheduleOptions {
  /*
Specifies time to start scheduling transfer runs. The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.
*/
  startTime?: string;

  /*
If true, automatic scheduling of data transfer runs for this
configuration will be disabled. The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored.
*/
  disableAutoScheduling?: boolean;

  /*
Defines time to stop scheduling transfer runs. A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.
*/
  endTime?: string;
}

export function bigquery_DataTransferConfigScheduleOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "disableAutoScheduling",
      "If true, automatic scheduling of data transfer runs for this\nconfiguration will be disabled. The runs can be started on ad-hoc\nbasis using transferConfigs.startManualRuns API. When automatic\nscheduling is disabled, the TransferConfig.schedule field will\nbe ignored.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endTime",
      "Defines time to stop scheduling transfer runs. A transfer run cannot be\nscheduled at or after the end time. The end time can be changed at any\nmoment. The time when a data transfer can be triggered manually is not\nlimited by this option.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "Specifies time to start scheduling transfer runs. The first run will be\nscheduled at or after the start time according to a recurrence pattern\ndefined in the schedule string. The start time can be changed at any\nmoment. The time when a data transfer can be triggered manually is not\nlimited by this option.",
      [],
      false,
      false,
    ),
  ];
}
