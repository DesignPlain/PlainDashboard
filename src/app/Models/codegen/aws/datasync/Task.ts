import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datasync_TaskExcludes,
  datasync_TaskExcludes_GetTypes,
} from '../types/datasync_TaskExcludes';
import {
  datasync_TaskOptions,
  datasync_TaskOptions_GetTypes,
} from '../types/datasync_TaskOptions';
import {
  datasync_TaskSchedule,
  datasync_TaskSchedule_GetTypes,
} from '../types/datasync_TaskSchedule';
import {
  datasync_TaskTaskReportConfig,
  datasync_TaskTaskReportConfig_GetTypes,
} from '../types/datasync_TaskTaskReportConfig';
import {
  datasync_TaskIncludes,
  datasync_TaskIncludes_GetTypes,
} from '../types/datasync_TaskIncludes';

export interface TaskArgs {
  // Amazon Resource Name (ARN) of destination DataSync Location.
  destinationLocationArn?: string;

  // Filter rules that determines which files to exclude from a task.
  excludes?: datasync_TaskExcludes;

  // Name of the DataSync Task.
  name?: string;

  // Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.
  options?: datasync_TaskOptions;

  // Specifies a schedule used to periodically transfer files from a source to a destination location.
  schedule?: datasync_TaskSchedule;

  // Key-value pairs of resource tags to assign to the DataSync Task. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block containing the configuration of a DataSync Task Report. See `task_report_config` below.
  taskReportConfig?: datasync_TaskTaskReportConfig;

  // Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.
  cloudwatchLogGroupArn?: string;

  // Amazon Resource Name (ARN) of source DataSync Location.
  sourceLocationArn?: string;

  // Filter rules that determines which files to include in a task.
  includes?: datasync_TaskIncludes;
}
export class Task extends DS_Resource {
  // Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.
  public options?: datasync_TaskOptions;

  // Key-value pairs of resource tags to assign to the DataSync Task. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of destination DataSync Location.
  public destinationLocationArn?: string;

  // Filter rules that determines which files to exclude from a task.
  public excludes?: datasync_TaskExcludes;

  // Filter rules that determines which files to include in a task.
  public includes?: datasync_TaskIncludes;

  // Specifies a schedule used to periodically transfer files from a source to a destination location.
  public schedule?: datasync_TaskSchedule;

  // Amazon Resource Name (ARN) of source DataSync Location.
  public sourceLocationArn?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Configuration block containing the configuration of a DataSync Task Report. See `task_report_config` below.
  public taskReportConfig?: datasync_TaskTaskReportConfig;

  // Amazon Resource Name (ARN) of the DataSync Task.
  public arn?: string;

  // Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.
  public cloudwatchLogGroupArn?: string;

  // Name of the DataSync Task.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'schedule',
        'Specifies a schedule used to periodically transfer files from a source to a destination location.',
        () => datasync_TaskSchedule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value pairs of resource tags to assign to the DataSync Task. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'cloudwatchLogGroupArn',
        'Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'sourceLocationArn',
        'Amazon Resource Name (ARN) of source DataSync Location.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'includes',
        'Filter rules that determines which files to include in a task.',
        () => datasync_TaskIncludes_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'destinationLocationArn',
        'Amazon Resource Name (ARN) of destination DataSync Location.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the DataSync Task.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'options',
        'Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions.',
        () => datasync_TaskOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'taskReportConfig',
        'Configuration block containing the configuration of a DataSync Task Report. See `task_report_config` below.',
        () => datasync_TaskTaskReportConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'excludes',
        'Filter rules that determines which files to exclude from a task.',
        () => datasync_TaskExcludes_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
