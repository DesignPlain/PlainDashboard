import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  batch_JobQueueComputeEnvironmentOrder,
  batch_JobQueueComputeEnvironmentOrder_GetTypes,
} from "../types/batch_JobQueueComputeEnvironmentOrder";
import {
  batch_JobQueueJobStateTimeLimitAction,
  batch_JobQueueJobStateTimeLimitAction_GetTypes,
} from "../types/batch_JobQueueJobStateTimeLimitAction";
import {
  batch_JobQueueTimeouts,
  batch_JobQueueTimeouts_GetTypes,
} from "../types/batch_JobQueueTimeouts";

export interface JobQueueArgs {
  // The ARN of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy.
  schedulingPolicyArn?: string;

  // The state of the job queue. Must be one of: `ENABLED` or `DISABLED`
  state?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the name of the job queue.
  name?: string;

  // (Optional) This parameter is deprecated, please use `compute_environment_order` instead. List of compute environment ARNs mapped to a job queue. The position of the compute environments in the list will dictate the order. When importing a AWS Batch Job Queue, the parameter `compute_environments` will always be used over `compute_environment_order`. Please adjust your HCL accordingly.
  computeEnvironments?: Array<string>;

  // The set of job state time limit actions mapped to a job queue. Specifies an action that AWS Batch will take after the job has remained at the head of the queue in the specified state for longer than the specified time.
  jobStateTimeLimitActions?: Array<batch_JobQueueJobStateTimeLimitAction>;

  /*
The priority of the job queue. Job queues with a higher priority
are evaluated first when associated with the same compute environment.
*/
  priority?: number;

  //
  timeouts?: batch_JobQueueTimeouts;

  // The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the VALID state before you can associate them with a job queue. You can associate up to three compute environments with a job queue.
  computeEnvironmentOrders?: Array<batch_JobQueueComputeEnvironmentOrder>;
}
export class JobQueue extends DS_Resource {
  // The set of job state time limit actions mapped to a job queue. Specifies an action that AWS Batch will take after the job has remained at the head of the queue in the specified state for longer than the specified time.
  public jobStateTimeLimitActions?: Array<batch_JobQueueJobStateTimeLimitAction>;

  /*
The priority of the job queue. Job queues with a higher priority
are evaluated first when associated with the same compute environment.
*/
  public priority?: number;

  // The state of the job queue. Must be one of: `ENABLED` or `DISABLED`
  public state?: string;

  //
  public timeouts?: batch_JobQueueTimeouts;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name of the job queue.
  public arn?: string;

  // The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the VALID state before you can associate them with a job queue. You can associate up to three compute environments with a job queue.
  public computeEnvironmentOrders?: Array<batch_JobQueueComputeEnvironmentOrder>;

  // (Optional) This parameter is deprecated, please use `compute_environment_order` instead. List of compute environment ARNs mapped to a job queue. The position of the compute environments in the list will dictate the order. When importing a AWS Batch Job Queue, the parameter `compute_environments` will always be used over `compute_environment_order`. Please adjust your HCL accordingly.
  public computeEnvironments?: Array<string>;

  // Specifies the name of the job queue.
  public name?: string;

  // The ARN of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy.
  public schedulingPolicyArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "The priority of the job queue. Job queues with a higher priority\nare evaluated first when associated with the same compute environment.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => batch_JobQueueTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "schedulingPolicyArn",
        "The ARN of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "state",
        "The state of the job queue. Must be one of: `ENABLED` or `DISABLED`",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "computeEnvironments",
        "(Optional) This parameter is deprecated, please use `compute_environment_order` instead. List of compute environment ARNs mapped to a job queue. The position of the compute environments in the list will dictate the order. When importing a AWS Batch Job Queue, the parameter `compute_environments` will always be used over `compute_environment_order`. Please adjust your HCL accordingly.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "jobStateTimeLimitActions",
        "The set of job state time limit actions mapped to a job queue. Specifies an action that AWS Batch will take after the job has remained at the head of the queue in the specified state for longer than the specified time.",
        () => batch_JobQueueJobStateTimeLimitAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "computeEnvironmentOrders",
        "The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the VALID state before you can associate them with a job queue. You can associate up to three compute environments with a job queue.",
        () => batch_JobQueueComputeEnvironmentOrder_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specifies the name of the job queue.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
