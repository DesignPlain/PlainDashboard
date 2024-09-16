import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrun_getServiceTemplateSpecContainerVolumeMount {
  /*
Path within the container at which the volume should be mounted.  Must
not contain ':'.
*/
  mountPath?: string;

  // The name of the Cloud Run Service.
  name?: string;
}

export function cloudrun_getServiceTemplateSpecContainerVolumeMount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'mountPath',
      "Path within the container at which the volume should be mounted.  Must\nnot contain ':'.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the Cloud Run Service.',
      () => [],
      true,
      false,
    ),
  ];
}
