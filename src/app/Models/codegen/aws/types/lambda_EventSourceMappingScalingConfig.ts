import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lambda_EventSourceMappingScalingConfig {
  // Limits the number of concurrent instances that the Amazon SQS event source can invoke. Must be greater than or equal to `2`. See [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency). You need to raise a [Service Quota Ticket](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) to increase the concurrency beyond 1000.
  maximumConcurrency?: number;
}

export function lambda_EventSourceMappingScalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumConcurrency",
      "Limits the number of concurrent instances that the Amazon SQS event source can invoke. Must be greater than or equal to `2`. See [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency). You need to raise a [Service Quota Ticket](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) to increase the concurrency beyond 1000.",
      () => [],
      false,
      false,
    ),
  ];
}
