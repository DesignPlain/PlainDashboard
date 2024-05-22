import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_getJobTemplateTemplateContainer,
  cloudrunv2_getJobTemplateTemplateContainer_GetTypes,
} from "./cloudrunv2_getJobTemplateTemplateContainer";
import {
  cloudrunv2_getJobTemplateTemplateVolume,
  cloudrunv2_getJobTemplateTemplateVolume_GetTypes,
} from "./cloudrunv2_getJobTemplateTemplateVolume";
import {
  cloudrunv2_getJobTemplateTemplateVpcAccess,
  cloudrunv2_getJobTemplateTemplateVpcAccess_GetTypes,
} from "./cloudrunv2_getJobTemplateTemplateVpcAccess";

export interface cloudrunv2_getJobTemplateTemplate {
  // Holds the single container that defines the unit of execution for this task.
  containers?: Array<cloudrunv2_getJobTemplateTemplateContainer>;

  // A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
  encryptionKey?: string;

  // The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]
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

  // A list of Volumes to make available to containers.
  volumes?: Array<cloudrunv2_getJobTemplateTemplateVolume>;

  // VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
  vpcAccesses?: Array<cloudrunv2_getJobTemplateTemplateVpcAccess>;
}

export function cloudrunv2_getJobTemplateTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "executionEnvironment",
      'The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRetries",
      "Number of retries allowed per Task, before marking this Task failed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      "Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeout",
      "Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.\n\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "A list of Volumes to make available to containers.",
      cloudrunv2_getJobTemplateTemplateVolume_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vpcAccesses",
      "VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.",
      cloudrunv2_getJobTemplateTemplateVpcAccess_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containers",
      "Holds the single container that defines the unit of execution for this task.",
      cloudrunv2_getJobTemplateTemplateContainer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionKey",
      "A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek",
      [],
      true,
      false,
    ),
  ];
}
