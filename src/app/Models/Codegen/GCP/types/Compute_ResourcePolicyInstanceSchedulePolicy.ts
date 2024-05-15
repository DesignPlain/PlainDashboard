import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule,
  Compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule_GetTypes,
} from "./Compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule";
import {
  Compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule,
  Compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule_GetTypes,
} from "./Compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule";

export interface Compute_ResourcePolicyInstanceSchedulePolicy {
  // The expiration time of the schedule. The timestamp is an RFC3339 string.
  ExpirationTime?: string;

  // The start time of the schedule. The timestamp is an RFC3339 string.
  StartTime?: string;

  /*
Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name
from the tz database: http://en.wikipedia.org/wiki/Tz_database.
*/
  TimeZone?: string;

  /*
Specifies the schedule for starting instances.
Structure is documented below.
*/
  VmStartSchedule?: Compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule;

  /*
Specifies the schedule for stopping instances.
Structure is documented below.
*/
  VmStopSchedule?: Compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule;
}

export function Compute_ResourcePolicyInstanceSchedulePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExpirationTime",
      "The expiration time of the schedule. The timestamp is an RFC3339 string.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      "The start time of the schedule. The timestamp is an RFC3339 string.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "TimeZone",
      "Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name\nfrom the tz database: http://en.wikipedia.org/wiki/Tz_database.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "VmStartSchedule",
      "Specifies the schedule for starting instances.\nStructure is documented below.",
      Compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "VmStopSchedule",
      "Specifies the schedule for stopping instances.\nStructure is documented below.",
      Compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule_GetTypes(),
      false,
      true,
    ),
  ];
}
