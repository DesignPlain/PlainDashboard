import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_ClusterMaintenancePolicyRecurringWindow,
  container_ClusterMaintenancePolicyRecurringWindow_GetTypes,
} from "./container_ClusterMaintenancePolicyRecurringWindow";
import {
  container_ClusterMaintenancePolicyDailyMaintenanceWindow,
  container_ClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes,
} from "./container_ClusterMaintenancePolicyDailyMaintenanceWindow";
import {
  container_ClusterMaintenancePolicyMaintenanceExclusion,
  container_ClusterMaintenancePolicyMaintenanceExclusion_GetTypes,
} from "./container_ClusterMaintenancePolicyMaintenanceExclusion";

export interface container_ClusterMaintenancePolicy {
  /*
Time window specified for daily maintenance operations.
Specify `start_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format "HH:MM”,
where HH : \[00-23\] and MM : \[00-59\] GMT. For example:

Examples:
*/
  dailyMaintenanceWindow?: container_ClusterMaintenancePolicyDailyMaintenanceWindow;

  // Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. A cluster can have up to 20 maintenance exclusions at a time [Maintenance Window and Exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions)
  maintenanceExclusions?: Array<container_ClusterMaintenancePolicyMaintenanceExclusion>;

  /*
Time window for recurring maintenance operations.

Specify `start_time` and `end_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) "Zulu" date format.  The start time's date is
the initial date that the window starts, and the end time is used for calculating duration.  Specify `recurrence` in
[RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.5.3) RRULE format, to specify when this recurs.
Note that GKE may accept other formats, but will return values in UTC, causing a permanent diff.

Examples:
*/
  recurringWindow?: container_ClusterMaintenancePolicyRecurringWindow;
}

export function container_ClusterMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dailyMaintenanceWindow",
      'Time window specified for daily maintenance operations.\nSpecify `start_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format "HH:MM”,\nwhere HH : \\[00-23\\] and MM : \\[00-59\\] GMT. For example:\n\nExamples:',
      () => container_ClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "maintenanceExclusions",
      "Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. A cluster can have up to 20 maintenance exclusions at a time [Maintenance Window and Exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions)",
      () => container_ClusterMaintenancePolicyMaintenanceExclusion_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "recurringWindow",
      'Time window for recurring maintenance operations.\n\nSpecify `start_time` and `end_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) "Zulu" date format.  The start time\'s date is\nthe initial date that the window starts, and the end time is used for calculating duration.  Specify `recurrence` in\n[RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.5.3) RRULE format, to specify when this recurs.\nNote that GKE may accept other formats, but will return values in UTC, causing a permanent diff.\n\nExamples:',
      () => container_ClusterMaintenancePolicyRecurringWindow_GetTypes(),
      false,
      false,
    ),
  ];
}
