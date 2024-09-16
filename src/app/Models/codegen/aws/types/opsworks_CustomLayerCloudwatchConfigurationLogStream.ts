import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface opsworks_CustomLayerCloudwatchConfigurationLogStream {
  // Specifies the time duration for the batching of log events. The minimum value is `5000` and default value is `5000`.
  bufferDuration?: number;

  // Specifies the range of lines for identifying a file. The valid values are one number, or two dash-delimited numbers, such as `1`, `2-5`. The default value is `1`.
  fileFingerprintLines?: string;

  // Specifies the destination log group. A log group is created automatically if it doesn't already exist.
  logGroupName?: string;

  // Specifies the pattern for identifying the start of a log message.
  multilineStartPattern?: string;

  // Specifies the time zone of log event time stamps.
  timeZone?: string;

  // Specifies the maximum size of log events in a batch, in bytes, up to `1048576` bytes. The default value is `32768` bytes.
  batchSize?: number;

  // Specifies how the timestamp is extracted from logs. For more information, see the CloudWatch Logs Agent Reference (https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html).
  datetimeFormat?: string;

  // Specifies the encoding of the log file so that the file can be read correctly. The default is `utf_8`.
  encoding?: string;

  // Specifies log files that you want to push to CloudWatch Logs. File can point to a specific file or multiple files (by using wild card characters such as /var/log/system.log-).
  file?: string;

  // Specifies where to start to read data (`start_of_file` or `end_of_file`). The default is `start_of_file`.
  initialPosition?: string;

  // Specifies the max number of log events in a batch, up to `10000`. The default value is `1000`.
  batchCount?: number;
}

export function opsworks_CustomLayerCloudwatchConfigurationLogStream_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'encoding',
      'Specifies the encoding of the log file so that the file can be read correctly. The default is `utf_8`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'file',
      'Specifies log files that you want to push to CloudWatch Logs. File can point to a specific file or multiple files (by using wild card characters such as /var/log/system.log*).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fileFingerprintLines',
      'Specifies the range of lines for identifying a file. The valid values are one number, or two dash-delimited numbers, such as `1`, `2-5`. The default value is `1`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logGroupName',
      "Specifies the destination log group. A log group is created automatically if it doesn't already exist.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'multilineStartPattern',
      'Specifies the pattern for identifying the start of a log message.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'datetimeFormat',
      'Specifies how the timestamp is extracted from logs. For more information, see the CloudWatch Logs Agent Reference (https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'initialPosition',
      'Specifies where to start to read data (`start_of_file` or `end_of_file`). The default is `start_of_file`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'batchCount',
      'Specifies the max number of log events in a batch, up to `10000`. The default value is `1000`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'bufferDuration',
      'Specifies the time duration for the batching of log events. The minimum value is `5000` and default value is `5000`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'timeZone',
      'Specifies the time zone of log event time stamps.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'batchSize',
      'Specifies the maximum size of log events in a batch, in bytes, up to `1048576` bytes. The default value is `32768` bytes.',
      () => [],
      false,
      false,
    ),
  ];
}
