import { getResourcePolicyInstanceSchedulePolicyVmStartSchedule } from "./getResourcePolicyInstanceSchedulePolicyVmStartSchedule";
import { getResourcePolicyInstanceSchedulePolicyVmStopSchedule } from "./getResourcePolicyInstanceSchedulePolicyVmStopSchedule";

export interface getResourcePolicyInstanceSchedulePolicy {
  // The expiration time of the schedule. The timestamp is an RFC3339 string.
  ExpirationTime?: string;

  // The start time of the schedule. The timestamp is an RFC3339 string.
  StartTime?: string;

  /*
Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name
from the tz database: http://en.wikipedia.org/wiki/Tz_database.
*/
  TimeZone?: string;

  // Specifies the schedule for starting instances.
  VmStartSchedules?: Array<getResourcePolicyInstanceSchedulePolicyVmStartSchedule>;

  // Specifies the schedule for stopping instances.
  VmStopSchedules?: Array<getResourcePolicyInstanceSchedulePolicyVmStopSchedule>;
}
