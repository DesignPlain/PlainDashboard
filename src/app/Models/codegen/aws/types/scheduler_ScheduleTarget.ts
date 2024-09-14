import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  scheduler_ScheduleTargetSqsParameters,
  scheduler_ScheduleTargetSqsParameters_GetTypes,
} from "./scheduler_ScheduleTargetSqsParameters";
import {
  scheduler_ScheduleTargetDeadLetterConfig,
  scheduler_ScheduleTargetDeadLetterConfig_GetTypes,
} from "./scheduler_ScheduleTargetDeadLetterConfig";
import {
  scheduler_ScheduleTargetSagemakerPipelineParameters,
  scheduler_ScheduleTargetSagemakerPipelineParameters_GetTypes,
} from "./scheduler_ScheduleTargetSagemakerPipelineParameters";
import {
  scheduler_ScheduleTargetEcsParameters,
  scheduler_ScheduleTargetEcsParameters_GetTypes,
} from "./scheduler_ScheduleTargetEcsParameters";
import {
  scheduler_ScheduleTargetEventbridgeParameters,
  scheduler_ScheduleTargetEventbridgeParameters_GetTypes,
} from "./scheduler_ScheduleTargetEventbridgeParameters";
import {
  scheduler_ScheduleTargetKinesisParameters,
  scheduler_ScheduleTargetKinesisParameters_GetTypes,
} from "./scheduler_ScheduleTargetKinesisParameters";
import {
  scheduler_ScheduleTargetRetryPolicy,
  scheduler_ScheduleTargetRetryPolicy_GetTypes,
} from "./scheduler_ScheduleTargetRetryPolicy";

export interface scheduler_ScheduleTarget {
  // Templated target type for the Amazon ECS [`RunTask`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) API operation. Detailed below.
  ecsParameters?: scheduler_ScheduleTargetEcsParameters;

  // Templated target type for the EventBridge [`PutEvents`](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) API operation. Detailed below.
  eventbridgeParameters?: scheduler_ScheduleTargetEventbridgeParameters;

  // Templated target type for the Amazon Kinesis [`PutRecord`](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html) API operation. Detailed below.
  kinesisParameters?: scheduler_ScheduleTargetKinesisParameters;

  // Information about the retry policy settings. Detailed below.
  retryPolicy?: scheduler_ScheduleTargetRetryPolicy;

  // The templated target type for the Amazon SQS [`SendMessage`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html) API operation. Detailed below.
  sqsParameters?: scheduler_ScheduleTargetSqsParameters;

  // Information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue. Detailed below.
  deadLetterConfig?: scheduler_ScheduleTargetDeadLetterConfig;

  // Text, or well-formed JSON, passed to the target. Read more in [Universal target](https://docs.aws.amazon.com/scheduler/latest/UserGuide/managing-targets-universal.html).
  input?: string;

  /*
ARN of the IAM role that EventBridge Scheduler will use for this target when the schedule is invoked. Read more in [Set up the execution role](https://docs.aws.amazon.com/scheduler/latest/UserGuide/setting-up.html#setting-up-execution-role).

The following arguments are optional:
*/
  roleArn?: string;

  // Templated target type for the Amazon SageMaker [`StartPipelineExecution`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html) API operation. Detailed below.
  sagemakerPipelineParameters?: scheduler_ScheduleTargetSagemakerPipelineParameters;

  // ARN of the target of this schedule, such as a SQS queue or ECS cluster. For universal targets, this is a [Service ARN specific to the target service](https://docs.aws.amazon.com/scheduler/latest/UserGuide/managing-targets-universal.html#supported-universal-targets).
  arn?: string;
}

export function scheduler_ScheduleTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "ARN of the IAM role that EventBridge Scheduler will use for this target when the schedule is invoked. Read more in [Set up the execution role](https://docs.aws.amazon.com/scheduler/latest/UserGuide/setting-up.html#setting-up-execution-role).\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the target of this schedule, such as a SQS queue or ECS cluster. For universal targets, this is a [Service ARN specific to the target service](https://docs.aws.amazon.com/scheduler/latest/UserGuide/managing-targets-universal.html#supported-universal-targets).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisParameters",
      "Templated target type for the Amazon Kinesis [`PutRecord`](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html) API operation. Detailed below.",
      () => scheduler_ScheduleTargetKinesisParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqsParameters",
      "The templated target type for the Amazon SQS [`SendMessage`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html) API operation. Detailed below.",
      () => scheduler_ScheduleTargetSqsParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deadLetterConfig",
      "Information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue. Detailed below.",
      () => scheduler_ScheduleTargetDeadLetterConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "input",
      "Text, or well-formed JSON, passed to the target. Read more in [Universal target](https://docs.aws.amazon.com/scheduler/latest/UserGuide/managing-targets-universal.html).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sagemakerPipelineParameters",
      "Templated target type for the Amazon SageMaker [`StartPipelineExecution`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html) API operation. Detailed below.",
      () => scheduler_ScheduleTargetSagemakerPipelineParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ecsParameters",
      "Templated target type for the Amazon ECS [`RunTask`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) API operation. Detailed below.",
      () => scheduler_ScheduleTargetEcsParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "eventbridgeParameters",
      "Templated target type for the EventBridge [`PutEvents`](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) API operation. Detailed below.",
      () => scheduler_ScheduleTargetEventbridgeParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryPolicy",
      "Information about the retry policy settings. Detailed below.",
      () => scheduler_ScheduleTargetRetryPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
