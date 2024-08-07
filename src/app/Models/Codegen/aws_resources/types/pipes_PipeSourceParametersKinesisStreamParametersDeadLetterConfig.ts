import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface pipes_PipeSourceParametersKinesisStreamParametersDeadLetterConfig {
  // The ARN of the Amazon SQS queue specified as the target for the dead-letter queue.
  arn?: string;
}

export function pipes_PipeSourceParametersKinesisStreamParametersDeadLetterConfig_GetTypes(): DynamicUIProps[] {
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
