import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  pipes_PipeTargetParametersStepFunctionStateMachineParameters,
  pipes_PipeTargetParametersStepFunctionStateMachineParameters_GetTypes,
} from "./pipes_PipeTargetParametersStepFunctionStateMachineParameters";
import {
  pipes_PipeTargetParametersBatchJobParameters,
  pipes_PipeTargetParametersBatchJobParameters_GetTypes,
} from "./pipes_PipeTargetParametersBatchJobParameters";
import {
  pipes_PipeTargetParametersEcsTaskParameters,
  pipes_PipeTargetParametersEcsTaskParameters_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParameters";
import {
  pipes_PipeTargetParametersLambdaFunctionParameters,
  pipes_PipeTargetParametersLambdaFunctionParameters_GetTypes,
} from "./pipes_PipeTargetParametersLambdaFunctionParameters";
import {
  pipes_PipeTargetParametersCloudwatchLogsParameters,
  pipes_PipeTargetParametersCloudwatchLogsParameters_GetTypes,
} from "./pipes_PipeTargetParametersCloudwatchLogsParameters";
import {
  pipes_PipeTargetParametersEventbridgeEventBusParameters,
  pipes_PipeTargetParametersEventbridgeEventBusParameters_GetTypes,
} from "./pipes_PipeTargetParametersEventbridgeEventBusParameters";
import {
  pipes_PipeTargetParametersKinesisStreamParameters,
  pipes_PipeTargetParametersKinesisStreamParameters_GetTypes,
} from "./pipes_PipeTargetParametersKinesisStreamParameters";
import {
  pipes_PipeTargetParametersSagemakerPipelineParameters,
  pipes_PipeTargetParametersSagemakerPipelineParameters_GetTypes,
} from "./pipes_PipeTargetParametersSagemakerPipelineParameters";
import {
  pipes_PipeTargetParametersSqsQueueParameters,
  pipes_PipeTargetParametersSqsQueueParameters_GetTypes,
} from "./pipes_PipeTargetParametersSqsQueueParameters";
import {
  pipes_PipeTargetParametersHttpParameters,
  pipes_PipeTargetParametersHttpParameters_GetTypes,
} from "./pipes_PipeTargetParametersHttpParameters";
import {
  pipes_PipeTargetParametersRedshiftDataParameters,
  pipes_PipeTargetParametersRedshiftDataParameters_GetTypes,
} from "./pipes_PipeTargetParametersRedshiftDataParameters";

export interface pipes_PipeTargetParameters {
  // The parameters for using an Amazon ECS task as a target. Detailed below.
  ecsTaskParameters?: pipes_PipeTargetParametersEcsTaskParameters;

  // These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. Detailed below.
  httpParameters?: pipes_PipeTargetParametersHttpParameters;

  // Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. Maximum length of 8192 characters.
  inputTemplate?: string;

  // The parameters for using a Lambda function as a target. Detailed below.
  lambdaFunctionParameters?: pipes_PipeTargetParametersLambdaFunctionParameters;

  // These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API BatchExecuteStatement. Detailed below.
  redshiftDataParameters?: pipes_PipeTargetParametersRedshiftDataParameters;

  // The parameters for using a Step Functions state machine as a target. Detailed below.
  stepFunctionStateMachineParameters?: pipes_PipeTargetParametersStepFunctionStateMachineParameters;

  // The parameters for using an AWS Batch job as a target. Detailed below.
  batchJobParameters?: pipes_PipeTargetParametersBatchJobParameters;

  // The parameters for using an CloudWatch Logs log stream as a target. Detailed below.
  cloudwatchLogsParameters?: pipes_PipeTargetParametersCloudwatchLogsParameters;

  // The parameters for using an EventBridge event bus as a target. Detailed below.
  eventbridgeEventBusParameters?: pipes_PipeTargetParametersEventbridgeEventBusParameters;

  // The parameters for using a Kinesis stream as a source. Detailed below.
  kinesisStreamParameters?: pipes_PipeTargetParametersKinesisStreamParameters;

  // The parameters for using a SageMaker pipeline as a target. Detailed below.
  sagemakerPipelineParameters?: pipes_PipeTargetParametersSagemakerPipelineParameters;

  // The parameters for using a Amazon SQS stream as a target. Detailed below.
  sqsQueueParameters?: pipes_PipeTargetParametersSqsQueueParameters;
}

export function pipes_PipeTargetParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "stepFunctionStateMachineParameters",
      "The parameters for using a Step Functions state machine as a target. Detailed below.",
      pipes_PipeTargetParametersStepFunctionStateMachineParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "batchJobParameters",
      "The parameters for using an AWS Batch job as a target. Detailed below.",
      pipes_PipeTargetParametersBatchJobParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogsParameters",
      "The parameters for using an CloudWatch Logs log stream as a target. Detailed below.",
      pipes_PipeTargetParametersCloudwatchLogsParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "eventbridgeEventBusParameters",
      "The parameters for using an EventBridge event bus as a target. Detailed below.",
      pipes_PipeTargetParametersEventbridgeEventBusParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisStreamParameters",
      "The parameters for using a Kinesis stream as a source. Detailed below.",
      pipes_PipeTargetParametersKinesisStreamParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "httpParameters",
      "These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. Detailed below.",
      pipes_PipeTargetParametersHttpParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputTemplate",
      "Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. Maximum length of 8192 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lambdaFunctionParameters",
      "The parameters for using a Lambda function as a target. Detailed below.",
      pipes_PipeTargetParametersLambdaFunctionParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sagemakerPipelineParameters",
      "The parameters for using a SageMaker pipeline as a target. Detailed below.",
      pipes_PipeTargetParametersSagemakerPipelineParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ecsTaskParameters",
      "The parameters for using an Amazon ECS task as a target. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redshiftDataParameters",
      "These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API BatchExecuteStatement. Detailed below.",
      pipes_PipeTargetParametersRedshiftDataParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqsQueueParameters",
      "The parameters for using a Amazon SQS stream as a target. Detailed below.",
      pipes_PipeTargetParametersSqsQueueParameters_GetTypes(),
      false,
      false,
    ),
  ];
}
