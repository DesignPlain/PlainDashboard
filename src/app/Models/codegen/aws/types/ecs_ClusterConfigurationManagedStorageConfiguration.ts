import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecs_ClusterConfigurationManagedStorageConfiguration {
  // AWS Key Management Service key ID for the Fargate ephemeral storage.
  fargateEphemeralStorageKmsKeyId?: string;

  // AWS Key Management Service key ID to encrypt the managed storage.
  kmsKeyId?: string;
}

export function ecs_ClusterConfigurationManagedStorageConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'fargateEphemeralStorageKmsKeyId',
      'AWS Key Management Service key ID for the Fargate ephemeral storage.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'AWS Key Management Service key ID to encrypt the managed storage.',
      () => [],
      false,
      false,
    ),
  ];
}
