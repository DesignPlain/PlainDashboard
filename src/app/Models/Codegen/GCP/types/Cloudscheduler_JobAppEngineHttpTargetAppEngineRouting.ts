import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudscheduler_JobAppEngineHttpTargetAppEngineRouting {
  /*
App version.
By default, the job is sent to the version which is the default version when the job is attempted.
*/
  Version?: string;

  /*
App instance.
By default, the job is sent to an instance which is available when the job is attempted.
*/
  Instance?: string;

  /*
App service.
By default, the job is sent to the service which is the default service when the job is attempted.
*/
  Service?: string;
}

export function Cloudscheduler_JobAppEngineHttpTargetAppEngineRouting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Version",
      "App version.\nBy default, the job is sent to the version which is the default version when the job is attempted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Instance",
      "App instance.\nBy default, the job is sent to an instance which is available when the job is attempted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      "App service.\nBy default, the job is sent to the service which is the default service when the job is attempted.",
      [],
      false,
      false,
    ),
  ];
}
