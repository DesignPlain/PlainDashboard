import { ClusterMaintenancePolicyDailyMaintenanceWindow } from "./ClusterMaintenancePolicyDailyMaintenanceWindow";
import { ClusterMaintenancePolicyMaintenanceExclusion } from "./ClusterMaintenancePolicyMaintenanceExclusion";
import { ClusterMaintenancePolicyRecurringWindow } from "./ClusterMaintenancePolicyRecurringWindow";

export interface ClusterMaintenancePolicy {
  /*
Time window specified for daily maintenance operations.
Specify `start_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format "HH:MM”,
where HH : \[00-23\] and MM : \[00-59\] GMT. For example:

Examples:
*/
  DailyMaintenanceWindow?: ClusterMaintenancePolicyDailyMaintenanceWindow;

  // Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. A cluster can have up to 20 maintenance exclusions at a time [Maintenance Window and Exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions)
  MaintenanceExclusions?: Array<ClusterMaintenancePolicyMaintenanceExclusion>;

  /*
Time window for recurring maintenance operations.

Specify `start_time` and `end_time` in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) "Zulu" date format.  The start time's date is
the initial date that the window starts, and the end time is used for calculating duration.  Specify `recurrence` in
[RFC5545](https://tools.ietf.org/html/rfc5545#section-3.8.5.3) RRULE format, to specify when this recurs.
Note that GKE may accept other formats, but will return values in UTC, causing a permanent diff.

Examples:
*/
  RecurringWindow?: ClusterMaintenancePolicyRecurringWindow;
}
