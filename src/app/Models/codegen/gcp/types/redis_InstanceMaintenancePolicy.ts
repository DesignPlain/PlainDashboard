import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  redis_InstanceMaintenancePolicyWeeklyMaintenanceWindow,
  redis_InstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes,
} from './redis_InstanceMaintenancePolicyWeeklyMaintenanceWindow';

export interface redis_InstanceMaintenancePolicy {
  /*
Optional. Maintenance window that is applied to resources covered by this policy.
Minimum 1. For the current version, the maximum number
of weekly_window is expected to be one.
Structure is documented below.
*/
  weeklyMaintenanceWindows?: Array<redis_InstanceMaintenancePolicyWeeklyMaintenanceWindow>;

  /*
(Output)
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

  /*
(Output)
Output only. The time when the policy was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  updateTime?: string;
}

export function redis_InstanceMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'weeklyMaintenanceWindows',
      'Optional. Maintenance window that is applied to resources covered by this policy.\nMinimum 1. For the current version, the maximum number\nof weekly_window is expected to be one.\nStructure is documented below.',
      () => redis_InstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'createTime',
      '(Output)\nOutput only. The time when the policy was created.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Optional. Description of what this policy is for.\nCreate/Update methods return INVALID_ARGUMENT if the\nlength is greater than 512.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'updateTime',
      '(Output)\nOutput only. The time when the policy was last updated.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      () => [],
      false,
      false,
    ),
  ];
}
