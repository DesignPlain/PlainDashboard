import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow,
  redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes,
} from "./redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow";

export interface redis_getInstanceMaintenancePolicy {
  /*
Output only. The time when the policy was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  updateTime?: string;

  /*
Optional. Maintenance window that is applied to resources covered by this policy.
Minimum 1. For the current version, the maximum number
of weekly_window is expected to be one.
*/
  weeklyMaintenanceWindows?: Array<redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow>;

  /*
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  createTime?: string;

  /*
Optional. Description of what this policy is for.
Create/Update methods return INVALID_ARGUMENT if the
length is greater than 512.
*/
  description?: string;
}

export function redis_getInstanceMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      'Output only. The time when the policy was last updated.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "weeklyMaintenanceWindows",
      "Optional. Maintenance window that is applied to resources covered by this policy.\nMinimum 1. For the current version, the maximum number\nof weekly_window is expected to be one.",
      redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      'Output only. The time when the policy was created.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Optional. Description of what this policy is for.\nCreate/Update methods return INVALID_ARGUMENT if the\nlength is greater than 512.",
      [],
      true,
      false,
    ),
  ];
}
