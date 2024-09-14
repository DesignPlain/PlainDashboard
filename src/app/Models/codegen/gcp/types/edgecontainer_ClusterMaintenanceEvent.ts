import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface edgecontainer_ClusterMaintenanceEvent {
  /*
(Output)
The operation for running the maintenance event. Specified in the format
projects/-/locations/-/operations/-. If the maintenance event is split
into multiple operations (e.g. due to maintenance windows), the latest
one is recorded.
*/
  operation?: string;

  // The time that the window first starts.
  startTime?: string;

  /*
(Output)
The time when the maintenance event message was updated.
*/
  updateTime?: string;

  /*
(Output)
The time when the maintenance event request was created.
*/
  createTime?: string;

  /*
The time that the window ends. The end time must take place after the
start time.
*/
  endTime?: string;

  // The target cluster version. For example: "1.5.0".
  targetVersion?: string;

  /*
(Output)
Indicates the maintenance event type.
*/
  type?: string;

  /*
(Output)
UUID of the maintenance event.
*/
  uuid?: string;

  /*
(Output)
The schedule of the maintenance event.
*/
  schedule?: string;

  /*
(Output)
Indicates the maintenance event state.
*/
  state?: string;
}

export function edgecontainer_ClusterMaintenanceEvent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "(Output)\nIndicates the maintenance event type.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nIndicates the maintenance event state.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "The time that the window first starts.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      "(Output)\nThe time when the maintenance event message was updated.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endTime",
      "The time that the window ends. The end time must take place after the\nstart time.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetVersion",
      'The target cluster version. For example: "1.5.0".',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uuid",
      "(Output)\nUUID of the maintenance event.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schedule",
      "(Output)\nThe schedule of the maintenance event.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "operation",
      "(Output)\nThe operation for running the maintenance event. Specified in the format\nprojects/*/locations/*/operations/*. If the maintenance event is split\ninto multiple operations (e.g. due to maintenance windows), the latest\none is recorded.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "(Output)\nThe time when the maintenance event request was created.",
      () => [],
      false,
      false,
    ),
  ];
}
