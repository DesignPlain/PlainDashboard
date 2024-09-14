import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudscheduler_JobAppEngineHttpTargetAppEngineRouting {
  /*
App instance.
By default, the job is sent to an instance which is available when the job is attempted.
*/
  instance?: string;

  /*
App service.
By default, the job is sent to the service which is the default service when the job is attempted.
*/
  service?: string;

  /*
App version.
By default, the job is sent to the version which is the default version when the job is attempted.
*/
  version?: string;
}

export function cloudscheduler_JobAppEngineHttpTargetAppEngineRouting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "App version.\nBy default, the job is sent to the version which is the default version when the job is attempted.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instance",
      "App instance.\nBy default, the job is sent to an instance which is available when the job is attempted.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "App service.\nBy default, the job is sent to the service which is the default service when the job is attempted.",
      () => [],
      false,
      false,
    ),
  ];
}
