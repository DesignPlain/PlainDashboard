import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudtasks_QueueAppEngineRoutingOverride {
  /*
(Output)
The host that the task is sent to.
*/
  host?: string;

  /*
App instance.
By default, the task is sent to an instance which is available when the task is attempted.
*/
  instance?: string;

  /*
App service.
By default, the task is sent to the service which is the default service when the task is attempted.
*/
  service?: string;

  /*
App version.
By default, the task is sent to the version which is the default version when the task is attempted.
*/
  version?: string;
}

export function cloudtasks_QueueAppEngineRoutingOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "host",
      "(Output)\nThe host that the task is sent to.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instance",
      "App instance.\nBy default, the task is sent to an instance which is available when the task is attempted.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "App service.\nBy default, the task is sent to the service which is the default service when the task is attempted.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "App version.\nBy default, the task is sent to the version which is the default version when the task is attempted.",
      () => [],
      false,
      false,
    ),
  ];
}
