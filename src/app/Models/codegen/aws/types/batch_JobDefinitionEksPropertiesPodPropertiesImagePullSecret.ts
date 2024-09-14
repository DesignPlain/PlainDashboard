import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_JobDefinitionEksPropertiesPodPropertiesImagePullSecret {
  // Unique identifier.
  name?: string;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesImagePullSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Unique identifier.",
      () => [],
      true,
      false,
    ),
  ];
}
