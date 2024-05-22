import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface scheduler_ScheduleTargetSqsParameters {
  // FIFO message group ID to use as the target.
  messageGroupId?: string;
}

export function scheduler_ScheduleTargetSqsParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "messageGroupId",
      "FIFO message group ID to use as the target.",
      [],
      false,
      false,
    ),
  ];
}
