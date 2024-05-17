import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_JobTemplateTemplateVolume,
  Cloudrunv2_JobTemplateTemplateVolume_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateVolume";
import {
  Cloudrunv2_JobTemplateTemplateVpcAccess,
  Cloudrunv2_JobTemplateTemplateVpcAccess_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateVpcAccess";
import {
  Cloudrunv2_JobTemplateTemplateContainer,
  Cloudrunv2_JobTemplateTemplateContainer_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateContainer";

export interface Cloudrunv2_JobTemplateTemplate {
  /*
Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  Timeout?: string;

  /*
A list of Volumes to make available to containers.
Structure is documented below.
*/
  Volumes?: Array<Cloudrunv2_JobTemplateTemplateVolume>;

  /*
VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
Structure is documented below.
*/
  VpcAccess?: Cloudrunv2_JobTemplateTemplateVpcAccess;

  /*
Holds the single container that defines the unit of execution for this task.
Structure is documented below.
*/
  Containers?: Array<Cloudrunv2_JobTemplateTemplateContainer>;

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
}

export function Cloudrunv2_JobTemplateTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "VpcAccess",
      "VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateVpcAccess_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Containers",
      "Holds the single container that defines the unit of execution for this task.\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateContainer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EncryptionKey",
      "A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExecutionEnvironment",
      "The execution environment being used to host this Task.\nPossible values are: `EXECUTION_ENVIRONMENT_GEN1`, `EXECUTION_ENVIRONMENT_GEN2`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxRetries",
      "Number of retries allowed per Task, before marking this Task failed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      "Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Timeout",
      "Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Volumes",
      "A list of Volumes to make available to containers.\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateVolume_GetTypes(),
      false,
      false,
    ),
  ];
}
