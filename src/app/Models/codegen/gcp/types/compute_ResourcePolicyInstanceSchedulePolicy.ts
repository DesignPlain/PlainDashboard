import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule,
  compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule_GetTypes,
} from "./compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule";
import {
  compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule,
  compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule_GetTypes,
} from "./compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule";

export interface compute_ResourcePolicyInstanceSchedulePolicy {
  // The expiration time of the schedule. The timestamp is an RFC3339 string.
  expirationTime?: string;

  // The start time of the schedule. The timestamp is an RFC3339 string.
  startTime?: string;

  /*
Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name
from the tz database: http://en.wikipedia.org/wiki/Tz_database.
*/
  timeZone?: string;

  /*
Specifies the schedule for starting instances.
Structure is documented below.
*/
  vmStartSchedule?: compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule;

  /*
Specifies the schedule for stopping instances.
Structure is documented below.
*/
  vmStopSchedule?: compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule;
}

export function compute_ResourcePolicyInstanceSchedulePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name\nfrom the tz database: http://en.wikipedia.org/wiki/Tz_database.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vmStartSchedule",
      "Specifies the schedule for starting instances.\nStructure is documented below.",
      () =>
        compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vmStopSchedule",
      "Specifies the schedule for stopping instances.\nStructure is documented below.",
      () =>
        compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "expirationTime",
      "The expiration time of the schedule. The timestamp is an RFC3339 string.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "The start time of the schedule. The timestamp is an RFC3339 string.",
      () => [],
      false,
      true,
    ),
  ];
}
