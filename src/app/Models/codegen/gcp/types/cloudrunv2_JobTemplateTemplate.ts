import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrunv2_JobTemplateTemplateVolume,
  cloudrunv2_JobTemplateTemplateVolume_GetTypes,
} from "./cloudrunv2_JobTemplateTemplateVolume";
import {
  cloudrunv2_JobTemplateTemplateVpcAccess,
  cloudrunv2_JobTemplateTemplateVpcAccess_GetTypes,
} from "./cloudrunv2_JobTemplateTemplateVpcAccess";
import {
  cloudrunv2_JobTemplateTemplateContainer,
  cloudrunv2_JobTemplateTemplateContainer_GetTypes,
} from "./cloudrunv2_JobTemplateTemplateContainer";

export interface cloudrunv2_JobTemplateTemplate {
  /*
A list of Volumes to make available to containers.
Structure is documented below.
*/
  volumes?: Array<cloudrunv2_JobTemplateTemplateVolume>;

  /*
VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
Structure is documented below.
*/
  vpcAccess?: cloudrunv2_JobTemplateTemplateVpcAccess;

  /*
Holds the single container that defines the unit of execution for this task.
Structure is documented below.
*/
  containers?: Array<cloudrunv2_JobTemplateTemplateContainer>;

  // A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
  encryptionKey?: string;

  /*
The execution environment being used to host this Task.
Possible values are: `EXECUTION_ENVIRONMENT_GEN1`, `EXECUTION_ENVIRONMENT_GEN2`.
*/
  executionEnvironment?: string;

  // Number of retries allowed per Task, before marking this Task failed.
  maxRetries?: number;

  // Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
  serviceAccount?: string;

  /*
Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  timeout?: string;
}

export function cloudrunv2_JobTemplateTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "vpcAccess",
      "VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.\nStructure is documented below.",
      () => cloudrunv2_JobTemplateTemplateVpcAccess_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containers",
      "Holds the single container that defines the unit of execution for this task.\nStructure is documented below.",
      () => cloudrunv2_JobTemplateTemplateContainer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionKey",
      "A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionEnvironment",
      "The execution environment being used to host this Task.\nPossible values are: `EXECUTION_ENVIRONMENT_GEN1`, `EXECUTION_ENVIRONMENT_GEN2`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRetries",
      "Number of retries allowed per Task, before marking this Task failed.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      "Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeout",
      "Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "A list of Volumes to make available to containers.\nStructure is documented below.",
      () => cloudrunv2_JobTemplateTemplateVolume_GetTypes(),
      false,
      false,
    ),
  ];
}
