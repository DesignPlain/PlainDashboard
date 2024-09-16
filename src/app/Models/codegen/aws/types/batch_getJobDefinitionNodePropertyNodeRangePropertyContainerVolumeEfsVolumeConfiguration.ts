import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig_GetTypes,
} from './batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig';

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration {
  // The authorization configuration details for the Amazon EFS file system.
  authorizationConfigs?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig>;

  // The Amazon EFS file system ID to use.
  fileSystemId?: string;

  // The directory within the Amazon EFS file system to mount as the root directory inside the host.
  rootDirectory?: string;

  // Determines whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server
  transitEncryption?: string;

  // The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server.
  transitEncryptionPort?: number;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'rootDirectory',
      'The directory within the Amazon EFS file system to mount as the root directory inside the host.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'transitEncryption',
      'Determines whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'transitEncryptionPort',
      'The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'authorizationConfigs',
      'The authorization configuration details for the Amazon EFS file system.',
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfigurationAuthorizationConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fileSystemId',
      'The Amazon EFS file system ID to use.',
      () => [],
      true,
      false,
    ),
  ];
}
