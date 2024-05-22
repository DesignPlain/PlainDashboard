import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface pipes_PipeSourceParametersDynamodbStreamParametersDeadLetterConfig {
  // The ARN of the Amazon SQS queue specified as the target for the dead-letter queue.
  arn?: string;
}

export function pipes_PipeSourceParametersDynamodbStreamParametersDeadLetterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The ARN of the Amazon SQS queue specified as the target for the dead-letter queue.",
      [],
      false,
      false,
    ),
  ];
}
