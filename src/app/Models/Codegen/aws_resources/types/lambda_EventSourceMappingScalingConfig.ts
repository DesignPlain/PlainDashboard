import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lambda_EventSourceMappingScalingConfig {
  // Limits the number of concurrent instances that the Amazon SQS event source can invoke. Must be between `2` and `1000`. See [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).
  maximumConcurrency?: number;
}

export function lambda_EventSourceMappingScalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumConcurrency",
      "Limits the number of concurrent instances that the Amazon SQS event source can invoke. Must be between `2` and `1000`. See [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).",
      [],
      false,
      false,
    ),
  ];
}
