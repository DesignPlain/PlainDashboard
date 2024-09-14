import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSqsQueueSinkConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSqsQueueSinkConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSqsQueueSinkConfiguration";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration";

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationElement {
  // Element type.
  type?: string;

  // Configuration for Voice analytics processor.
  voiceAnalyticsProcessorConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration;

  // Configuration for Amazon Transcribe processor.
  amazonTranscribeProcessorConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration;

  // Configuration for Lambda Function sink.
  lambdaFunctionSinkConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration;

  // Configuration for S3 recording sink.
  s3RecordingSinkConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration;

  // Configuration for SNS Topic sink.
  snsTopicSinkConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration;

  // Configuration for Amazon Transcribe Call Analytics processor.
  amazonTranscribeCallAnalyticsProcessorConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration;

  // Configuration for Kinesis Data Stream sink.
  kinesisDataStreamSinkConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration;

  // Configuration for SQS Queue sink.
  sqsQueueSinkConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSqsQueueSinkConfiguration;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Element type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "amazonTranscribeProcessorConfiguration",
      "Configuration for Amazon Transcribe processor.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lambdaFunctionSinkConfiguration",
      "Configuration for Lambda Function sink.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3RecordingSinkConfiguration",
      "Configuration for S3 recording sink.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementS3RecordingSinkConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "snsTopicSinkConfiguration",
      "Configuration for SNS Topic sink.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSnsTopicSinkConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqsQueueSinkConfiguration",
      "Configuration for SQS Queue sink.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementSqsQueueSinkConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "voiceAnalyticsProcessorConfiguration",
      "Configuration for Voice analytics processor.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementVoiceAnalyticsProcessorConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "amazonTranscribeCallAnalyticsProcessorConfiguration",
      "Configuration for Amazon Transcribe Call Analytics processor.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisDataStreamSinkConfiguration",
      "Configuration for Kinesis Data Stream sink.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementKinesisDataStreamSinkConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
