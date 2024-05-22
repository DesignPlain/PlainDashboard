import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface batch_JobDefinitionEksPropertiesPodPropertiesMetadata {
  //
  labels?: Map<string, string>;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
