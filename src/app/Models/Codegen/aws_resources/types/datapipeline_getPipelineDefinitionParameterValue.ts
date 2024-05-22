import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datapipeline_getPipelineDefinitionParameterValue {
  // ID of the object.
  id?: string;

  // Field value, expressed as a String.
  stringValue?: string;
}

export function datapipeline_getPipelineDefinitionParameterValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "ID of the object.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stringValue",
      "Field value, expressed as a String.",
      [],
      true,
      false,
    ),
  ];
}
