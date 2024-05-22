import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_EventTargetDeadLetterConfig {
  // ARN of the SQS queue specified as the target for the dead-letter queue.
  arn?: string;
}

export function cloudwatch_EventTargetDeadLetterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the SQS queue specified as the target for the dead-letter queue.",
      [],
      false,
      false,
    ),
  ];
}
