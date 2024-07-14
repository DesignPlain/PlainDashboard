import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface batch_JobDefinitionEksPropertiesPodPropertiesContainersResources {
  //
  limits?: Map<string, string>;

  //
  requests?: Map<string, string>;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesContainersResources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "limits",
      "",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "requests",
      "",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
