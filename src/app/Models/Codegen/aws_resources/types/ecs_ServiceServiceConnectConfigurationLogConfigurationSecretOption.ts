import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption {
  // The name of the secret.
  name?: string;

  // The secret to expose to the container. The supported values are either the full ARN of the AWS Secrets Manager secret or the full ARN of the parameter in the SSM Parameter Store.
  valueFrom?: string;
}

export function ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the secret.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "valueFrom",
      "The secret to expose to the container. The supported values are either the full ARN of the AWS Secrets Manager secret or the full ARN of the parameter in the SSM Parameter Store.",
      [],
      true,
      false,
    ),
  ];
}
