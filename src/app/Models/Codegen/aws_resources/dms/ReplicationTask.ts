import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ReplicationTaskArgs {
  // Whether to run or stop the replication task.
  startReplicationTask?: boolean;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // RFC3339 formatted date string or UNIX timestamp for the start of the Change Data Capture (CDC) operation.
  cdcStartTime?: string;

  /*
The replication task identifier.

- Must contain from 1 to 255 alphanumeric characters or hyphens.
- First character must be a letter.
- Cannot end with a hyphen.
- Cannot contain two consecutive hyphens.
*/
  replicationTaskId?: string;

  // An escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html).
  replicationTaskSettings?: string;

  // The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint.
  sourceEndpointArn?: string;

  // An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)
  tableMappings?: string;

  // The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint.
  targetEndpointArn?: string;

  // Indicates when you want a change data capture (CDC) operation to start. The value can be a RFC3339 formatted date, a checkpoint, or a LSN/SCN format depending on the source engine. For more information see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native).
  cdcStartPosition?: string;

  // The migration type. Can be one of `full-load | cdc | full-load-and-cdc`.
  migrationType?: string;

  // The Amazon Resource Name (ARN) of the replication instance.
  replicationInstanceArn?: string;
}
export class ReplicationTask extends Resource {
  // Indicates when you want a change data capture (CDC) operation to start. The value can be a RFC3339 formatted date, a checkpoint, or a LSN/SCN format depending on the source engine. For more information see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native).
  public cdcStartPosition?: string;

  // The Amazon Resource Name (ARN) of the replication instance.
  public replicationInstanceArn?: string;

  // An escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html).
  public replicationTaskSettings?: string;

  // The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint.
  public targetEndpointArn?: string;

  // The migration type. Can be one of `full-load | cdc | full-load-and-cdc`.
  public migrationType?: string;

  // Whether to run or stop the replication task.
  public startReplicationTask?: boolean;

  // The Amazon Resource Name (ARN) for the replication task.
  public replicationTaskArn?: string;

  // An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)
  public tableMappings?: string;

  // RFC3339 formatted date string or UNIX timestamp for the start of the Change Data Capture (CDC) operation.
  public cdcStartTime?: string;

  /*
The replication task identifier.

- Must contain from 1 to 255 alphanumeric characters or hyphens.
- First character must be a letter.
- Cannot end with a hyphen.
- Cannot contain two consecutive hyphens.
*/
  public replicationTaskId?: string;

  // The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint.
  public sourceEndpointArn?: string;

  // Replication Task status.
  public status?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "targetEndpointArn",
        "The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "migrationType",
        "The migration type. Can be one of `full-load | cdc | full-load-and-cdc`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationInstanceArn",
        "The Amazon Resource Name (ARN) of the replication instance.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "startReplicationTask",
        "Whether to run or stop the replication task.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cdcStartTime",
        "RFC3339 formatted date string or UNIX timestamp for the start of the Change Data Capture (CDC) operation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationTaskId",
        "The replication task identifier.\n\n- Must contain from 1 to 255 alphanumeric characters or hyphens.\n- First character must be a letter.\n- Cannot end with a hyphen.\n- Cannot contain two consecutive hyphens.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableMappings",
        "An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cdcStartPosition",
        "Indicates when you want a change data capture (CDC) operation to start. The value can be a RFC3339 formatted date, a checkpoint, or a LSN/SCN format depending on the source engine. For more information see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationTaskSettings",
        "An escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceEndpointArn",
        "The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint.",
        [],
        true,
        true,
      ),
    ];
  }
}
