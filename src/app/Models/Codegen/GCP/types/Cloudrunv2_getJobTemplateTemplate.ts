import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getJobTemplateTemplateVolume,
  Cloudrunv2_getJobTemplateTemplateVolume_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateVolume";
import {
  Cloudrunv2_getJobTemplateTemplateVpcAccess,
  Cloudrunv2_getJobTemplateTemplateVpcAccess_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateVpcAccess";
import {
  Cloudrunv2_getJobTemplateTemplateContainer,
  Cloudrunv2_getJobTemplateTemplateContainer_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateContainer";

export interface Cloudrunv2_getJobTemplateTemplate {
  /*
Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  Timeout?: string;

  // A list of Volumes to make available to containers.
  Volumes?: Array<Cloudrunv2_getJobTemplateTemplateVolume>;

  // VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
  VpcAccesses?: Array<Cloudrunv2_getJobTemplateTemplateVpcAccess>;

  // Holds the single container that defines the unit of execution for this task.
  Containers?: Array<Cloudrunv2_getJobTemplateTemplateContainer>;

  // A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
  EncryptionKey?: string;

  // The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]
  ExecutionEnvironment?: string;

  // Number of retries allowed per Task, before marking this Task failed.
  MaxRetries?: number;

  // Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
  ServiceAccount?: string;
}

export function Cloudrunv2_getJobTemplateTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxRetries",
      "Number of retries allowed per Task, before marking this Task failed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      "Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Timeout",
      "Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.\n\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Volumes",
      "A list of Volumes to make available to containers.",
      Cloudrunv2_getJobTemplateTemplateVolume_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VpcAccesses",
      "VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.",
      Cloudrunv2_getJobTemplateTemplateVpcAccess_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Containers",
      "Holds the single container that defines the unit of execution for this task.",
      Cloudrunv2_getJobTemplateTemplateContainer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EncryptionKey",
      "A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExecutionEnvironment",
      'The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]',
      [],
      true,
      false,
    ),
  ];
}
