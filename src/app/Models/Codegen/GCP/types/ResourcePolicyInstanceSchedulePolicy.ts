import { ResourcePolicyInstanceSchedulePolicyVmStartSchedule } from "./ResourcePolicyInstanceSchedulePolicyVmStartSchedule";
import { ResourcePolicyInstanceSchedulePolicyVmStopSchedule } from "./ResourcePolicyInstanceSchedulePolicyVmStopSchedule";

export interface ResourcePolicyInstanceSchedulePolicy {
  /*
Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name
from the tz database: http://en.wikipedia.org/wiki/Tz_database.
*/
  TimeZone?: string;

  /*
Specifies the schedule for starting instances.
Structure is documented below.
*/
  VmStartSchedule?: ResourcePolicyInstanceSchedulePolicyVmStartSchedule;

  /*
Specifies the schedule for stopping instances.
Structure is documented below.
*/
  VmStopSchedule?: ResourcePolicyInstanceSchedulePolicyVmStopSchedule;

  // The expiration time of the schedule. The timestamp is an RFC3339 string.
  ExpirationTime?: string;

  // The start time of the schedule. The timestamp is an RFC3339 string.
  StartTime?: string;
}
