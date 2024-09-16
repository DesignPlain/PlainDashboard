import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption {
  // Name of the secret.
  name?: string;

  // Secret to expose to the container. The supported values are either the full ARN of the AWS Secrets Manager secret or the full ARN of the parameter in the SSM Parameter Store.
  valueFrom?: string;
}

export function ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the secret.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'valueFrom',
      'Secret to expose to the container. The supported values are either the full ARN of the AWS Secrets Manager secret or the full ARN of the parameter in the SSM Parameter Store.',
      () => [],
      true,
      false,
    ),
  ];
}
