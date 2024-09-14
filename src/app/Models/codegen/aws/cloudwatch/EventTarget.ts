import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudwatch_EventTargetRedshiftTarget,
  cloudwatch_EventTargetRedshiftTarget_GetTypes,
} from "../types/cloudwatch_EventTargetRedshiftTarget";
import {
  cloudwatch_EventTargetInputTransformer,
  cloudwatch_EventTargetInputTransformer_GetTypes,
} from "../types/cloudwatch_EventTargetInputTransformer";
import {
  cloudwatch_EventTargetKinesisTarget,
  cloudwatch_EventTargetKinesisTarget_GetTypes,
} from "../types/cloudwatch_EventTargetKinesisTarget";
import {
  cloudwatch_EventTargetRunCommandTarget,
  cloudwatch_EventTargetRunCommandTarget_GetTypes,
} from "../types/cloudwatch_EventTargetRunCommandTarget";
import {
  cloudwatch_EventTargetRetryPolicy,
  cloudwatch_EventTargetRetryPolicy_GetTypes,
} from "../types/cloudwatch_EventTargetRetryPolicy";
import {
  cloudwatch_EventTargetBatchTarget,
  cloudwatch_EventTargetBatchTarget_GetTypes,
} from "../types/cloudwatch_EventTargetBatchTarget";
import {
  cloudwatch_EventTargetHttpTarget,
  cloudwatch_EventTargetHttpTarget_GetTypes,
} from "../types/cloudwatch_EventTargetHttpTarget";
import {
  cloudwatch_EventTargetSqsTarget,
  cloudwatch_EventTargetSqsTarget_GetTypes,
} from "../types/cloudwatch_EventTargetSqsTarget";
import {
  cloudwatch_EventTargetDeadLetterConfig,
  cloudwatch_EventTargetDeadLetterConfig_GetTypes,
} from "../types/cloudwatch_EventTargetDeadLetterConfig";
import {
  cloudwatch_EventTargetEcsTarget,
  cloudwatch_EventTargetEcsTarget_GetTypes,
} from "../types/cloudwatch_EventTargetEcsTarget";
import {
  cloudwatch_EventTargetSagemakerPipelineTarget,
  cloudwatch_EventTargetSagemakerPipelineTarget_GetTypes,
} from "../types/cloudwatch_EventTargetSagemakerPipelineTarget";

export interface EventTargetArgs {
  // Parameters used when you are providing retry policies. Documented below. A maximum of 1 are allowed.
  retryPolicy?: cloudwatch_EventTargetRetryPolicy;

  // The Amazon Resource Name (ARN) of the target.
  arn?: string;

  // Parameters used when you are using the rule to invoke an Amazon Batch Job. Documented below. A maximum of 1 are allowed.
  batchTarget?: cloudwatch_EventTargetBatchTarget;

  // Used to delete managed rules created by AWS. Defaults to `false`.
  forceDestroy?: boolean;

  // Parameters used when you are using the rule to invoke an API Gateway REST endpoint. Documented below. A maximum of 1 is allowed.
  httpTarget?: cloudwatch_EventTargetHttpTarget;

  // Valid JSON text passed to the target. Conflicts with `input_path` and `input_transformer`.
  input?: string;

  // Parameters used when you are using the rule to invoke an Amazon Redshift Statement. Documented below. A maximum of 1 are allowed.
  redshiftTarget?: cloudwatch_EventTargetRedshiftTarget;

  // Parameters used when you are providing a custom input to a target based on certain event data. Conflicts with `input` and `input_path`.
  inputTransformer?: cloudwatch_EventTargetInputTransformer;

  /*
The name of the rule you want to add targets to.

The following arguments are optional:
*/
  rule?: string;

  // The unique target assignment ID. If missing, will generate a random, unique id.
  targetId?: string;

  // Parameters used when you are providing a dead letter config. Documented below. A maximum of 1 are allowed.
  deadLetterConfig?: cloudwatch_EventTargetDeadLetterConfig;

