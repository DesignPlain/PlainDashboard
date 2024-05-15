import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Appengine_FlexibleAppVersionAutomaticScalingRequestUtilization,
  Appengine_FlexibleAppVersionAutomaticScalingRequestUtilization_GetTypes,
} from "./Appengine_FlexibleAppVersionAutomaticScalingRequestUtilization";
import {
  Appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization,
  Appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization_GetTypes,
} from "./Appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization";
import {
  Appengine_FlexibleAppVersionAutomaticScalingCpuUtilization,
  Appengine_FlexibleAppVersionAutomaticScalingCpuUtilization_GetTypes,
} from "./Appengine_FlexibleAppVersionAutomaticScalingCpuUtilization";
import {
  Appengine_FlexibleAppVersionAutomaticScalingDiskUtilization,
  Appengine_FlexibleAppVersionAutomaticScalingDiskUtilization_GetTypes,
} from "./Appengine_FlexibleAppVersionAutomaticScalingDiskUtilization";

export interface Appengine_FlexibleAppVersionAutomaticScaling {
  /*
Target scaling by CPU usage.
Structure is documented below.
*/
  CpuUtilization?: Appengine_FlexibleAppVersionAutomaticScalingCpuUtilization;

  /*
Target scaling by disk usage.
Structure is documented below.
*/
  DiskUtilization?: Appengine_FlexibleAppVersionAutomaticScalingDiskUtilization;

  // Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
  MaxPendingLatency?: string;

  /*
Target scaling by request utilization.
Structure is documented below.
*/
  RequestUtilization?: Appengine_FlexibleAppVersionAutomaticScalingRequestUtilization;

  /*
The time period that the Autoscaler should wait before it starts collecting information from a new instance.
This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s
*/
  CoolDownPeriod?: string;

  /*
Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.
Defaults to a runtime-specific value.
*/
  MaxConcurrentRequests?: number;

  // Maximum number of idle instances that should be maintained for this version.
  MaxIdleInstances?: number;

  // Maximum number of instances that should be started to handle requests for this version. Default: 20
  MaxTotalInstances?: number;

  // Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  MinIdleInstances?: number;

  // Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
  MinPendingLatency?: string;

  // Minimum number of running instances that should be maintained for this version. Default: 2
  MinTotalInstances?: number;

  /*
Target scaling by network usage.
Structure is documented below.
*/
  NetworkUtilization?: Appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization;
}

export function Appengine_FlexibleAppVersionAutomaticScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxTotalInstances",
      "Maximum number of instances that should be started to handle requests for this version. Default: 20",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinTotalInstances",
      "Minimum number of running instances that should be maintained for this version. Default: 2",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CpuUtilization",
      "Target scaling by CPU usage.\nStructure is documented below.",
      Appengine_FlexibleAppVersionAutomaticScalingCpuUtilization_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaxPendingLatency",
      "Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CoolDownPeriod",
      "The time period that the Autoscaler should wait before it starts collecting information from a new instance.\nThis prevents the autoscaler from collecting information when the instance is initializing,\nduring which the collected usage would not be reliable. Default: 120s",
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
      "MinPendingLatency",
      "Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NetworkUtilization",
      "Target scaling by network usage.\nStructure is documented below.",
      Appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DiskUtilization",
      "Target scaling by disk usage.\nStructure is documented below.",
      Appengine_FlexibleAppVersionAutomaticScalingDiskUtilization_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RequestUtilization",
      "Target scaling by request utilization.\nStructure is documented below.",
      Appengine_FlexibleAppVersionAutomaticScalingRequestUtilization_GetTypes(),
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
      "MinIdleInstances",
      "Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.",
      [],
      false,
      false,
    ),
  ];
}
