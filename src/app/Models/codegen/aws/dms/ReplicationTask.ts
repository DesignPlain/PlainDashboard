import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ReplicationTaskArgs {
  // Whether to run or stop the replication task.
  startReplicationTask?: boolean;

  // ARN that uniquely identifies the target endpoint.
  targetEndpointArn?: string;

  // Migration type. Can be one of `full-load | cdc | full-load-and-cdc`.
  migrationType?: string;

  // ARN of the replication instance.
  replicationInstanceArn?: string;

  // A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.
  resourceIdentifier?: string;

  // ARN that uniquely identifies the source endpoint.
  sourceEndpointArn?: string;

  // Escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)
  tableMappings?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Indicates when you want a change data capture (CDC) operation to start. The value can be a RFC3339 formatted date, a checkpoint, or a LSN/SCN format depending on the source engine. For more information see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native).
  cdcStartPosition?: string;

  // RFC3339 formatted date string or UNIX timestamp for the start of the Change Data Capture (CDC) operation.
  cdcStartTime?: string;

  // Replication task identifier which must contain from 1 to 255 alphanumeric characters or hyphens, first character must be a letter, cannot end with a hyphen, and cannot contain two consecutive hyphens.
  replicationTaskId?: string;

  // Escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html). Note that `Logging.CloudWatchLogGroup` and `Logging.CloudWatchLogStream` are read only and should not be defined, even as `null`, in the configuration since AWS provides a value for these settings.
  replicationTaskSettings?: string;
}
export class ReplicationTask extends DS_Resource {
  // ARN that uniquely identifies the target endpoint.
  public targetEndpointArn?: string;

  // RFC3339 formatted date string or UNIX timestamp for the start of the Change Data Capture (CDC) operation.
  public cdcStartTime?: string;

  // ARN for the replication task.
  public replicationTaskArn?: string;

  // Replication task identifier which must contain from 1 to 255 alphanumeric characters or hyphens, first character must be a letter, cannot end with a hyphen, and cannot contain two consecutive hyphens.
  public replicationTaskId?: string;

  // ARN that uniquely identifies the source endpoint.
  public sourceEndpointArn?: string;

  // Indicates when you want a change data capture (CDC) operation to start. The value can be a RFC3339 formatted date, a checkpoint, or a LSN/SCN format depending on the source engine. For more information see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native).
  public cdcStartPosition?: string;

  // Escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)
  public tableMappings?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Migration type. Can be one of `full-load | cdc | full-load-and-cdc`.
  public migrationType?: string;

  // Escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html). Note that `Logging.CloudWatchLogGroup` and `Logging.CloudWatchLogStream` are read only and should not be defined, even as `null`, in the configuration since AWS provides a value for these settings.
  public replicationTaskSettings?: string;

  // Whether to run or stop the replication task.
  public startReplicationTask?: boolean;

  // Replication Task status.
  public status?: string;

  // ARN of the replication instance.
  public replicationInstanceArn?: string;

  // A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.
  public resourceIdentifier?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'resourceIdentifier',
        'A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'sourceEndpointArn',
        'ARN that uniquely identifies the source endpoint.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'tableMappings',
        'Escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'cdcStartTime',
        'RFC3339 formatted date string or UNIX timestamp for the start of the Change Data Capture (CDC) operation.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'replicationTaskSettings',
        'Escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html). Note that `Logging.CloudWatchLogGroup` and `Logging.CloudWatchLogStream` are read only and should not be defined, even as `null`, in the configuration since AWS provides a value for these settings.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'startReplicationTask',
        'Whether to run or stop the replication task.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'migrationType',
        'Migration type. Can be one of `full-load | cdc | full-load-and-cdc`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'cdcStartPosition',
        'Indicates when you want a change data capture (CDC) operation to start. The value can be a RFC3339 formatted date, a checkpoint, or a LSN/SCN format depending on the source engine. For more information see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'replicationTaskId',
        'Replication task identifier which must contain from 1 to 255 alphanumeric characters or hyphens, first character must be a letter, cannot end with a hyphen, and cannot contain two consecutive hyphens.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetEndpointArn',
        'ARN that uniquely identifies the target endpoint.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'replicationInstanceArn',
        'ARN of the replication instance.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
