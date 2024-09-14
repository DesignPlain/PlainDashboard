import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption {
  // The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
  name?: string;

  // The secret to expose to the container. The supported values are either the full Amazon Resource Name (ARN) of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.
  valueFrom?: string;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "valueFrom",
      "The secret to expose to the container. The supported values are either the full Amazon Resource Name (ARN) of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.",
      () => [],
      true,
      false,
    ),
  ];
}
