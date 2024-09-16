import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobDefinitionEksPropertyPodPropertyContainerVolumeMount {
  // If this value is true, the container has read-only access to the volume.
  readOnly?: boolean;

  // The path on the container where the volume is mounted.
  mountPath?: string;

  // The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
  name?: string;
}

export function batch_getJobDefinitionEksPropertyPodPropertyContainerVolumeMount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'readOnly',
      'If this value is true, the container has read-only access to the volume.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mountPath',
      'The path on the container where the volume is mounted.',
      () => [],
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
