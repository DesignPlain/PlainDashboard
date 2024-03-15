export interface ClusterMaintenanceEvent {
  /*
The time that the window ends. The end time must take place after the
start time.
*/
  EndTime?: string;

  /*
(Output)
The operation for running the maintenance event. Specified in the format
projects/-/locations/-/operations/-. If the maintenance event is split
into multiple operations (e.g. due to maintenance windows), the latest
one is recorded.
*/
  Operation?: string;

  // The target cluster version. For example: "1.5.0".
  TargetVersion?: string;

  /*
(Output)
Indicates the maintenance event type.
*/
  Type?: string;

  /*
(Output)
UUID of the maintenance event.
*/
  Uuid?: string;

  /*
(Output)
The time when the maintenance event request was created.
*/
  CreateTime?: string;

  /*
(Output)
The schedule of the maintenance event.
*/
  Schedule?: string;

  // The time that the window first starts.
  StartTime?: string;

  /*
(Output)
Indicates the maintenance event state.
*/
  State?: string;

  /*
(Output)
The time when the maintenance event message was updated.
*/
  UpdateTime?: string;
}
