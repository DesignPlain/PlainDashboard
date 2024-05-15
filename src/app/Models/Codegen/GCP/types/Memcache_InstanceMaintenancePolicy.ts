import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindow,
  Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes,
} from "./Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindow";

export interface Memcache_InstanceMaintenancePolicy {
  /*
(Output)
Output only. The time when the policy was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  UpdateTime?: string;

  /*
Required. Maintenance window that is applied to resources covered by this policy.
Minimum 1. For the current version, the maximum number of weekly_maintenance_windows
is expected to be one.
Structure is documented below.
*/
  WeeklyMaintenanceWindows?: Array<Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindow>;

  /*
(Output)
Output only. The time when the policy was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits
*/
  CreateTime?: string;

  /*
Optional. Description of what this policy is for.
Create/Update methods return INVALID_ARGUMENT if the
length is greater than 512.
*/
  Description?: string;
}

export function Memcache_InstanceMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      '(Output)\nOutput only. The time when the policy was updated.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WeeklyMaintenanceWindows",
      "Required. Maintenance window that is applied to resources covered by this policy.\nMinimum 1. For the current version, the maximum number of weekly_maintenance_windows\nis expected to be one.\nStructure is documented below.",
      Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      '(Output)\nOutput only. The time when the policy was created.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Optional. Description of what this policy is for.\nCreate/Update methods return INVALID_ARGUMENT if the\nlength is greater than 512.",
      [],
      false,
      false,
    ),
  ];
}
