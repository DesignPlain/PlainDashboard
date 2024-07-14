import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir {
  // The medium to store the volume. The default value is an empty string, which uses the storage of the node.
  medium?: string;

  // The maximum size of the volume. By default, there's no maximum size defined.
  sizeLimit?: string;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "medium",
      "The medium to store the volume. The default value is an empty string, which uses the storage of the node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sizeLimit",
      "The maximum size of the volume. By default, there's no maximum size defined.",
      [],
      true,
      false,
    ),
  ];
}
