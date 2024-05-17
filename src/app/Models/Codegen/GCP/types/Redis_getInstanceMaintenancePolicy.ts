import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow,
  Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes,
} from "./Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow";

export interface Redis_getInstanceMaintenancePolicy {
  /*
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  CreateTime?: string;

  /*
Optional. Description of what this policy is for.
Create/Update methods return INVALID_ARGUMENT if the
length is greater than 512.
*/
  Description?: string;

  /*
Output only. The time when the policy was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  UpdateTime?: string;

  /*
Optional. Maintenance window that is applied to resources covered by this policy.
Minimum 1. For the current version, the maximum number
of weekly_window is expected to be one.
*/
  WeeklyMaintenanceWindows?: Array<Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow>;
}

export function Redis_getInstanceMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      'Output only. The time when the policy was created.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Optional. Description of what this policy is for.\nCreate/Update methods return INVALID_ARGUMENT if the\nlength is greater than 512.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      'Output only. The time when the policy was last updated.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WeeklyMaintenanceWindows",
      "Optional. Maintenance window that is applied to resources covered by this policy.\nMinimum 1. For the current version, the maximum number\nof weekly_window is expected to be one.",
      Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
  ];
}
