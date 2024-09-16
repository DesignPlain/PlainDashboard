import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir,
  batch_getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir_GetTypes,
} from './batch_getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir';
import {
  batch_getJobDefinitionEksPropertyPodPropertyVolumeHostPath,
  batch_getJobDefinitionEksPropertyPodPropertyVolumeHostPath_GetTypes,
} from './batch_getJobDefinitionEksPropertyPodPropertyVolumeHostPath';
import {
  batch_getJobDefinitionEksPropertyPodPropertyVolumeSecret,
  batch_getJobDefinitionEksPropertyPodPropertyVolumeSecret_GetTypes,
} from './batch_getJobDefinitionEksPropertyPodPropertyVolumeSecret';

export interface batch_getJobDefinitionEksPropertyPodPropertyVolume {
  // Specifies the configuration of a Kubernetes emptyDir volume.
  emptyDirs?: Array<batch_getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir>;

  // The path for the device on the host container instance.
  hostPaths?: Array<batch_getJobDefinitionEksPropertyPodPropertyVolumeHostPath>;

  // The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
  name?: string;

  // Specifies the configuration of a Kubernetes secret volume.
  secrets?: Array<batch_getJobDefinitionEksPropertyPodPropertyVolumeSecret>;
}

export function batch_getJobDefinitionEksPropertyPodPropertyVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'emptyDirs',
      'Specifies the configuration of a Kubernetes emptyDir volume.',
      () =>
        batch_getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'hostPaths',
      'The path for the device on the host container instance.',
      () =>
        batch_getJobDefinitionEksPropertyPodPropertyVolumeHostPath_GetTypes(),
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
    new DynamicUIProps(
      InputType.Array,
      'secrets',
      'Specifies the configuration of a Kubernetes secret volume.',
      () => batch_getJobDefinitionEksPropertyPodPropertyVolumeSecret_GetTypes(),
      true,
      false,
    ),
  ];
}
