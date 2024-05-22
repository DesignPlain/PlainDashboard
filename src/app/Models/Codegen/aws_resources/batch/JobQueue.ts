import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  batch_JobQueueTimeouts,
  batch_JobQueueTimeouts_GetTypes,
} from "../types/batch_JobQueueTimeouts";

export interface JobQueueArgs {
  // Specifies the name of the job queue.
  name?: string;

  /*
The priority of the job queue. Job queues with a higher priority
are evaluated first when associated with the same compute environment.
*/
  priority?: number;

  // The ARN of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy.
  schedulingPolicyArn?: string;

  // The state of the job queue. Must be one of: `ENABLED` or `DISABLED`
  state?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: batch_JobQueueTimeouts;

  /*
List of compute environment ARNs mapped to a job queue.
The position of the compute environments in the list will dictate the order.
*/
  computeEnvironments?: Array<string>;
}
export class JobQueue extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
List of compute environment ARNs mapped to a job queue.
The position of the compute environments in the list will dictate the order.
*/
  public computeEnvironments?: Array<string>;

  /*
The priority of the job queue. Job queues with a higher priority
are evaluated first when associated with the same compute environment.
*/
  public priority?: number;

  // The ARN of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy.
  public schedulingPolicyArn?: string;

  // The state of the job queue. Must be one of: `ENABLED` or `DISABLED`
  public state?: string;

  // The Amazon Resource Name of the job queue.
  public arn?: string;

  // Specifies the name of the job queue.
  public name?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public timeouts?: batch_JobQueueTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "state",
        "The state of the job queue. Must be one of: `ENABLED` or `DISABLED`",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        batch_JobQueueTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "computeEnvironments",
        "List of compute environment ARNs mapped to a job queue.\nThe position of the compute environments in the list will dictate the order.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specifies the name of the job queue.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "The priority of the job queue. Job queues with a higher priority\nare evaluated first when associated with the same compute environment.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "schedulingPolicyArn",
        "The ARN of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy.",
        [],
        false,
        false,
      ),
    ];
  }
}
