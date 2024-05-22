import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_JobExecutionProperty,
  glue_JobExecutionProperty_GetTypes,
} from "../types/glue_JobExecutionProperty";
import {
  glue_JobNotificationProperty,
  glue_JobNotificationProperty_GetTypes,
} from "../types/glue_JobNotificationProperty";
import {
  glue_JobCommand,
  glue_JobCommand_GetTypes,
} from "../types/glue_JobCommand";

export interface JobArgs {
  // Execution property of the job. Defined below.
  executionProperty?: glue_JobExecutionProperty;

  // Non-overridable arguments for this job, specified as name-value pairs.
  nonOverridableArguments?: Map<string, string>;

  // Notification property of the job. Defined below.
  notificationProperty?: glue_JobNotificationProperty;

  // The job timeout in minutes. The default is 2880 minutes (48 hours) for `glueetl` and `pythonshell` jobs, and null (unlimited) for `gluestreaming` jobs.
  timeout?: number;

  // Description of the job.
  description?: string;

  // Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. Valid value: `FLEX`, `STANDARD`.
  executionClass?: string;

  // The number of workers of a defined workerType that are allocated when a job runs.
  numberOfWorkers?: number;

  // The ARN of the IAM role associated with this job.
  roleArn?: string;

  // The map of default arguments for this job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the [Calling AWS Glue APIs in Python](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the [Special Parameters Used by AWS Glue](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-glue-arguments.html) topic in the developer guide.
  defaultArguments?: Map<string, string>;

  // The version of glue to use, for example "1.0". Ray jobs should set this to 4.0 or greater. For information about available versions, see the [AWS Glue Release Notes](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html).
  glueVersion?: string;

  // The name of the Security Configuration to be associated with the job.
  securityConfiguration?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The command of the job. Defined below.
  command?: glue_JobCommand;

  // The list of connections used for this job.
  connections?: Array<string>;

  // The maximum number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. `Required` when `pythonshell` is set, accept either `0.0625` or `1.0`. Use `number_of_workers` and `worker_type` arguments instead with `glue_version` `2.0` and above.
  maxCapacity?: number;

  // The maximum number of times to retry this job if it fails.
  maxRetries?: number;

  // The name you assign to this job. It must be unique in your account.
  name?: string;

  /*
The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, G.2X, or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.
- For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.
- For the G.1X worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. Recommended for memory-intensive jobs.
- For the G.2X worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. Recommended for memory-intensive jobs.
- For the G.025X worker type, each worker maps to 0.25 DPU (2 vCPU, 4GB of memory, 64 GB disk), and provides 1 executor per worker. Recommended for low volume streaming jobs. Only available for Glue version 3.0.
- For the Z.2X worker type, each worker maps to 2 M-DPU (8vCPU, 64 GB of m emory, 128 GB disk), and provides up to 8 Ray workers based on the autoscaler.
*/
  workerType?: string;
}
export class Job extends Resource {
  // The version of glue to use, for example "1.0". Ray jobs should set this to 4.0 or greater. For information about available versions, see the [AWS Glue Release Notes](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html).
  public glueVersion?: string;

  // The maximum number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. `Required` when `pythonshell` is set, accept either `0.0625` or `1.0`. Use `number_of_workers` and `worker_type` arguments instead with `glue_version` `2.0` and above.
  public maxCapacity?: number;

  // The ARN of the IAM role associated with this job.
  public roleArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of Glue Job
  public arn?: string;

  // Description of the job.
  public description?: string;

  // The maximum number of times to retry this job if it fails.
  public maxRetries?: number;

  // The name you assign to this job. It must be unique in your account.
  public name?: string;

  /*
The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, G.2X, or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.
- For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.
- For the G.1X worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. Recommended for memory-intensive jobs.
- For the G.2X worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. Recommended for memory-intensive jobs.
- For the G.025X worker type, each worker maps to 0.25 DPU (2 vCPU, 4GB of memory, 64 GB disk), and provides 1 executor per worker. Recommended for low volume streaming jobs. Only available for Glue version 3.0.
- For the Z.2X worker type, each worker maps to 2 M-DPU (8vCPU, 64 GB of m emory, 128 GB disk), and provides up to 8 Ray workers based on the autoscaler.
*/
  public workerType?: string;

  // The command of the job. Defined below.
  public command?: glue_JobCommand;

  // The list of connections used for this job.
  public connections?: Array<string>;

  // The map of default arguments for this job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the [Calling AWS Glue APIs in Python](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the [Special Parameters Used by AWS Glue](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-glue-arguments.html) topic in the developer guide.
  public defaultArguments?: Map<string, string>;

  // Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. Valid value: `FLEX`, `STANDARD`.
  public executionClass?: string;

  // Execution property of the job. Defined below.
  public executionProperty?: glue_JobExecutionProperty;

  // The name of the Security Configuration to be associated with the job.
  public securityConfiguration?: string;

  // Non-overridable arguments for this job, specified as name-value pairs.
  public nonOverridableArguments?: Map<string, string>;

  // Notification property of the job. Defined below.
  public notificationProperty?: glue_JobNotificationProperty;

  // The number of workers of a defined workerType that are allocated when a job runs.
  public numberOfWorkers?: number;

  // The job timeout in minutes. The default is 2880 minutes (48 hours) for `glueetl` and `pythonshell` jobs, and null (unlimited) for `gluestreaming` jobs.
  public timeout?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "executionProperty",
        "Execution property of the job. Defined below.",
        glue_JobExecutionProperty_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the job.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityConfiguration",
        "The name of the Security Configuration to be associated with the job.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "connections",
        "The list of connections used for this job.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name you assign to this job. It must be unique in your account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "workerType",
        "The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, G.2X, or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.\n* For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.\n* For the G.1X worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. Recommended for memory-intensive jobs.\n* For the G.2X worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. Recommended for memory-intensive jobs.\n* For the G.025X worker type, each worker maps to 0.25 DPU (2 vCPU, 4GB of memory, 64 GB disk), and provides 1 executor per worker. Recommended for low volume streaming jobs. Only available for Glue version 3.0.\n* For the Z.2X worker type, each worker maps to 2 M-DPU (8vCPU, 64 GB of m emory, 128 GB disk), and provides up to 8 Ray workers based on the autoscaler.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "nonOverridableArguments",
        "Non-overridable arguments for this job, specified as name-value pairs.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numberOfWorkers",
        "The number of workers of a defined workerType that are allocated when a job runs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The ARN of the IAM role associated with this job.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "command",
        "The command of the job. Defined below.",
        glue_JobCommand_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "notificationProperty",
        "Notification property of the job. Defined below.",
        glue_JobNotificationProperty_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "timeout",
        "The job timeout in minutes. The default is 2880 minutes (48 hours) for `glueetl` and `pythonshell` jobs, and null (unlimited) for `gluestreaming` jobs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "executionClass",
        "Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. Valid value: `FLEX`, `STANDARD`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "defaultArguments",
        "The map of default arguments for this job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the [Calling AWS Glue APIs in Python](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the [Special Parameters Used by AWS Glue](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-glue-arguments.html) topic in the developer guide.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "glueVersion",
        'The version of glue to use, for example "1.0". Ray jobs should set this to 4.0 or greater. For information about available versions, see the [AWS Glue Release Notes](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html).',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxCapacity",
        "The maximum number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. `Required` when `pythonshell` is set, accept either `0.0625` or `1.0`. Use `number_of_workers` and `worker_type` arguments instead with `glue_version` `2.0` and above.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxRetries",
        "The maximum number of times to retry this job if it fails.",
        [],
        false,
        false,
      ),
    ];
  }
}
