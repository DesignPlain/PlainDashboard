import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface efs_ReplicationConfigurationDestination {
  // The availability zone in which the replica should be created. If specified, the replica will be created with One Zone storage. If omitted, regional storage will be used.
  availabilityZoneName?: string;

  // The ID of the destination file system for the replication. If no ID is provided, then EFS creates a new file system with the default settings.
  fileSystemId?: string;

  // The Key ID, ARN, alias, or alias ARN of the KMS key that should be used to encrypt the replica file system. If omitted, the default KMS key for EFS `/aws/elasticfilesystem` will be used.
  kmsKeyId?: string;

  // The region in which the replica should be created.
  region?: string;

  //
  status?: string;
}

export function efs_ReplicationConfigurationDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'availabilityZoneName',
      'The availability zone in which the replica should be created. If specified, the replica will be created with One Zone storage. If omitted, regional storage will be used.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'fileSystemId',
      'The ID of the destination file system for the replication. If no ID is provided, then EFS creates a new file system with the default settings.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'The Key ID, ARN, alias, or alias ARN of the KMS key that should be used to encrypt the replica file system. If omitted, the default KMS key for EFS `/aws/elasticfilesystem` will be used.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'The region in which the replica should be created.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, 'status', '', () => [], false, false),
  ];
}
