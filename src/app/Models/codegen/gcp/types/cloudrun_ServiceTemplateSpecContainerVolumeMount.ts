import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrun_ServiceTemplateSpecContainerVolumeMount {
  // This must match the Name of a Volume.
  name?: string;

  /*
Path within the container at which the volume should be mounted.  Must
not contain ':'.
*/
  mountPath?: string;
}

export function cloudrun_ServiceTemplateSpecContainerVolumeMount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'This must match the Name of a Volume.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mountPath',
      "Path within the container at which the volume should be mounted.  Must\nnot contain ':'.",
      () => [],
      true,
      false,
    ),
  ];
}
