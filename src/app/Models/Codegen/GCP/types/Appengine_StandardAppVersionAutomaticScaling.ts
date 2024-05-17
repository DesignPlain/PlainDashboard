import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings,
  Appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings_GetTypes,
} from "./Appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings";

export interface Appengine_StandardAppVersionAutomaticScaling {
  /*
Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  MinPendingLatency?: string;

  /*
Scheduler settings for standard environment.
Structure is documented below.
*/
  StandardSchedulerSettings?: Appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings;

  /*
Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.
Defaults to a runtime-specific value.
*/
  MaxConcurrentRequests?: number;

  // Maximum number of idle instances that should be maintained for this version.
  MaxIdleInstances?: number;

  /*
Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  MaxPendingLatency?: string;

  // Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  MinIdleInstances?: number;
}

export function Appengine_StandardAppVersionAutomaticScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MinIdleInstances",
      "Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinPendingLatency",
      "Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StandardSchedulerSettings",
      "Scheduler settings for standard environment.\nStructure is documented below.",
      Appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxConcurrentRequests",
      "Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.\nDefaults to a runtime-specific value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxIdleInstances",
      "Maximum number of idle instances that should be maintained for this version.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaxPendingLatency",
      "Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
