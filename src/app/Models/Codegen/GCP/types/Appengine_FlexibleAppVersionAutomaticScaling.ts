import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appengine_FlexibleAppVersionAutomaticScalingDiskUtilization,
  appengine_FlexibleAppVersionAutomaticScalingDiskUtilization_GetTypes,
} from "./appengine_FlexibleAppVersionAutomaticScalingDiskUtilization";
import {
  appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization,
  appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization_GetTypes,
} from "./appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization";
import {
  appengine_FlexibleAppVersionAutomaticScalingRequestUtilization,
  appengine_FlexibleAppVersionAutomaticScalingRequestUtilization_GetTypes,
} from "./appengine_FlexibleAppVersionAutomaticScalingRequestUtilization";
import {
  appengine_FlexibleAppVersionAutomaticScalingCpuUtilization,
  appengine_FlexibleAppVersionAutomaticScalingCpuUtilization_GetTypes,
} from "./appengine_FlexibleAppVersionAutomaticScalingCpuUtilization";

export interface appengine_FlexibleAppVersionAutomaticScaling {
  /*
The time period that the Autoscaler should wait before it starts collecting information from a new instance.
This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s
*/
  coolDownPeriod?: string;

  /*
Target scaling by CPU usage.
Structure is documented below.
*/
  cpuUtilization?: appengine_FlexibleAppVersionAutomaticScalingCpuUtilization;

  /*
Target scaling by disk usage.
Structure is documented below.
*/
  diskUtilization?: appengine_FlexibleAppVersionAutomaticScalingDiskUtilization;

  /*
Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.
Defaults to a runtime-specific value.
*/
  maxConcurrentRequests?: number;

  // Maximum number of idle instances that should be maintained for this version.
  maxIdleInstances?: number;

  // Maximum number of instances that should be started to handle requests for this version. Default: 20
  maxTotalInstances?: number;

  // Minimum number of running instances that should be maintained for this version. Default: 2
  minTotalInstances?: number;

  /*
Target scaling by network usage.
Structure is documented below.
*/
  networkUtilization?: appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization;

  /*
Target scaling by request utilization.
Structure is documented below.
*/
  requestUtilization?: appengine_FlexibleAppVersionAutomaticScalingRequestUtilization;

  // Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
  maxPendingLatency?: string;

  // Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  minIdleInstances?: number;

  // Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
  minPendingLatency?: string;
}

export function appengine_FlexibleAppVersionAutomaticScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minTotalInstances",
      "Minimum number of running instances that should be maintained for this version. Default: 2",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cpuUtilization",
      "Target scaling by CPU usage.\nStructure is documented below.",
      appengine_FlexibleAppVersionAutomaticScalingCpuUtilization_GetTypes(),
      true,
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
      InputType.Number,
      "maxTotalInstances",
      "Maximum number of instances that should be started to handle requests for this version. Default: 20",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxPendingLatency",
      "Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.",
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
      "Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "coolDownPeriod",
      "The time period that the Autoscaler should wait before it starts collecting information from a new instance.\nThis prevents the autoscaler from collecting information when the instance is initializing,\nduring which the collected usage would not be reliable. Default: 120s",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "diskUtilization",
      "Target scaling by disk usage.\nStructure is documented below.",
      appengine_FlexibleAppVersionAutomaticScalingDiskUtilization_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "networkUtilization",
      "Target scaling by network usage.\nStructure is documented below.",
      appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "requestUtilization",
      "Target scaling by request utilization.\nStructure is documented below.",
      appengine_FlexibleAppVersionAutomaticScalingRequestUtilization_GetTypes(),
      false,
      false,
    ),
  ];
}