  // Parameters used when you are using the rule to invoke an Amazon Kinesis Stream. Documented below. A maximum of 1 are allowed.
  kinesisTarget?: cloudwatch_EventTargetKinesisTarget;

  // The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. Required if `ecs_target` is used or target in `arn` is EC2 instance, Kinesis data stream, Step Functions state machine, or Event Bus in different account or region.
  roleArn?: string;

  // Parameters used when you are using the rule to invoke Amazon EC2 Run Command. Documented below. A maximum of 5 are allowed.
  runCommandTargets?: Array<cloudwatch_EventTargetRunCommandTarget>;

  // Parameters used when you are using the rule to invoke Amazon ECS Task. Documented below. A maximum of 1 are allowed.
  ecsTarget?: cloudwatch_EventTargetEcsTarget;

  /*
The name or ARN of the event bus to associate with the rule.
If you omit this, the `default` event bus is used.
*/
  eventBusName?: string;

  // The value of the [JSONPath](http://goessner.net/articles/JsonPath/) that is used for extracting part of the matched event when passing it to the target. Conflicts with `input` and `input_transformer`.
  inputPath?: string;

  // Parameters used when you are using the rule to invoke an Amazon SageMaker Pipeline. Documented below. A maximum of 1 are allowed.
  sagemakerPipelineTarget?: cloudwatch_EventTargetSagemakerPipelineTarget;

  // Parameters used when you are using the rule to invoke an Amazon SQS Queue. Documented below. A maximum of 1 are allowed.
  sqsTarget?: cloudwatch_EventTargetSqsTarget;
}
export class EventTarget extends DS_Resource {
  // Valid JSON text passed to the target. Conflicts with `input_path` and `input_transformer`.
  public input?: string;

  // Parameters used when you are using the rule to invoke an Amazon SQS Queue. Documented below. A maximum of 1 are allowed.
  public sqsTarget?: cloudwatch_EventTargetSqsTarget;

  // The value of the [JSONPath](http://goessner.net/articles/JsonPath/) that is used for extracting part of the matched event when passing it to the target. Conflicts with `input` and `input_transformer`.
  public inputPath?: string;

  // Parameters used when you are providing a custom input to a target based on certain event data. Conflicts with `input` and `input_path`.
  public inputTransformer?: cloudwatch_EventTargetInputTransformer;

  // Parameters used when you are using the rule to invoke an Amazon Redshift Statement. Documented below. A maximum of 1 are allowed.
  public redshiftTarget?: cloudwatch_EventTargetRedshiftTarget;

  // Parameters used when you are providing retry policies. Documented below. A maximum of 1 are allowed.
  public retryPolicy?: cloudwatch_EventTargetRetryPolicy;

  // The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. Required if `ecs_target` is used or target in `arn` is EC2 instance, Kinesis data stream, Step Functions state machine, or Event Bus in different account or region.
  public roleArn?: string;

  /*
The name of the rule you want to add targets to.

The following arguments are optional:
*/
  public rule?: string;

  // Parameters used when you are using the rule to invoke an Amazon SageMaker Pipeline. Documented below. A maximum of 1 are allowed.
  public sagemakerPipelineTarget?: cloudwatch_EventTargetSagemakerPipelineTarget;

  /*
The name or ARN of the event bus to associate with the rule.
If you omit this, the `default` event bus is used.
*/
  public eventBusName?: string;

  // Used to delete managed rules created by AWS. Defaults to `false`.
  public forceDestroy?: boolean;

  // Parameters used when you are using the rule to invoke an API Gateway REST endpoint. Documented below. A maximum of 1 is allowed.
  public httpTarget?: cloudwatch_EventTargetHttpTarget;

  // Parameters used when you are using the rule to invoke an Amazon Kinesis Stream. Documented below. A maximum of 1 are allowed.
  public kinesisTarget?: cloudwatch_EventTargetKinesisTarget;

