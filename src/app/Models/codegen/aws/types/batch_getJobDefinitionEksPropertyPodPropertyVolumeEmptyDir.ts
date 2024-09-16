import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir {
  // The medium to store the volume.
  medium?: string;

  // The maximum size of the volume. By default, there's no maximum size defined.
  sizeLimit?: string;
}

export function batch_getJobDefinitionEksPropertyPodPropertyVolumeEmptyDir_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sizeLimit',
      "The maximum size of the volume. By default, there's no maximum size defined.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'medium',
      'The medium to store the volume.',
      () => [],
      true,
      false,
    ),
  ];
}
