import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface scheduler_ScheduleTargetDeadLetterConfig {
  // ARN of the SQS queue specified as the destination for the dead-letter queue.
  arn?: string;
}

export function scheduler_ScheduleTargetDeadLetterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the SQS queue specified as the destination for the dead-letter queue.",
      [],
      true,
      false,
    ),
  ];
}
