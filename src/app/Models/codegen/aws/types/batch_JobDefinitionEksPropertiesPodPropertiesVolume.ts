import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesVolumeHostPath,
  batch_JobDefinitionEksPropertiesPodPropertiesVolumeHostPath_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesVolumeHostPath';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesVolumeSecret,
  batch_JobDefinitionEksPropertiesPodPropertiesVolumeSecret_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesVolumeSecret';
import {
  batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir,
  batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir_GetTypes,
} from './batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir';

export interface batch_JobDefinitionEksPropertiesPodPropertiesVolume {
  //
  hostPath?: batch_JobDefinitionEksPropertiesPodPropertiesVolumeHostPath;

  // Name of the job definition.
  name?: string;

  //
  secret?: batch_JobDefinitionEksPropertiesPodPropertiesVolumeSecret;

  //
  emptyDir?: batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'hostPath',
      '',
      () =>
        batch_JobDefinitionEksPropertiesPodPropertiesVolumeHostPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the job definition.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'secret',
      '',
      () =>
        batch_JobDefinitionEksPropertiesPodPropertiesVolumeSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'emptyDir',
      '',
      () =>
        batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir_GetTypes(),
      false,
      false,
    ),
  ];
}
