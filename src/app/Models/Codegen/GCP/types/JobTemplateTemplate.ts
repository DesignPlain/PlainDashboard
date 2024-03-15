import { JobTemplateTemplateContainer } from "./JobTemplateTemplateContainer";
import { JobTemplateTemplateVolume } from "./JobTemplateTemplateVolume";
import { JobTemplateTemplateVpcAccess } from "./JobTemplateTemplateVpcAccess";

export interface JobTemplateTemplate {
  /*
Holds the single container that defines the unit of execution for this task.
Structure is documented below.
*/
  Containers?: Array<JobTemplateTemplateContainer>;

  // A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
  EncryptionKey?: string;

  /*
The execution environment being used to host this Task.
Possible values are: `EXECUTION_ENVIRONMENT_GEN1`, `EXECUTION_ENVIRONMENT_GEN2`.
*/
  ExecutionEnvironment?: string;

  // Number of retries allowed per Task, before marking this Task failed.
  MaxRetries?: number;

  // Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
  ServiceAccount?: string;

  /*
Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  Timeout?: string;

  /*
A list of Volumes to make available to containers.
Structure is documented below.
*/
  Volumes?: Array<JobTemplateTemplateVolume>;

  /*
VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
Structure is documented below.
*/
  VpcAccess?: JobTemplateTemplateVpcAccess;
}
