import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir {
  // Medium to store the volume. The default value is an empty string, which uses the storage of the node.
  medium?: string;

  // Maximum size of the volume. By default, there's no maximum size defined.
  sizeLimit?: string;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesVolumeEmptyDir_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "medium",
      "Medium to store the volume. The default value is an empty string, which uses the storage of the node.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sizeLimit",
      "Maximum size of the volume. By default, there's no maximum size defined.",
      () => [],
      true,
      false,
    ),
  ];
}
