import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_EventTargetSqsTarget {
  // The FIFO message group ID to use as the target.
  messageGroupId?: string;
}

export function cloudwatch_EventTargetSqsTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "messageGroupId",
      "The FIFO message group ID to use as the target.",
      [],
      false,
      false,
    ),
  ];
}
