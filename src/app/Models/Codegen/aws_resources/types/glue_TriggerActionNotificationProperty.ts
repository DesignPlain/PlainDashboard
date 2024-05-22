import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_TriggerActionNotificationProperty {
  // After a job run starts, the number of minutes to wait before sending a job run delay notification.
  notifyDelayAfter?: number;
}

export function glue_TriggerActionNotificationProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "notifyDelayAfter",
      "After a job run starts, the number of minutes to wait before sending a job run delay notification.",
      [],
      false,
      false,
    ),
  ];
}
