import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudtasks_QueueAppEngineRoutingOverride {
  /*
App service.
By default, the task is sent to the service which is the default service when the task is attempted.
*/
  Service?: string;

  /*
App version.
By default, the task is sent to the version which is the default version when the task is attempted.
*/
  Version?: string;

  /*
(Output)
The host that the task is sent to.
*/
  Host?: string;

  /*
App instance.
By default, the task is sent to an instance which is available when the task is attempted.
*/
  Instance?: string;
}

export function Cloudtasks_QueueAppEngineRoutingOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Service",
      "App service.\nBy default, the task is sent to the service which is the default service when the task is attempted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "App version.\nBy default, the task is sent to the version which is the default version when the task is attempted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Host",
      "(Output)\nThe host that the task is sent to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Instance",
      "App instance.\nBy default, the task is sent to an instance which is available when the task is attempted.",
      [],
      false,
      false,
    ),
  ];
}
