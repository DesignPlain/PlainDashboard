import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings,
  appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings_GetTypes,
} from "./appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings";

export interface appengine_StandardAppVersionAutomaticScaling {
  /*
Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  maxPendingLatency?: string;

  // Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  minIdleInstances?: number;

  /*
Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  minPendingLatency?: string;

  /*
Scheduler settings for standard environment.
Structure is documented below.
*/
  standardSchedulerSettings?: appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings;

  /*
Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.
Defaults to a runtime-specific value.
*/
  maxConcurrentRequests?: number;

  // Maximum number of idle instances that should be maintained for this version.
  maxIdleInstances?: number;
}

export function appengine_StandardAppVersionAutomaticScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "standardSchedulerSettings",
      "Scheduler settings for standard environment.\nStructure is documented below.",
      appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxConcurrentRequests",
      "Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.\nDefaults to a runtime-specific value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxIdleInstances",
      "Maximum number of idle instances that should be maintained for this version.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxPendingLatency",
      "Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minIdleInstances",
      "Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minPendingLatency",
      "Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