  // The Amazon Resource Name (ARN) of the target.
  public arn?: string;

  // Parameters used when you are using the rule to invoke an Amazon Batch Job. Documented below. A maximum of 1 are allowed.
  public batchTarget?: cloudwatch_EventTargetBatchTarget;

  // Parameters used when you are providing a dead letter config. Documented below. A maximum of 1 are allowed.
  public deadLetterConfig?: cloudwatch_EventTargetDeadLetterConfig;

  // Parameters used when you are using the rule to invoke Amazon ECS Task. Documented below. A maximum of 1 are allowed.
  public ecsTarget?: cloudwatch_EventTargetEcsTarget;

  // Parameters used when you are using the rule to invoke Amazon EC2 Run Command. Documented below. A maximum of 5 are allowed.
  public runCommandTargets?: Array<cloudwatch_EventTargetRunCommandTarget>;

  // The unique target assignment ID. If missing, will generate a random, unique id.
  public targetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "batchTarget",
        "Parameters used when you are using the rule to invoke an Amazon Batch Job. Documented below. A maximum of 1 are allowed.",
        () => cloudwatch_EventTargetBatchTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "kinesisTarget",
        "Parameters used when you are using the rule to invoke an Amazon Kinesis Stream. Documented below. A maximum of 1 are allowed.",
        () => cloudwatch_EventTargetKinesisTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "eventBusName",
        "The name or ARN of the event bus to associate with the rule.\nIf you omit this, the `default` event bus is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Used to delete managed rules created by AWS. Defaults to `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "httpTarget",
        "Parameters used when you are using the rule to invoke an API Gateway REST endpoint. Documented below. A maximum of 1 is allowed.",
        () => cloudwatch_EventTargetHttpTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inputTransformer",
        "Parameters used when you are providing a custom input to a target based on certain event data. Conflicts with `input` and `input_path`.",
        () => cloudwatch_EventTargetInputTransformer_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deadLetterConfig",
        "Parameters used when you are providing a dead letter config. Documented below. A maximum of 1 are allowed.",
        () => cloudwatch_EventTargetDeadLetterConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "runCommandTargets",
        "Parameters used when you are using the rule to invoke Amazon EC2 Run Command. Documented below. A maximum of 5 are allowed.",
        () => cloudwatch_EventTargetRunCommandTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "inputPath",
        "The value of the [JSONPath](http://goessner.net/articles/JsonPath/) that is used for extracting part of the matched event when passing it to the target. Conflicts with `input` and `input_transformer`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "redshiftTarget",
        "Parameters used when you are using the rule to invoke an Amazon Redshift Statement. Documented below. A maximum of 1 are allowed.",
        () => cloudwatch_EventTargetRedshiftTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetId",
        "The unique target assignment ID. If missing, will generate a random, unique id.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ecsTarget",
        "Parameters used when you are using the rule to invoke Amazon ECS Task. Documented below. A maximum of 1 are allowed.",
        () => cloudwatch_EventTargetEcsTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sagemakerPipelineTarget",
        "Parameters used when you are using the rule to invoke an Amazon SageMaker Pipeline. Documented below. A maximum of 1 are allowed.",
        () => cloudwatch_EventTargetSagemakerPipelineTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "retryPolicy",
        "Parameters used when you are providing retry policies. Documented below. A maximum of 1 are allowed.",
        () => cloudwatch_EventTargetRetryPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "arn",
        "The Amazon Resource Name (ARN) of the target.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "input",
        "Valid JSON text passed to the target. Conflicts with `input_path` and `input_transformer`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "rule",
        "The name of the rule you want to add targets to.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. Required if `ecs_target` is used or target in `arn` is EC2 instance, Kinesis data stream, Step Functions state machine, or Event Bus in different account or region.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sqsTarget",
        "Parameters used when you are using the rule to invoke an Amazon SQS Queue. Documented below. A maximum of 1 are allowed.",
        () => cloudwatch_EventTargetSqsTarget_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
