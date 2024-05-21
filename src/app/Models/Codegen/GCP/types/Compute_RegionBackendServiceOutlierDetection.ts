import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionBackendServiceOutlierDetectionInterval,
  compute_RegionBackendServiceOutlierDetectionInterval_GetTypes,
} from "./compute_RegionBackendServiceOutlierDetectionInterval";
import {
  compute_RegionBackendServiceOutlierDetectionBaseEjectionTime,
  compute_RegionBackendServiceOutlierDetectionBaseEjectionTime_GetTypes,
} from "./compute_RegionBackendServiceOutlierDetectionBaseEjectionTime";

export interface compute_RegionBackendServiceOutlierDetection {
  /*
Maximum percentage of hosts in the load balancing pool for the backend service
that can be ejected. Defaults to 10%!!(MISSING)
(MISSING)
*/
  maxEjectionPercent?: number;

  /*
The number of hosts in a cluster that must have enough request volume to detect
success rate outliers. If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.
*/
  successRateMinimumHosts?: number;

  /*
The minimum number of total requests that must be collected in one interval (as
defined by the interval duration above) to include this host in success rate
based outlier detection. If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.
*/
  successRateRequestVolume?: number;

  /*
This factor is used to determine the ejection threshold for success rate outlier
ejection. The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev - success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.
*/
  successRateStdevFactor?: number;

  /*
The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive gateway failures. This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.
*/
  enforcingConsecutiveGatewayFailure?: number;

  /*
The percentage chance that a host will be actually ejected when an outlier
status is detected through success rate statistics. This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.
*/
  enforcingSuccessRate?: number;

  /*
Time interval between ejection sweep analysis. This can result in both new
ejections as well as hosts being returned to service. Defaults to 10 seconds.
Structure is documented below.
*/
  interval?: compute_RegionBackendServiceOutlierDetectionInterval;

  /*
The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive 5xx. This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.
*/
  enforcingConsecutiveErrors?: number;

  /*
The base time that a host is ejected for. The real time is equal to the base
time multiplied by the number of times the host has been ejected. Defaults to
30000ms or 30s.
Structure is documented below.
*/
  baseEjectionTime?: compute_RegionBackendServiceOutlierDetectionBaseEjectionTime;

  /*
Number of errors before a host is ejected from the connection pool. When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.
*/
  consecutiveErrors?: number;

  /*
The number of consecutive gateway failures (502, 503, 504 status or connection
errors that are mapped to one of those status codes) before a consecutive
gateway failure ejection occurs. Defaults to 5.
*/
  consecutiveGatewayFailure?: number;
}

export function compute_RegionBackendServiceOutlierDetection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "successRateMinimumHosts",
      "The number of hosts in a cluster that must have enough request volume to detect\nsuccess rate outliers. If the number of hosts is less than this setting, outlier\ndetection via success rate statistics is not performed for any host in the\ncluster. Defaults to 5.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "successRateRequestVolume",
      "The minimum number of total requests that must be collected in one interval (as\ndefined by the interval duration above) to include this host in success rate\nbased outlier detection. If the volume is lower than this setting, outlier\ndetection via success rate statistics is not performed for that host. Defaults\nto 100.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "successRateStdevFactor",
      "This factor is used to determine the ejection threshold for success rate outlier\nejection. The ejection threshold is the difference between the mean success\nrate, and the product of this factor and the standard deviation of the mean\nsuccess rate: mean - (stdev * success_rate_stdev_factor). This factor is divided\nby a thousand to get a double. That is, if the desired factor is 1.9, the\nruntime value should be 1900. Defaults to 1900.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "interval",
      "Time interval between ejection sweep analysis. This can result in both new\nejections as well as hosts being returned to service. Defaults to 10 seconds.\nStructure is documented below.",
      compute_RegionBackendServiceOutlierDetectionInterval_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "baseEjectionTime",
      "The base time that a host is ejected for. The real time is equal to the base\ntime multiplied by the number of times the host has been ejected. Defaults to\n30000ms or 30s.\nStructure is documented below.",
      compute_RegionBackendServiceOutlierDetectionBaseEjectionTime_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "consecutiveGatewayFailure",
      "The number of consecutive gateway failures (502, 503, 504 status or connection\nerrors that are mapped to one of those status codes) before a consecutive\ngateway failure ejection occurs. Defaults to 5.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxEjectionPercent",
      "Maximum percentage of hosts in the load balancing pool for the backend service\nthat can be ejected. Defaults to 10%!\n(MISSING)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "enforcingSuccessRate",
      "The percentage chance that a host will be actually ejected when an outlier\nstatus is detected through success rate statistics. This setting can be used to\ndisable ejection or to ramp it up slowly. Defaults to 100.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "enforcingConsecutiveErrors",
      "The percentage chance that a host will be actually ejected when an outlier\nstatus is detected through consecutive 5xx. This setting can be used to disable\nejection or to ramp it up slowly. Defaults to 100.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "consecutiveErrors",
      "Number of errors before a host is ejected from the connection pool. When the\nbackend host is accessed over HTTP, a 5xx return code qualifies as an error.\nDefaults to 5.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "enforcingConsecutiveGatewayFailure",
      "The percentage chance that a host will be actually ejected when an outlier\nstatus is detected through consecutive gateway failures. This setting can be\nused to disable ejection or to ramp it up slowly. Defaults to 0.",
      [],
      false,
      false,
    ),
  ];
}
