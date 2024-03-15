export interface DataTransferConfigScheduleOptions {
  /*
If true, automatic scheduling of data transfer runs for this
configuration will be disabled. The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored.
*/
  DisableAutoScheduling?: boolean;

  /*
Defines time to stop scheduling transfer runs. A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.
*/
  EndTime?: string;

  /*
Specifies time to start scheduling transfer runs. The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.
*/
  StartTime?: string;
}
