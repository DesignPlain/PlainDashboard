import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  pipes_PipeLogConfigurationCloudwatchLogsLogDestination,
  pipes_PipeLogConfigurationCloudwatchLogsLogDestination_GetTypes,
} from './pipes_PipeLogConfigurationCloudwatchLogsLogDestination';
import {
  pipes_PipeLogConfigurationFirehoseLogDestination,
  pipes_PipeLogConfigurationFirehoseLogDestination_GetTypes,
} from './pipes_PipeLogConfigurationFirehoseLogDestination';
import {
  pipes_PipeLogConfigurationS3LogDestination,
  pipes_PipeLogConfigurationS3LogDestination_GetTypes,
} from './pipes_PipeLogConfigurationS3LogDestination';

export interface pipes_PipeLogConfiguration {
  // Amazon CloudWatch Logs logging configuration settings for the pipe. Detailed below.
  cloudwatchLogsLogDestination?: pipes_PipeLogConfigurationCloudwatchLogsLogDestination;

  // Amazon Kinesis Data Firehose logging configuration settings for the pipe. Detailed below.
  firehoseLogDestination?: pipes_PipeLogConfigurationFirehoseLogDestination;

  // String list that specifies whether the execution data (specifically, the `payload`, `awsRequest`, and `awsResponse` fields) is included in the log messages for this pipe. This applies to all log destinations for the pipe. Valid values `ALL`.
  includeExecutionDatas?: Array<string>;

  // The level of logging detail to include. Valid values `OFF`, `ERROR`, `INFO` and `TRACE`.
  level?: string;

  // Amazon S3 logging configuration settings for the pipe. Detailed below.
  s3LogDestination?: pipes_PipeLogConfigurationS3LogDestination;
}

export function pipes_PipeLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'cloudwatchLogsLogDestination',
      'Amazon CloudWatch Logs logging configuration settings for the pipe. Detailed below.',
      () => pipes_PipeLogConfigurationCloudwatchLogsLogDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'firehoseLogDestination',
      'Amazon Kinesis Data Firehose logging configuration settings for the pipe. Detailed below.',
      () => pipes_PipeLogConfigurationFirehoseLogDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'includeExecutionDatas',
      'String list that specifies whether the execution data (specifically, the `payload`, `awsRequest`, and `awsResponse` fields) is included in the log messages for this pipe. This applies to all log destinations for the pipe. Valid values `ALL`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'level',
      'The level of logging detail to include. Valid values `OFF`, `ERROR`, `INFO` and `TRACE`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3LogDestination',
      'Amazon S3 logging configuration settings for the pipe. Detailed below.',
      () => pipes_PipeLogConfigurationS3LogDestination_GetTypes(),
      false,
      false,
    ),
  ];
}
