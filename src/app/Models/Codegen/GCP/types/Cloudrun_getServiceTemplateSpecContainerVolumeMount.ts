import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_getServiceTemplateSpecContainerVolumeMount {
  /*
Path within the container at which the volume should be mounted.  Must
not contain ':'.
*/
  MountPath?: string;

  // The name of the Cloud Run Service.
  Name?: string;
}

export function Cloudrun_getServiceTemplateSpecContainerVolumeMount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MountPath",
      "Path within the container at which the volume should be mounted.  Must\nnot contain ':'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
  ];
}
