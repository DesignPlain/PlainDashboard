import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_getClusterMaintenancePolicyDailyMaintenanceWindow,
  container_getClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes,
} from "./container_getClusterMaintenancePolicyDailyMaintenanceWindow";
import {
  container_getClusterMaintenancePolicyMaintenanceExclusion,
  container_getClusterMaintenancePolicyMaintenanceExclusion_GetTypes,
} from "./container_getClusterMaintenancePolicyMaintenanceExclusion";
import {
  container_getClusterMaintenancePolicyRecurringWindow,
  container_getClusterMaintenancePolicyRecurringWindow_GetTypes,
} from "./container_getClusterMaintenancePolicyRecurringWindow";

export interface container_getClusterMaintenancePolicy {
  // Time window specified for daily maintenance operations. Specify start_time in RFC3339 format "HH:MM”, where HH : [00-23] and MM : [00-59] GMT.
  dailyMaintenanceWindows?: Array<container_getClusterMaintenancePolicyDailyMaintenanceWindow>;

  // Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows.
  maintenanceExclusions?: Array<container_getClusterMaintenancePolicyMaintenanceExclusion>;

  // Time window for recurring maintenance operations.
  recurringWindows?: Array<container_getClusterMaintenancePolicyRecurringWindow>;
}

export function container_getClusterMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dailyMaintenanceWindows",
      'Time window specified for daily maintenance operations. Specify start_time in RFC3339 format "HH:MM”, where HH : [00-23] and MM : [00-59] GMT.',
      () =>
        container_getClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "maintenanceExclusions",
      "Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows.",
      () =>
        container_getClusterMaintenancePolicyMaintenanceExclusion_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "recurringWindows",
      "Time window for recurring maintenance operations.",
      () => container_getClusterMaintenancePolicyRecurringWindow_GetTypes(),
      true,
      false,
    ),
  ];
}
