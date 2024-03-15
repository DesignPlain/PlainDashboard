import { getClusterMaintenancePolicyMaintenanceExclusion } from "./getClusterMaintenancePolicyMaintenanceExclusion";
import { getClusterMaintenancePolicyRecurringWindow } from "./getClusterMaintenancePolicyRecurringWindow";
import { getClusterMaintenancePolicyDailyMaintenanceWindow } from "./getClusterMaintenancePolicyDailyMaintenanceWindow";

export interface getClusterMaintenancePolicy {
  // Time window specified for daily maintenance operations. Specify start_time in RFC3339 format "HH:MM”, where HH : [00-23] and MM : [00-59] GMT.
  DailyMaintenanceWindows?: Array<getClusterMaintenancePolicyDailyMaintenanceWindow>;

  // Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows.
  MaintenanceExclusions?: Array<getClusterMaintenancePolicyMaintenanceExclusion>;

  // Time window for recurring maintenance operations.
  RecurringWindows?: Array<getClusterMaintenancePolicyRecurringWindow>;
}
