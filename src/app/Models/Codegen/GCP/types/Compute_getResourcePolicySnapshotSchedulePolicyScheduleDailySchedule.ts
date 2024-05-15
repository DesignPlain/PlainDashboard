import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule {
  /*
This must be in UTC format that resolves to one of
00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example,
both 13:00-5 and 08:00 are valid.
*/
  StartTime?: string;

  // Defines a schedule with units measured in days. The value determines how many days pass between the start of each cycle. Days in cycle for snapshot schedule policy must be 1.
  DaysInCycle?: number;
}

export function Compute_getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      "This must be in UTC format that resolves to one of\n00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example,\nboth 13:00-5 and 08:00 are valid.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DaysInCycle",
      "Defines a schedule with units measured in days. The value determines how many days pass between the start of each cycle. Days in cycle for snapshot schedule policy must be 1.",
      [],
      true,
      false,
    ),
  ];
}
