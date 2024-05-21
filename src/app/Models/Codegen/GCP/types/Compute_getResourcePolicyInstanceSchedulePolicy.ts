import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule,
  compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule_GetTypes,
} from "./compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule";
import {
  compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule,
  compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule_GetTypes,
} from "./compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule";

export interface compute_getResourcePolicyInstanceSchedulePolicy {
  // The expiration time of the schedule. The timestamp is an RFC3339 string.
  expirationTime?: string;

  // The start time of the schedule. The timestamp is an RFC3339 string.
  startTime?: string;

  /*
Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name
from the tz database: http://en.wikipedia.org/wiki/Tz_database.
*/
  timeZone?: string;

  // Specifies the schedule for starting instances.
  vmStartSchedules?: Array<compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule>;

  // Specifies the schedule for stopping instances.
  vmStopSchedules?: Array<compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule>;
}

export function compute_getResourcePolicyInstanceSchedulePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "vmStopSchedules",
      "Specifies the schedule for stopping instances.",
      compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expirationTime",
      "The expiration time of the schedule. The timestamp is an RFC3339 string.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "The start time of the schedule. The timestamp is an RFC3339 string.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name\nfrom the tz database: http://en.wikipedia.org/wiki/Tz_database.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vmStartSchedules",
      "Specifies the schedule for starting instances.",
      compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule_GetTypes(),
      true,
      false,
    ),
  ];
}
