import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesisanalyticsv2_ApplicationCloudwatchLoggingOptions,
  kinesisanalyticsv2_ApplicationCloudwatchLoggingOptions_GetTypes,
} from '../types/kinesisanalyticsv2_ApplicationCloudwatchLoggingOptions';
import {
  kinesisanalyticsv2_ApplicationApplicationConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfiguration_GetTypes,
} from '../types/kinesisanalyticsv2_ApplicationApplicationConfiguration';

export interface ApplicationArgs {
  // The ARN of the IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose delivery streams, Amazon S3 objects, and other external resources.
  serviceExecutionRole?: string;

  // Whether to start or stop the application.
  startApplication?: boolean;

  // A map of tags to assign to the application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;

  // The application's mode. Valid values are `STREAMING`, `INTERACTIVE`.
  applicationMode?: string;

  // A CloudWatch log stream to monitor application configuration errors.
  cloudwatchLoggingOptions?: kinesisanalyticsv2_ApplicationCloudwatchLoggingOptions;

  // Whether to force stop an unresponsive Flink-based application.
  forceStop?: boolean;

  // The name of the application.
  name?: string;

  // The application's configuration
  applicationConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfiguration;

  // A summary description of the application.
  description?: string;

  // The runtime environment for the application. Valid values: `SQL-1_0`, `FLINK-1_6`, `FLINK-1_8`, `FLINK-1_11`, `FLINK-1_13`, `FLINK-1_15`, `FLINK-1_18`, `FLINK-1_19`.
  runtimeEnvironment?: string;
}
export class Application extends DS_Resource {
  // The application's configuration
  public applicationConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfiguration;

  // The application's mode. Valid values are `STREAMING`, `INTERACTIVE`.
  public applicationMode?: string;

  // A summary description of the application.
  public description?: string;

  // Whether to force stop an unresponsive Flink-based application.
  public forceStop?: boolean;

  // A map of tags to assign to the application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A CloudWatch log stream to monitor application configuration errors.
  public cloudwatchLoggingOptions?: kinesisanalyticsv2_ApplicationCloudwatchLoggingOptions;

  // The name of the application.
  public name?: string;

  // The ARN of the application.
  public arn?: string;

  // The current timestamp when the application was created.
  public createTimestamp?: string;

  // The ARN of the IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose delivery streams, Amazon S3 objects, and other external resources.
  public serviceExecutionRole?: string;

  // The current timestamp when the application was last updated.
  public lastUpdateTimestamp?: string;

  // The runtime environment for the application. Valid values: `SQL-1_0`, `FLINK-1_6`, `FLINK-1_8`, `FLINK-1_11`, `FLINK-1_13`, `FLINK-1_15`, `FLINK-1_18`, `FLINK-1_19`.
  public runtimeEnvironment?: string;

  // Whether to start or stop the application.
  public startApplication?: boolean;

  // The status of the application.
  public status?: string;

  // The current application version. Kinesis Data Analytics updates the `version_id` each time the application is updated.
  public versionId?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'applicationMode',
        "The application's mode. Valid values are `STREAMING`, `INTERACTIVE`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cloudwatchLoggingOptions',
        'A CloudWatch log stream to monitor application configuration errors.',
        () => kinesisanalyticsv2_ApplicationCloudwatchLoggingOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'applicationConfiguration',
        "The application's configuration",
        () => kinesisanalyticsv2_ApplicationApplicationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'runtimeEnvironment',
        'The runtime environment for the application. Valid values: `SQL-1_0`, `FLINK-1_6`, `FLINK-1_8`, `FLINK-1_11`, `FLINK-1_13`, `FLINK-1_15`, `FLINK-1_18`, `FLINK-1_19`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceExecutionRole',
        'The ARN of the IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose delivery streams, Amazon S3 objects, and other external resources.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'startApplication',
        'Whether to start or stop the application.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceStop',
        'Whether to force stop an unresponsive Flink-based application.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the application.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A summary description of the application.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
