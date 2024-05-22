import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssm_MaintenanceWindowTaskTaskInvocationParameters,
  ssm_MaintenanceWindowTaskTaskInvocationParameters_GetTypes,
} from "../types/ssm_MaintenanceWindowTaskTaskInvocationParameters";
import {
  ssm_MaintenanceWindowTaskTarget,
  ssm_MaintenanceWindowTaskTarget_GetTypes,
} from "../types/ssm_MaintenanceWindowTaskTarget";

export interface MaintenanceWindowTaskArgs {
  // The maximum number of targets this task can be run for in parallel.
  maxConcurrency?: string;

  // The role that should be assumed when executing the task. If a role is not provided, Systems Manager uses your account's service-linked role. If no service-linked role for Systems Manager exists in your account, it is created for you.
  serviceRoleArn?: string;

  // Configuration block with parameters for task execution.
  taskInvocationParameters?: ssm_MaintenanceWindowTaskTaskInvocationParameters;

  // The type of task being registered. Valid values: `AUTOMATION`, `LAMBDA`, `RUN_COMMAND` or `STEP_FUNCTIONS`.
  taskType?: string;

  // Indicates whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached. Valid values are `CONTINUE_TASK` and `CANCEL_TASK`.
  cutoffBehavior?: string;

  // The description of the maintenance window task.
  description?: string;

  // The priority of the task in the Maintenance Window, the lower the number the higher the priority. Tasks in a Maintenance Window are scheduled in priority order with tasks that have the same priority scheduled in parallel.
  priority?: number;

  // The targets (either instances or window target ids). Instances are specified using Key=InstanceIds,Values=instanceid1,instanceid2. Window target ids are specified using Key=WindowTargetIds,Values=window target id1, window target id2.
  targets?: Array<ssm_MaintenanceWindowTaskTarget>;

  // The ARN of the task to execute.
  taskArn?: string;

  // The Id of the maintenance window to register the task with.
  windowId?: string;

  // The maximum number of errors allowed before this task stops being scheduled.
  maxErrors?: string;

  // The name of the maintenance window task.
  name?: string;
}
export class MaintenanceWindowTask extends Resource {
  // The ARN of the task to execute.
  public taskArn?: string;

  // The type of task being registered. Valid values: `AUTOMATION`, `LAMBDA`, `RUN_COMMAND` or `STEP_FUNCTIONS`.
  public taskType?: string;

  // The maximum number of targets this task can be run for in parallel.
  public maxConcurrency?: string;

  // The description of the maintenance window task.
  public description?: string;

  // The priority of the task in the Maintenance Window, the lower the number the higher the priority. Tasks in a Maintenance Window are scheduled in priority order with tasks that have the same priority scheduled in parallel.
  public priority?: number;

  // Indicates whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached. Valid values are `CONTINUE_TASK` and `CANCEL_TASK`.
  public cutoffBehavior?: string;

  // Configuration block with parameters for task execution.
  public taskInvocationParameters?: ssm_MaintenanceWindowTaskTaskInvocationParameters;

  // The Id of the maintenance window to register the task with.
  public windowId?: string;

  // The targets (either instances or window target ids). Instances are specified using Key=InstanceIds,Values=instanceid1,instanceid2. Window target ids are specified using Key=WindowTargetIds,Values=window target id1, window target id2.
  public targets?: Array<ssm_MaintenanceWindowTaskTarget>;

  // The maximum number of errors allowed before this task stops being scheduled.
  public maxErrors?: string;

  // The name of the maintenance window task.
  public name?: string;

  // The role that should be assumed when executing the task. If a role is not provided, Systems Manager uses your account's service-linked role. If no service-linked role for Systems Manager exists in your account, it is created for you.
  public serviceRoleArn?: string;

  // The ID of the maintenance window task.
  public windowTaskId?: string;

  // The ARN of the maintenance window task.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "cutoffBehavior",
        "Indicates whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached. Valid values are `CONTINUE_TASK` and `CANCEL_TASK`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the maintenance window task.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "taskArn",
        "The ARN of the task to execute.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maxErrors",
        "The maximum number of errors allowed before this task stops being scheduled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the maintenance window task.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maxConcurrency",
        "The maximum number of targets this task can be run for in parallel.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceRoleArn",
        "The role that should be assumed when executing the task. If a role is not provided, Systems Manager uses your account's service-linked role. If no service-linked role for Systems Manager exists in your account, it is created for you.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "taskType",
        "The type of task being registered. Valid values: `AUTOMATION`, `LAMBDA`, `RUN_COMMAND` or `STEP_FUNCTIONS`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "windowId",
        "The Id of the maintenance window to register the task with.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "taskInvocationParameters",
        "Configuration block with parameters for task execution.",
        ssm_MaintenanceWindowTaskTaskInvocationParameters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "The priority of the task in the Maintenance Window, the lower the number the higher the priority. Tasks in a Maintenance Window are scheduled in priority order with tasks that have the same priority scheduled in parallel.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targets",
        "The targets (either instances or window target ids). Instances are specified using Key=InstanceIds,Values=instanceid1,instanceid2. Window target ids are specified using Key=WindowTargetIds,Values=window target id1, window target id2.",
        ssm_MaintenanceWindowTaskTarget_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
