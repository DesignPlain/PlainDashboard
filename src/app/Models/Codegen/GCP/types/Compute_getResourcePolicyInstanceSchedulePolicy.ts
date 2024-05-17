import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule,
  Compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule_GetTypes,
} from "./Compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule";
import {
  Compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule,
  Compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule_GetTypes,
} from "./Compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule";

export interface Compute_getResourcePolicyInstanceSchedulePolicy {
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
  VmStartSchedules?: Array<Compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule>;

  // Specifies the schedule for stopping instances.
  VmStopSchedules?: Array<Compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule>;
}

export function Compute_getResourcePolicyInstanceSchedulePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExpirationTime",
      "The expiration time of the schedule. The timestamp is an RFC3339 string.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      "The start time of the schedule. The timestamp is an RFC3339 string.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TimeZone",
      "Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name\nfrom the tz database: http://en.wikipedia.org/wiki/Tz_database.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VmStartSchedules",
      "Specifies the schedule for starting instances.",
      Compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VmStopSchedules",
      "Specifies the schedule for stopping instances.",
      Compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule_GetTypes(),
      true,
      false,
    ),
  ];
}
