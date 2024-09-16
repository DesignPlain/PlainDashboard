import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobDefinitionEksPropertyPodPropertyVolumeHostPath {
  // The path of the file or directory on the host to mount into containers on the pod.
  path?: string;
}

export function batch_getJobDefinitionEksPropertyPodPropertyVolumeHostPath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'path',
      'The path of the file or directory on the host to mount into containers on the pod.',
      () => [],
      true,
      false,
    ),
  ];
}
