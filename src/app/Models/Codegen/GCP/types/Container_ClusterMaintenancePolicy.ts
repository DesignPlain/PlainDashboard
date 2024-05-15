import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterMaintenancePolicyDailyMaintenanceWindow,
  Container_ClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes,
} from "./Container_ClusterMaintenancePolicyDailyMaintenanceWindow";
import {
  Container_ClusterMaintenancePolicyMaintenanceExclusion,
  Container_ClusterMaintenancePolicyMaintenanceExclusion_GetTypes,
} from "./Container_ClusterMaintenancePolicyMaintenanceExclusion";
import {
  Container_ClusterMaintenancePolicyRecurringWindow,
  Container_ClusterMaintenancePolicyRecurringWindow_GetTypes,
} from "./Container_ClusterMaintenancePolicyRecurringWindow";

export interface Container_ClusterMaintenancePolicy {
  /*
Time window specified for daily maintenance operations.
Specify `start_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format "HH:MM”,
where HH : \[00-23\] and MM : \[00-59\] GMT. For example:

Examples:
*/
  DailyMaintenanceWindow?: Container_ClusterMaintenancePolicyDailyMaintenanceWindow;

  // Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. A cluster can have up to 20 maintenance exclusions at a time [Maintenance Window and Exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions)
  MaintenanceExclusions?: Array<Container_ClusterMaintenancePolicyMaintenanceExclusion>;

  /*
Time window for recurring maintenance operations.

Specify `start_time` and `end_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) "Zulu" date format.  The start time's date is
the initial date that the window starts, and the end time is used for calculating duration.  Specify `recurrence` in
[RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.5.3) RRULE format, to specify when this recurs.
Note that GKE may accept other formats, but will return values in UTC, causing a permanent diff.

Examples:
*/
  RecurringWindow?: Container_ClusterMaintenancePolicyRecurringWindow;
}

export function Container_ClusterMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DailyMaintenanceWindow",
      'Time window specified for daily maintenance operations.\nSpecify `start_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format "HH:MM”,\nwhere HH : \\[00-23\\] and MM : \\[00-59\\] GMT. For example:\n\nExamples:',
      Container_ClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MaintenanceExclusions",
      "Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. A cluster can have up to 20 maintenance exclusions at a time [Maintenance Window and Exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions)",
      Container_ClusterMaintenancePolicyMaintenanceExclusion_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RecurringWindow",
      'Time window for recurring maintenance operations.\n\nSpecify `start_time` and `end_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) "Zulu" date format.  The start time\'s date is\nthe initial date that the window starts, and the end time is used for calculating duration.  Specify `recurrence` in\n[RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.5.3) RRULE format, to specify when this recurs.\nNote that GKE may accept other formats, but will return values in UTC, causing a permanent diff.\n\nExamples:',
      Container_ClusterMaintenancePolicyRecurringWindow_GetTypes(),
      false,
      false,
    ),
  ];
}
