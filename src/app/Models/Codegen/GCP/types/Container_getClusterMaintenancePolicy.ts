import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterMaintenancePolicyRecurringWindow,
  Container_getClusterMaintenancePolicyRecurringWindow_GetTypes,
} from "./Container_getClusterMaintenancePolicyRecurringWindow";
import {
  Container_getClusterMaintenancePolicyDailyMaintenanceWindow,
  Container_getClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes,
} from "./Container_getClusterMaintenancePolicyDailyMaintenanceWindow";
import {
  Container_getClusterMaintenancePolicyMaintenanceExclusion,
  Container_getClusterMaintenancePolicyMaintenanceExclusion_GetTypes,
} from "./Container_getClusterMaintenancePolicyMaintenanceExclusion";

export interface Container_getClusterMaintenancePolicy {
  // Time window specified for daily maintenance operations. Specify start_time in RFC3339 format "HH:MM”, where HH : [00-23] and MM : [00-59] GMT.
  DailyMaintenanceWindows?: Array<Container_getClusterMaintenancePolicyDailyMaintenanceWindow>;

  // Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows.
  MaintenanceExclusions?: Array<Container_getClusterMaintenancePolicyMaintenanceExclusion>;

  // Time window for recurring maintenance operations.
  RecurringWindows?: Array<Container_getClusterMaintenancePolicyRecurringWindow>;
}

export function Container_getClusterMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "DailyMaintenanceWindows",
      'Time window specified for daily maintenance operations. Specify start_time in RFC3339 format "HH:MM”, where HH : [00-23] and MM : [00-59] GMT.',
      Container_getClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MaintenanceExclusions",
      "Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows.",
      Container_getClusterMaintenancePolicyMaintenanceExclusion_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RecurringWindows",
      "Time window for recurring maintenance operations.",
      Container_getClusterMaintenancePolicyRecurringWindow_GetTypes(),
      true,
      false,
    ),
  ];
}
