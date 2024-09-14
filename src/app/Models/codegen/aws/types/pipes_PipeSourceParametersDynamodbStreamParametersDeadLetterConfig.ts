import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pipes_PipeSourceParametersDynamodbStreamParametersDeadLetterConfig {
  // ARN of this pipe.
  arn?: string;
}

export function pipes_PipeSourceParametersDynamodbStreamParametersDeadLetterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of this pipe.",
      () => [],
      false,
      false,
    ),
  ];
}
