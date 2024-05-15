import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_ClusterMaintenanceEvent {
  /*
The time that the window ends. The end time must take place after the
start time.
*/
  EndTime?: string;

  /*
(Output)
The schedule of the maintenance event.
*/
  Schedule?: string;

  // The target cluster version. For example: "1.5.0".
  TargetVersion?: string;

  /*
(Output)
Indicates the maintenance event type.
*/
  Type?: string;

  /*
(Output)
The time when the maintenance event message was updated.
*/
  UpdateTime?: string;

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
The operation for running the maintenance event. Specified in the format
projects/-/locations/-/operations/-. If the maintenance event is split
into multiple operations (e.g. due to maintenance windows), the latest
one is recorded.
*/
  Operation?: string;

  // The time that the window first starts.
  StartTime?: string;

  /*
(Output)
Indicates the maintenance event state.
*/
  State?: string;
}

export function Edgecontainer_ClusterMaintenanceEvent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "(Output)\nThe time when the maintenance event request was created.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nIndicates the maintenance event state.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Schedule",
      "(Output)\nThe schedule of the maintenance event.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "(Output)\nIndicates the maintenance event type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Uuid",
      "(Output)\nUUID of the maintenance event.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Operation",
      "(Output)\nThe operation for running the maintenance event. Specified in the format\nprojects/*/locations/*/operations/*. If the maintenance event is split\ninto multiple operations (e.g. due to maintenance windows), the latest\none is recorded.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      "The time that the window first starts.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EndTime",
      "The time that the window ends. The end time must take place after the\nstart time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TargetVersion",
      'The target cluster version. For example: "1.5.0".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "(Output)\nThe time when the maintenance event message was updated.",
      [],
      false,
      false,
    ),
  ];
}
