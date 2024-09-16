import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint {
  // The name of the volume to mount.
  sourceVolume?: string;

  // The absolute file path in the container where the tmpfs volume is mounted.
  containerPath?: string;

  // If this value is true, the container has read-only access to the volume.
  readOnly?: boolean;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sourceVolume',
      'The name of the volume to mount.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'containerPath',
      'The absolute file path in the container where the tmpfs volume is mounted.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'readOnly',
      'If this value is true, the container has read-only access to the volume.',
      () => [],
      true,
      false,
    ),
  ];
}
