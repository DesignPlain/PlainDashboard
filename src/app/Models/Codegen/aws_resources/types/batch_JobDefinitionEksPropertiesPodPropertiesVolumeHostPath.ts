import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface batch_JobDefinitionEksPropertiesPodPropertiesVolumeHostPath {
  // The path of the file or directory on the host to mount into containers on the pod.
  path?: string;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesVolumeHostPath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "path",
      "The path of the file or directory on the host to mount into containers on the pod.",
      [],
      true,
      false,
    ),
  ];
}
