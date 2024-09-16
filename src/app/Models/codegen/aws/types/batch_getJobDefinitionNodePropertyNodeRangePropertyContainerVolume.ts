import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration_GetTypes,
} from './batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration';
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost_GetTypes,
} from './batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost';

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolume {
  // This parameter is specified when you're using an Amazon Elastic File System file system for job storage.
  efsVolumeConfigurations?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration>;

  // The contents of the host parameter determine whether your data volume persists on the host container instance and where it's stored.
  hosts?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost>;

  // The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
  name?: string;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'efsVolumeConfigurations',
      "This parameter is specified when you're using an Amazon Elastic File System file system for job storage.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeEfsVolumeConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'hosts',
      "The contents of the host parameter determine whether your data volume persists on the host container instance and where it's stored.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
      () => [],
      true,
      false,
    ),
  ];
}
